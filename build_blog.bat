@echo off
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  py build_blog.py
) else (
  python build_blog.py
)
if errorlevel 1 pause
