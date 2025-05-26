const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {})
  .then(() => console.log('✅ Połączono z MongoDB Atlas'))
  .catch(err => console.error('❌ Błąd połączenia z MongoDB:', err));

// dodatkowe logi — w razie utraty połączenia
mongoose.connection.on('error', err => {
  console.error('❌ Błąd połączenia z MongoDB:', err);
});

mongoose.connection.once('open', () => {
  console.log('✅ MongoDB: połączenie otwarte.');
});
