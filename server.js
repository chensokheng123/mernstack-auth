require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./express');
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('connected to database');
});

app.listen(PORT, () => {
  console.log('server is running on port 5000');
});
