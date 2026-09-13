@echo off
cd /d "%~dp0"
where py >nul 2>nul
if not errorlevel 1 (
  py build_blog.py
) else (
  where python >nul 2>nul
  if errorlevel 1 (
    echo Python was not found. Install Python 3, then run this file again.
    pause
    exit /b 1
  )
  python build_blog.py
)
set "BUILD_EXIT=%errorlevel%"
if not "%BUILD_EXIT%"=="0" pause
exit /b %BUILD_EXIT%
