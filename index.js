const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/name', (req, res) => {
  let myName = req.query.name;
  console.log(myName);
});
