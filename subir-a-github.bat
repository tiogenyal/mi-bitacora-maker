@echo off
title Subir Mi Bitacora Maker a GitHub
color 0B
echo ======================================================================
echo           SUBIENDO MI BITACORA MAKER A GITHUB
echo ======================================================================
echo.
echo Repositorio: https://github.com/tiogenyal/mi-bitacora-maker
echo.
echo Si es la primera vez, se abrira una ventana en tu navegador para
echo que confirmes con un clic en "Authorize GitCredentialManager".
echo.
echo Conectando...
echo.

git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ======================================================================
    echo   [EXITO] Tu pagina web se ha subido correctamente a GitHub!
    echo   Ya puedes ver tus archivos en:
    echo   https://github.com/tiogenyal/mi-bitacora-maker
    echo ======================================================================
) else (
    echo.
    echo ======================================================================
    echo   [AVISO] Hubo un inconveniente al autenticar o subir.
    echo   Asegurate de haber autorizado en la ventana del navegador.
    echo ======================================================================
)

echo.
pause
