@echo off
echo.
echo ===================================================
echo   Gustoso APK Builder (Bypassing Git Check)
echo ===================================================
echo.
echo Setting EAS_NO_VCS=1 to ignore missing git...
set EAS_NO_VCS=1

echo.
echo Starting Build...
echo FOLLOW THE INSTRUCTIONS BELOW:
echo 1. If asked to log in, enter your Expo username/password.
echo 2. If asked "Generate a new Android Keystore", choose [Yes]
echo.
echo ===================================================
call npx -y eas-cli build -p android --profile preview
echo.
echo Build process finished.
pause
