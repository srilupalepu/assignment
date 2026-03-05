const express = require('express');
const app = express();

const PORT = 3000;

const name = "srilakshmi"
const unusednum = 5
console.log(name)

app.get('/', (req, res) => {
    res.send('<h1>Hello, My Name is Srilu 👋</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});