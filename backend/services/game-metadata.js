const express = require('express');
const app = express();

app.get('/api/metadata', (req, res) => {
  res.json({ games: [] });
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Game metadata server running on port ${PORT}`);
});
