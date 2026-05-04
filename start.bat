@echo off
chcp 65001 >nul
title Su Akademi - localhost:4242
cd /d "%~dp0"

cls
echo.
echo ============================================
echo   SU AKADEMI TURKIYE
echo   Web sitesi baslatiliyor (port 4242)
echo ============================================
echo.

if not exist "node_modules" (
  echo Paketler yukleniyor...
  call npm install
  if errorlevel 1 (
    pause
    exit /b 1
  )
)

echo.
echo --------------------------------------------
echo   Tarayici otomatik acilacak.
echo   Acilmazsa elle: http://localhost:4242
echo --------------------------------------------
echo.

start "" /b cmd /c "timeout /t 6 /nobreak >nul && start http://localhost:4242"

cmd /k "npm run dev"
