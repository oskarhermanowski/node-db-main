const mongoose = require('mongoose');
const { uri } = require('../config');

// db connection
mongoose.connect('mongodb+srv://oskarhermanowski:AIHWdBWaA2p7bKpb@cluster0.fjfhcmn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {});