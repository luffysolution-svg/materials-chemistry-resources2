$file='H:\临时代码文件\科研网站开发\material-chemistry-resources.html'
$ts=(Get-Date).ToString('yyyyMMdd_HHmmss')
$backup = $file + '.bak_' + $ts
Copy-Item -Path $file -Destination $backup -Force
Write-Output "Backup created: $backup"

# 读取文件、替换 canva->imooc 在特定上下文（仅替换 alt="IMOOC" 的那一处）
$content = Get-Content -Path $file -Raw
$new = $content -replace 'images/icons/canva.png"\s+alt="IMOOC"','images/icons/imooc.png" alt="IMOOC"'
if ($new -ne $content) {
    Set-Content -Path $file -Value $new -Force
    Write-Output 'HTML updated: canva.png -> imooc.png for IMOOC card'
} else {
    Write-Output 'No replacement made (pattern not found)'
}

# 确认替换行
Select-String -Path $file -Pattern 'imooc.png' -SimpleMatch | ForEach-Object { Write-Output $_.Line }
