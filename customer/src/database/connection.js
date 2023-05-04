const mongoose = require('mongoose');
const { DB_URL } = require('../config');

module.exports = async() => {

    try {
        //mongodb+srv://yakineelghoul:xWUNcHzUXBcYkcbI@cluster0.adwyx9y.mongodb.net/customer?retryWrites=true&w=majority
        await mongoose.connect("mongodb+srv://yakineelghoul:xWUNcHzUXBcYkcbI@cluster0.adwyx9y.mongodb.net/customer?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Db Connected');
        
    } catch (error) {
        console.log('Error ============')
        console.log(error);
        process.exit(1);
    }
 
};

 