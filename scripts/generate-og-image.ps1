# ============================================================
#  Generator gambar pratinjau (Open Graph) 1200 x 630 px
#  Gambar ini yang muncul saat link website dibagikan di
#  LinkedIn / WhatsApp / Facebook / X.
#
#  Foto profil diambil otomatis dari public\foto-profil.jpg
#  (kalau belum ada, dipakai kartu inisial "DW").
#
#  Cara pakai:
#      powershell -ExecutionPolicy Bypass -File scripts\generate-og-image.ps1
#
#  Hasil: public\og-image.png
# ============================================================

Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$dest = Join-Path $root "public\og-image.png"
$fotoSumber = Join-Path $root "public\foto-profil.jpg"

$W = 1200
$H = 630

# ---------- warna ----------
$bg1     = [System.Drawing.Color]::FromArgb(255, 13, 20, 36)
$bg2     = [System.Drawing.Color]::FromArgb(255, 9, 9, 11)
$accent  = [System.Drawing.Color]::FromArgb(255, 56, 189, 248)
$accent2 = [System.Drawing.Color]::FromArgb(255, 96, 165, 250)
$white   = [System.Drawing.Color]::FromArgb(255, 250, 250, 250)
$gray    = [System.Drawing.Color]::FromArgb(255, 161, 161, 170)
$dim     = [System.Drawing.Color]::FromArgb(255, 120, 120, 132)
$dark    = [System.Drawing.Color]::FromArgb(255, 9, 9, 11)

$font = "Segoe UI"

function New-RoundedPath([int]$x, [int]$y, [int]$w, [int]$h, [int]$r) {
  $p = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = $r * 2
  $p.AddArc($x, $y, $d, $d, 180, 90)
  $p.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
  $p.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
  $p.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
  $p.CloseFigure()
  return $p
}

function New-Font([string]$name, [int]$px, [string]$style, [string]$unit) {
  return New-Object System.Drawing.Font($name, $px, $style, $unit)
}

# Lingkaran cahaya (glow) lembut
function Draw-Glow($g, [int]$cx, [int]$cy, [int]$r, [System.Drawing.Color]$c, [int]$alpha) {
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $path.AddEllipse($cx - $r, $cy - $r, $r * 2, $r * 2)
  $brush = New-Object System.Drawing.Drawing2D.PathGradientBrush($path)
  $brush.CenterColor = [System.Drawing.Color]::FromArgb($alpha, $c.R, $c.G, $c.B)
  $brush.SurroundColors = [System.Drawing.Color[]]@([System.Drawing.Color]::FromArgb(0, $c.R, $c.G, $c.B))
  $g.FillPath($brush, $path)
  $brush.Dispose()
  $path.Dispose()
}

$bmp = New-Object System.Drawing.Bitmap($W, $H)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# ---------- 1. latar gradasi gelap ----------
$rect = New-Object System.Drawing.Rectangle(0, 0, $W, $H)
$bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $bg1, $bg2, 40)
$g.FillRectangle($bgBrush, $rect)
$bgBrush.Dispose()

# ---------- 2. pola kotak-kotak halus (sama seperti hero website) ----------
$gridPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(12, 255, 255, 255), 1)
for ($x = 0; $x -le $W; $x += 44) { $g.DrawLine($gridPen, $x, 0, $x, $H) }
for ($y = 0; $y -le $H; $y += 44) { $g.DrawLine($gridPen, 0, $y, $W, $y) }
$gridPen.Dispose()

# ---------- 3. cahaya biru ----------
Draw-Glow $g 1040 60 340 $accent 18
Draw-Glow $g 120 600 300 $accent2 12

# ---------- 4. garis aksen di tepi kiri ----------
$barRect = New-Object System.Drawing.Rectangle(0, 0, 7, $H)
$barBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($barRect, $accent, $accent2, 90)
$g.FillRectangle($barBrush, $barRect)
$barBrush.Dispose()

# ---------- 5. lencana "DW" + label ----------
$badge = New-RoundedPath 90 86 78 78 22
$badgeBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  (New-Object System.Drawing.Rectangle(90, 86, 78, 78)), $accent, $accent2, 45)
$g.FillPath($badgeBrush, $badge)
$badgeBrush.Dispose()
$badge.Dispose()

$fBadge = New-Font $font 32 "Bold" "Pixel"
$bBadge = New-Object System.Drawing.SolidBrush($dark)
$sfCenter = New-Object System.Drawing.StringFormat
$sfCenter.Alignment = [System.Drawing.StringAlignment]::Center
$sfCenter.LineAlignment = [System.Drawing.StringAlignment]::Center
$g.DrawString("DW", $fBadge, $bBadge, (New-Object System.Drawing.RectangleF(90, 86, 78, 78)), $sfCenter)
$fBadge.Dispose(); $bBadge.Dispose()

$fLabel = New-Font $font 20 "Bold" "Pixel"
$bLabel = New-Object System.Drawing.SolidBrush($accent)
$g.DrawString("PORTOFOLIO", $fLabel, $bLabel, 184, 100)
$fLabel.Dispose(); $bLabel.Dispose()

$fSub = New-Font $font 19 "Regular" "Pixel"
$bSub = New-Object System.Drawing.SolidBrush($dim)
$g.DrawString("dwiwahyu-portfolio.vercel.app", $fSub, $bSub, 184, 128)
$fSub.Dispose(); $bSub.Dispose()

