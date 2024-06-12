const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config(); // Đảm bảo rằng dotenv được cấu hình ở đây

console.log('MONGO_URI:', process.env.MONGO_URI); // In biến môi trường ra để kiểm tra

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/players', require('./routes/players'));
app.use('/api/games', require('./routes/games'));
app.use('/api/events', require('./routes/events'));
app.use('/api/transactions', require('./routes/transactions'));

module.exports = app;
