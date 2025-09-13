Set-Location 'H:\临时代码文件\科研网站开发'
$ts=(Get-Date).ToString('yyyyMMdd_HHmmss')
$bak = 'app.js.bak_' + $ts
Copy-Item -Path 'app.js' -Destination $bak -Force
Write-Output "Backup created: $bak"
if (Get-Command node -ErrorAction SilentlyContinue) {
    node --check app.js
} else {
    Write-Output 'Node not found; skipping syntax check'
}
