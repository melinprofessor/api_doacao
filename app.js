const Server = require('./src/server');
require('./src/database/mongoDB');

const start = async() => {
    try {
        const server = new Server();
        await server.start();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start();
