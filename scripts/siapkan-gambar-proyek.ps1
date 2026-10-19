# ============================================================
#  Menyiapkan tangkapan layar proyek untuk website
#  Otomatis memotong, memperkecil, dan menamai sesuai kebutuhan
#
#  Sumber: file gambar di Downloads
#  Tujuan: public\*.jpg (teroptimasi untuk web)
# ============================================================

Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root "public"

# Daftar: (sumber, nama_hasil, lebar_maks, tinggi_maks, kualitas)
$daftar = @(
  @{ Sumber = "$env:USERPROFILE\Downloads\ss sdew.png";        Hasil = "sdew-ss.jpg";        Lebar = 800; Tinggi = 450; Kualitas = 85 },
  @{ Sumber = "$env:USERPROFILE\Downloads\nerscare ss.png";    Hasil = "nerscare-ss.jpg";    Lebar = 800; Tinggi = 450; Kualitas = 85 },
  @{ Sumber = "$env:USERPROFILE\Downloads\ss rw 05.png";       Hasil = "rw05-ss.jpg";        Lebar = 800; Tinggi = 450; Kualitas = 85 },
  @{ Sumber = "$env:USERPROFILE\Downloads\Alur Proses Bisnis Loccana Terintegrasi.png"; Hasil = "loccana-alur.jpg"; Lebar = 800; Tinggi = 600; Kualitas = 85 }
)

function New-JpegEncoder([int]$quality) {
  $codecs = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders()
  $jpeg = $codecs | Where-Object { $_.MimeType -eq "image/jpeg" }
  $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [int64]$quality)
  return @{ Codec = $jpeg; Params = $params }
}

$enc = New-JpegEncoder 85

if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

foreach ($d in $daftar) {
  $srcPath = $d.Sumber
  $dstPath = Join-Path $outDir $d.Hasil
  $maxW = $d.Lebar
  $maxH = $d.Tinggi

  if (-not (Test-Path -LiteralPath $srcPath)) {
    Write-Output "LEWAT (tidak ada): $srcPath"
    continue
  }

  $src = [System.Drawing.Image]::FromFile($srcPath)
  $ratio = $src.Width / $src.Height

  # Hitung ukuran hasil (mempertahankan rasio, muat di dalam kotak maxW x maxH)
  $outW = $maxW
  $outH = [int][math]::Round($maxW / $ratio)
  if ($outH -gt $maxH) {
    $outH = $maxH
    $outW = [int][math]::Round($maxH * $ratio)
  }

  $bmp = New-Object System.Drawing.Bitmap($outW, $outH)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $g.Clear([System.Drawing.Color]::White)
  $g.DrawImage($src, 0, 0, $outW, $outH)

  $bmp.Save($dstPath, $enc.Codec, $enc.Params)
  $g.Dispose()
  $bmp.Dispose()
  $src.Dispose()

  $kb = [math]::Round((Get-Item -LiteralPath $dstPath).Length / 1kb, 1)
  Write-Output ("OK  {0} x {1} px  {2} KB  ->  {3}" -f $outW, $outH, $kb, $dstPath)
}

Write-Output "Selesai."