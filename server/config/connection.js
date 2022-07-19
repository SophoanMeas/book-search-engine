const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://ponnymeas:Kiaoptima1@book-search-engine.j7foo.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use this to log mongo queries being executed!
// mongoose.set('debug', true);

module.exports = mongoose.connection;
