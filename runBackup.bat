@echo Backup database %PG_PATH%%PG_FILENAME%
@echo off
md "C:\tinting-backup"
if not exist "C:\tinting-backup\" (
md "C:\tinting-backup\"
if "!errorlevel!" EQU "0" (
echo Folder created successfully
) else (
echo Error while creating folder
)
) else (
echo Folder already exists
)
SET PG_BIN="pg_dump"
SET PG_HOST=localhost
SET PG_PORT=5432
SET PG_DATABASE=tinting_local
SET PG_USER=postgres
SET PGPASSWORD=postgres
SET PG_PATH=C:\tinting-backup\
SET PG_FILENAME=tinting_backup.sql
%PG_BIN% -h %PG_HOST% -p %PG_PORT% -U %PG_USER% %PG_DATABASE% > %PG_FILENAME%
move ./%PG_FILENAME% "C:\tinting-backup\"
@echo Backup Taken Complete %PG_PATH%%PG_FILENAME%
