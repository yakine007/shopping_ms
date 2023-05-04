const express = require('express');
const { PORT } = require('./config');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');
const { CreateChannel } = require('./utils')

const StartServer = async() => {

    const app = express();

    
    await databaseConnection();

    const channel = await CreateChannel()
    
    await expressApp(app,channel);

    app.listen(8003, () => {
        console.log(`listening to port 8003`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();