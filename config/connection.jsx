const { connect, connection } = require('mongoose');
require('dotenv').config()

const connectionString = process.env.MONGO_CONNECT;

connect(connectionString);

console.log("Connected & synced to MongoDB - socialNetworkDB 📊")

module.exports = connection;