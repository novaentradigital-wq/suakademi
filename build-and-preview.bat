@echo off
chcp 65001 >nul
title Su Akademi Turkiye - Build + Preview
cd /d "%~dp0"

echo.
echo ============================================
echo   Production Build olusturuluyor...
echo ============================================
echo.

if not exist "node_modules" (
  call npm install
)

call npm run build
if errorlevel 1 (
  echo.
  echo HATA: Build basarisiz.
  pause
  exit /b 1
)

echo.
echo Build tamam. Onizleme sunucusu baslatiliyor...
echo Tarayici: http://localhost:3000
echo.

call npm run start

pause
