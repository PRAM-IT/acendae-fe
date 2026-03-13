@echo off
cd /d "%~dp0"
set "PHP82=C:\Users\Dell\AppData\Local\Microsoft\WinGet\Packages\PHP.PHP.8.2_Microsoft.Winget.Source_8wekyb3d8bbwe"
set "PHPRC=%PHP82%"
set "PATH=%PHP82%;%~dp0;%PATH%"
npx concurrently -c "#93c5fd,#c4b5fd,#fdba74" "call run-server.bat" "call run-queue.bat" "npm run dev" --names=server,queue,vite
