require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    uri: process.env.MONGODB_URI || 'mongodb+srv://oskarhermanowski:AIHWdBWaA2p7bKpb@cluster0.fjfhcmn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
};