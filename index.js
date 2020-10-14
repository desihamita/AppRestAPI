const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const app = express()


const PORT = process.env.port || 2000;
app.listen(PORT, console.log('server running on port 2000'))