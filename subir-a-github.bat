@echo off
title Subir Mi Bitacora Maker a GitHub
color 0B
echo ======================================================================
echo           SUBIENDO MI BITACORA MAKER A GITHUB
echo ======================================================================
echo.
echo Repositorio destino:
echo https://github.com/tiogenyal/mi-bitacora-maker
echo.
echo Conectando con GitHub...
echo Si te aparece la ventana de autorizacion, selecciona:
echo   - "Sign in with your browser" (para autorizar con 1 clic en el navegador)
echo     O
echo   - "Sign in with a code" (para usar el codigo en github.com/login/device)
echo.
echo ======================================================================
echo.

git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ======================================================================
    echo   [EXITO] Tu pagina web se ha subido correctamente a GitHub!
    echo   Ya puedes ver tus archivos en vivo en:
    echo   https://github.com/tiogenyal/mi-bitacora-maker
    echo ======================================================================
) else (
    echo.
    echo ======================================================================
    echo   [AVISO] Si cancelaste o hubo un detalle con la autorizacion,
    echo   puedes volver a ejecutar este archivo cuando estes listo.
    echo ======================================================================
)

echo.
echo Presiona cualquier tecla para salir...
pause >nul
