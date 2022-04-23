const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');
requireDir('./models');
mongoose.connect('mongodb://localhost:27017/nodeapi');
const Product = mongoose.model('Product');

const app = express();
app.use(cors());
app.use(express.json())
app.use('/api', require('./routers'));
app.listen(3001);