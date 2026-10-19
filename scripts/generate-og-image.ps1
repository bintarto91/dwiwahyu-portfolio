# ============================================================
#  Generator gambar pratinjau (Open Graph) 1200 x 630 px
#  Gambar ini yang muncul saat link website dibagikan di
#  LinkedIn / WhatsApp / Facebook / X.
#
#  Cara pakai:
#      powershell -ExecutionPolicy Bypass -File scripts\generate-og-image.ps1
#
#  Hasil: public\og-image.png
# ============================================================

Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$dest = Join-Path $root "public\og-image.png"

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

# Lingkaran cahaya (glow) lembut di kanan atas
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
Draw-Glow $g 1010 90 330 $accent 16
Draw-Glow $g 1010 90 230 $accent2 14
Draw-Glow $g 1010 90 150 $accent 12

# ---------- 4. garis aksen di tepi kiri ----------
$barRect = New-Object System.Drawing.Rectangle(0, 0, 7, $H)
$barBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($barRect, $accent, $accent2, 90)
$g.FillRectangle($barBrush, $barRect)
$barBrush.Dispose()

# ---------- 5. lencana "DW" ----------
$badge = New-RoundedPath 90 92 86 86 24
$badgeBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  (New-Object System.Drawing.Rectangle(90, 92, 86, 86)), $accent, $accent2, 45)
$g.FillPath($badgeBrush, $badge)
$badgeBrush.Dispose()
$badge.Dispose()

$fBadge = New-Font $font 36 "Bold" "Pixel"
$bBadge = New-Object System.Drawing.SolidBrush($dark)
$sfCenter = New-Object System.Drawing.StringFormat
$sfCenter.Alignment = [System.Drawing.StringAlignment]::Center
$sfCenter.LineAlignment = [System.Drawing.StringAlignment]::Center
$g.DrawString("DW", $fBadge, $bBadge, (New-Object System.Drawing.RectangleF(90, 92, 86, 86)), $sfCenter)
$fBadge.Dispose(); $bBadge.Dispose()

# ---------- 6. judul kecil di samping lencana ----------
$fLabel = New-Font $font 21 "Bold" "Pixel"
$bLabel = New-Object System.Drawing.SolidBrush($accent)
$g.DrawString("PORTOFOLIO", $fLabel, $bLabel, 200, 112)
$fLabel.Dispose(); $bLabel.Dispose()

$fSub = New-Font $font 20 "Regular" "Pixel"
$bSub = New-Object System.Drawing.SolidBrush($dim)
$g.DrawString("dwiwahyu-portfolio.vercel.app", $fSub, $bSub, 200, 142)
$fSub.Dispose(); $bSub.Dispose()

# ---------- 7. nama (ukuran otomatis agar pas) ----------
$nameText = "Dwi Wahyu Bintarto Prasetyo, S.Kom"
$nameSize = 62
do {
  $fName = New-Font $font $nameSize "Bold" "Pixel"
  $nameWidth = $g.MeasureString($nameText, $fName).Width
  if ($nameWidth -le 1020) { break }
  $fName.Dispose()
  $nameSize -= 2
} while ($nameSize -gt 30)

$bName = New-Object System.Drawing.SolidBrush($white)
$g.DrawString($nameText, $fName, $bName, 90, 258)
$fName.Dispose(); $bName.Dispose()

# ---------- 8. peran ----------
$fRole = New-Font $font 37 "Bold" "Pixel"
$bRole = New-Object System.Drawing.SolidBrush($accent)
$g.DrawString("Database Developer & Project Lead", $fRole, $bRole, 90, 352)
$fRole.Dispose(); $bRole.Dispose()

# ---------- 9. keterangan ----------
$fMeta = New-Font $font 25 "Regular" "Pixel"
$bMeta = New-Object System.Drawing.SolidBrush($gray)
$g.DrawString("11+ tahun pengalaman IT  |  Bandung, Indonesia", $fMeta, $bMeta, 92, 416)
$fMeta.Dispose(); $bMeta.Dispose()

# ---------- 10. garis pemisah ----------
$linePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(38, 255, 255, 255), 1)
$g.DrawLine($linePen, 90, 490, 1110, 490)
$linePen.Dispose()

# ---------- 11. baris bawah ----------
$fFoot = New-Font $font 23 "Bold" "Pixel"
$bFoot = New-Object System.Drawing.SolidBrush($white)
$g.DrawString("Database  |  ERP  |  SIMRS  |  Project Lead", $fFoot, $bFoot, 90, 520)
$fFoot.Dispose(); $bFoot.Dispose()

$fFoot2 = New-Font $font 23 "Regular" "Pixel"
$bFoot2 = New-Object System.Drawing.SolidBrush($dim)
$sfRight = New-Object System.Drawing.StringFormat
$sfRight.Alignment = [System.Drawing.StringAlignment]::Far
$g.DrawString("github.com/bintarto91", $fFoot2, $bFoot2, (New-Object System.Drawing.RectangleF(0, 520, 1110, 40)), $sfRight)
$fFoot2.Dispose(); $bFoot2.Dispose()

# ---------- simpan ----------
$dirPublic = Join-Path $root "public"
if (-not (Test-Path $dirPublic)) { New-Item -ItemType Directory -Path $dirPublic | Out-Null }

$bmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()

Write-Output "Selesai: $dest ($W x $H px)"
