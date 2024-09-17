const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const contactRoutes = require('./routers/contact.routes');

const app = express();
app.use(cors());
require('dotenv').config();
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB

mongoose.connect(process.env.DB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.use('/contacts',contactRoutes);

  app.listen(3000,()=>console.log('Connected to MongoDB'))

