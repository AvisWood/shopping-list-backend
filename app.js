const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});