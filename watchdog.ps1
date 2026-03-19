$logFile = "d:\arcade\logs\watchdog.log"

# Function to log messages
function Log {
    param([string]$message)
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    "$timestamp - $message" | Add-Content $logFile
}

# Check if PM2 is running; restart if needed
$pm2Process = Get-Process pm2 -ErrorAction SilentlyContinue
if (-not $pm2Process) {
    Log "PM2 not running. Restarting..."
    cd C:\projects\mame-arcade-ui
    & pm2 start ecosystem.config.js
} else {
    # PM2 is running; check services
    $status = & pm2 status
    if ($status -match "stopped|errored") {
        Log "Services in bad state. Restarting all..."
        & pm2 restart all
    }
}

Log "Watchdog check complete"