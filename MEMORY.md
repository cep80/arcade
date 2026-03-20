# MEMORY.md - Arcade Project State

## Arcade PC Setup
- **OS:** Windows 10
- **Location:** D:\arcade
- **Tailscale IP:** 100.82.102.87
- **Node.js version:** v24.14.0

## Project Structure
- **Frontend:** D:\arcade\frontend (Express server on port 3000)
- **Backend services:** D:\arcade\backend\services
  - rom-server (port 3001)
  - game-metadata (port 3002)
  - player-profiles (port 3003)
- **ROM library:** D:\arcade\roms
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
- **Status:** Not yet deployed (Step 19 pending)
- **URL:** TBD

## Known Issues
- None yet

## Next Steps
1. Deploy frontend to Vercel (Step 19-20)
2. Test inter-service communication (frontend → rom-server, etc.)
3. Set up ROM ingestion pipeline
4. Configure Discord bot for deployments
