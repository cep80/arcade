const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>MAME Arcade</title>
      <style>
        body { font-family: Arial; text-align: center; padding: 40px; }
        h1 { color: #333; }
      </style>
    </head>
    <body>
      <h1>MAME Arcade</h1>
      <p>Kid-friendly game selection and management</p>
      <p>Status: Online</p>
    </body>
    </html>
  `);
});

module.exports = app;
