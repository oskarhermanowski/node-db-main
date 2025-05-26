const mongoose = require('mongoose');
const { uri } = require('../config');

// db connection
mongoose.connect('mongodb+srv://oskarhermanowski:AIHWdBWaA2p7bKpb@cluster0.fjfhcmn.mongodb.net/NFC_db?retryWrites=true&w=majority&appName=Cluster0', {});