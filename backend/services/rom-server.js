const express = require('express');
const app = express();

app.get('/api/roms', (req, res) => {
  res.json({ roms: [] });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`ROM server running on port ${PORT}`);
});
