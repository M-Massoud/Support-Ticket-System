const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('hello world from home page');
});

app.listen(PORT, () => {
  console.log(`app listening successfully on port ${PORT}`);
});
