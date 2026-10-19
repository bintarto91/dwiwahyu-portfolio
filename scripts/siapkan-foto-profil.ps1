# ============================================================
#  Menyiapkan foto profil untuk website
#
#  Yang dilakukan skrip ini:
#   1. Memotong foto ke bentuk 4:5 (potret) dengan fokus bagian atas
#   2. Mengubah ukuran jadi resolusi pas untuk web (default 900 x 1125 px)
#   3. Menyimpan hasilnya sebagai public\foto-profil.jpg
#
#  Cara pakai (contoh):
#     powershell -ExecutionPolicy Bypass -File scripts\siapkan-foto-profil.ps1 `
#       -Sumber "C:\Users\dwahy\Downloads\dwi_nikah.jpeg"
#
#  Atur potongan atas-bawah dengan -PosisiAtasPersen (0 = paling atas)
# ============================================================

param(
  [Parameter(Mandatory = $false)]
  [string]$Sumber = "$env:USERPROFILE\Downloads\dwi_nikah.jpeg",

  [string]$Tujuan = "",
  [int]$Lebar = 900,
  [double]$PosisiAtasPersen = 4.5,
  [int]$Kualitas = 90
)

Add-Type -AssemblyName System.Drawing

if (-not (Test-Path -LiteralPath $Sumber)) {
  Write-Output "GAGAL: file sumber tidak ditemukan -> $Sumber"
  exit 1
}

$root = Split-Path -Parent $PSScriptRoot
if ([string]::IsNullOrWhiteSpace($Tujuan)) {
  $Tujuan = Join-Path $root "public\foto-profil.jpg"
}

$rasio = 5.0 / 4.0   # tinggi : lebar  (potret 4:5)

$src = [System.Drawing.Image]::FromFile($Sumber)

# --- tentukan area potong (4:5) ---
$cropW = $src.Width
$cropH = [int][math]::Round($cropW * $rasio)
if ($cropH -gt $src.Height) {
  $cropH = $src.Height
  $cropW = [int][math]::Round($cropH / $rasio)
}
$cropX = [int][math]::Round(($src.Width - $cropW) / 2)
$cropY = [int][math]::Round($src.Height * ($PosisiAtasPersen / 100.0))
if ($cropY -lt 0) { $cropY = 0 }
if ($cropY + $cropH -gt $src.Height) { $cropY = $src.Height - $cropH }

# --- ukuran hasil ---
$outW = $Lebar
$outH = [int][math]::Round($Lebar * $rasio)

$bmp = New-Object System.Drawing.Bitmap($outW, $outH)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

# latar putih (jaga-jaga kalau foto punya area transparan)
$g.Clear([System.Drawing.Color]::White)

$g.DrawImage($src, (New-Object System.Drawing.Rectangle(0, 0, $outW, $outH)), $cropX, $cropY, $cropW, $cropH, [System.Drawing.GraphicsUnit]::Pixel)

# --- simpan sebagai JPEG dengan kualitas tertentu ---
$kodecJpeg = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq "image/jpeg" }
$param = New-Object System.Drawing.Imaging.EncoderParameters(1)
$param.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [int64]$Kualitas)

$folder = Split-Path -Parent $Tujuan
if (-not (Test-Path $folder)) { New-Item -ItemType Directory -Path $folder | Out-Null }

$bmp.Save($Tujuan, $kodecJpeg, $param)

$g.Dispose()
$bmp.Dispose()
$src.Dispose()

$ukuran = [math]::Round((Get-Item -LiteralPath $Tujuan).Length / 1kb, 1)
Write-Output "Selesai!"
Write-Output "  Sumber    : $Sumber"
Write-Output "  Hasil     : $Tujuan"
Write-Output "  Ukuran    : $outW x $outH px  ($ukuran KB)"
Write-Output "  Potongan  : mulai $PosisiAtasPersen% dari atas"