# ---------- 6. kartu foto profil (kanan) ----------
$cardX = 830
$cardY = 112
$cardW = 290
$cardH = 363   # rasio 4:5

Draw-Glow $g ($cardX + [int]($cardW / 2)) ($cardY + [int]($cardH / 2)) 285 $accent 34

if (Test-Path $fotoSumber) {
  # bingkai gradasi
  $ringPath = New-RoundedPath ($cardX - 5) ($cardY - 5) ($cardW + 10) ($cardH + 10) 26

  $ringX = $cardX - 5
  $ringY = $cardY - 5
  $ringW = $cardW + 10
  $ringH = $cardH + 10
  $ringRect = New-Object System.Drawing.Rectangle($ringX, $ringY, $ringW, $ringH)
  $ringBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($ringRect, $accent, $accent2, 45)
  $g.FillPath($ringBrush, $ringPath)
  $ringBrush.Dispose(); $ringPath.Dispose()

  # foto dipotong mengikuti sudut membulat
  $clipPath = New-RoundedPath $cardX $cardY $cardW $cardH 20
  $g.SetClip($clipPath)
  $foto = [System.Drawing.Image]::FromFile($fotoSumber)
  $g.DrawImage($foto, (New-Object System.Drawing.Rectangle($cardX, $cardY, $cardW, $cardH)))
  $foto.Dispose()
  $g.ResetClip()
  $clipPath.Dispose()
}
else {
  $cardPath = New-RoundedPath $cardX $cardY $cardW $cardH 20
  $cardBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 24, 24, 27))
  $g.FillPath($cardBrush, $cardPath)
  $cardBrush.Dispose()
  $fBig = New-Font $font 84 "Bold" "Pixel"
  $bBig = New-Object System.Drawing.SolidBrush($accent)
  $g.DrawString("DW", $fBig, $bBig, (New-Object System.Drawing.RectangleF($cardX, $cardY, $cardW, $cardH)), $sfCenter)
  $fBig.Dispose(); $bBig.Dispose()
  $cardPath.Dispose()
}

# ---------- 7. nama (2 baris, ukuran otomatis) ----------
$namaBaris = @("Dwi Wahyu Bintarto", "Prasetyo, S.Kom")
$namaUkuran = 56
do {
  $fNama = New-Font $font $namaUkuran "Bold" "Pixel"
  $lebarMaks = 0
  foreach ($baris in $namaBaris) {
    $lebarBaris = $g.MeasureString($baris, $fNama).Width
    if ($lebarBaris -gt $lebarMaks) { $lebarMaks = $lebarBaris }
  }
  if ($lebarMaks -le 640) { break }
  $fNama.Dispose()
  $namaUkuran -= 2
} while ($namaUkuran -gt 30)

$bNama = New-Object System.Drawing.SolidBrush($white)
$yNama = 244
foreach ($baris in $namaBaris) {
  $g.DrawString($baris, $fNama, $bNama, 90, $yNama)
  $yNama += $namaUkuran + 10
}
$fNama.Dispose(); $bNama.Dispose()

# ---------- 8. peran ----------
$fRole = New-Font $font 33 "Bold" "Pixel"
$bRole = New-Object System.Drawing.SolidBrush($accent)
$g.DrawString("Database Developer & Project Lead", $fRole, $bRole, 90, 404)
$fRole.Dispose(); $bRole.Dispose()

# ---------- 9. keterangan ----------
$fMeta = New-Font $font 23 "Regular" "Pixel"
$bMeta = New-Object System.Drawing.SolidBrush($gray)
$g.DrawString("11+ tahun pengalaman IT  |  Bandung, Indonesia", $fMeta, $bMeta, 92, 456)
$fMeta.Dispose(); $bMeta.Dispose()

# ---------- 10. garis pemisah ----------
$linePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(38, 255, 255, 255), 1)
$g.DrawLine($linePen, 90, 508, 760, 508)
$linePen.Dispose()

# ---------- 11. baris bawah ----------
$fFoot = New-Font $font 21 "Bold" "Pixel"
$bFoot = New-Object System.Drawing.SolidBrush($white)
$g.DrawString("Database  |  ERP  |  SIMRS", $fFoot, $bFoot, 90, 534)
$fFoot.Dispose(); $bFoot.Dispose()

$fFoot2 = New-Font $font 21 "Regular" "Pixel"
$bFoot2 = New-Object System.Drawing.SolidBrush($dim)
$sfRight = New-Object System.Drawing.StringFormat
$sfRight.Alignment = [System.Drawing.StringAlignment]::Far
$g.DrawString("github.com/bintarto91", $fFoot2, $bFoot2, (New-Object System.Drawing.RectangleF(90, 534, 670, 34)), $sfRight)
$fFoot2.Dispose(); $bFoot2.Dispose()

# ---------- simpan ----------
$dirPublic = Join-Path $root "public"
if (-not (Test-Path $dirPublic)) { New-Item -ItemType Directory -Path $dirPublic | Out-Null }

$bmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()

Write-Output "Selesai: $dest ($W x $H px)"
if (Test-Path $fotoSumber) { Write-Output "Foto profil dipakai: $fotoSumber" }
else { Write-Output "Catatan: public\foto-profil.jpg belum ada - dipakai kartu inisial DW." }
