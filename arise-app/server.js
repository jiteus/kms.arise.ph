const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.listen(3000, () => {
    console.log('app is running on port 3000');
});