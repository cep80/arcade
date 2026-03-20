module.exports = {
  apps: [
    {
      name: "rom-server",
      script: "./backend/services/rom-server.js",
      instances: 1,
      exec_mode: "fork",
      restart_delay: 2000,
      error_file: "./logs/rom-server-error.log",
      out_file: "./logs/rom-server-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z"
    },
    {
      name: "game-metadata",
      script: "./backend/services/game-metadata.js",
      instances: 1,
      exec_mode: "fork",
      restart_delay: 2000,
      error_file: "./logs/game-metadata-error.log",
      out_file: "./logs/game-metadata-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z"
    },
    {
      name: "player-profiles",
      script: "./backend/services/player-profiles.js",
      instances: 1,
      exec_mode: "fork",
      restart_delay: 2000,
      error_file: "./logs/player-profiles-error.log",
      out_file: "./logs/player-profiles-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z"
    }
  ]
};
