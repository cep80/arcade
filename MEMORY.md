# MEMORY.md - Arcade Project State

## Arcade PC Setup
- **OS:** Windows 10
- **Location:** D:\arcade
- **Tailscale IP:** (get this from Tailscale system tray on arcade PC)
- **Node.js version:** (run `node --version`)

## Project Structure
- **Frontend:** D:\arcade\frontend (Express server on port 3000)
- **Backend services:** D:\arcade\backend\services
  - rom-server (port 3001)
  - game-metadata (port 3002)
  - player-profiles (port 3003)
- **ROM library:** D:\arcade\roms (path TBD — where are ROMs stored?)
- **Logs:** D:\arcade\logs

## PM2 Services (All Online)
- [x] frontend (port 3000)
- [x] rom-server (port 3001)
- [x] game-metadata (port 3002)
- [x] player-profiles (port 3003)

## GitHub Repo
- **Repo:** cep80/arcade
- **Branch:** main
- **Latest commits:**
  - ef27664: add backend service stubs
  - 0e5f46a: add frontend server and PM2 config

## Vercel Deployment
- **Status:** (Deployed? Pending? Local only?)
- **URL:** (if deployed, what's the Vercel URL?)

## Known Issues
- None yet

## Next Steps
1. Confirm Tailscale IP on arcade PC
2. Confirm ROM library path
3. Deploy frontend to Vercel
4. Test inter-service communication (frontend → rom-server, etc.)
