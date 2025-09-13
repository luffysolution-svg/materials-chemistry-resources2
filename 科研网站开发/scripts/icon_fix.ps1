$src='H:\临时代码文件\科研网站开发\images\icons'
$ts=(Get-Date).ToString('yyyyMMdd_HHmmss')
$backupParent='H:\临时代码文件\科研网站开发\images'
$backup=Join-Path $backupParent ('icons_backup_' + $ts)
New-Item -ItemType Directory -Path $backup -Force | Out-Null
Copy-Item -Path (Join-Path $src '*') -Destination $backup -Recurse
Write-Output "Backup created: $backup"

# 复制 canva.png -> imooc.png
$canvaPath = Join-Path $src 'canva.png'
$imoocPath = Join-Path $src 'imooc.png'
if (Test-Path $canvaPath) {
    Copy-Item -Path $canvaPath -Destination $imoocPath -Force
    Write-Output 'Copied canva.png -> imooc.png'
} else {
    Write-Output 'canva.png not found, skipping copy'
}

# 移动 icon-8.png 到 images/_unused
$unusedDir = Join-Path $backupParent '_unused'
New-Item -ItemType Directory -Path $unusedDir -Force | Out-Null
$icon8 = Join-Path $src 'icon-8.png'
if (Test-Path $icon8) {
    Move-Item -Path $icon8 -Destination (Join-Path $unusedDir 'icon-8.png') -Force
    Write-Output 'Moved icon-8.png -> images/_unused/icon-8.png'
} else {
    Write-Output 'icon-8.png not found, skipping move'
}

# 列出 icons 目录当前文件
Get-ChildItem -Path $src | ForEach-Object { Write-Output $_.Name }
