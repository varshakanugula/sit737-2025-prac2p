const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to My Simple Node.js Website');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
