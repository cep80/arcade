const express = require('express');
const app = express();

app.get('/api/profiles', (req, res) => {
  res.json({ profiles: [] });
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Player profiles server running on port ${PORT}`);
});
