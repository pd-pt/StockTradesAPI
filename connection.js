// Uncomment the code below to use Sequelize ORM
const SequelizeConnection = require('./lib/sequelize.connection');
const connectionManager = new SequelizeConnection();


// Uncomment the code below to use Mongoose ORM
// const MongooseConnection = require('./lib/mongoose.connection');
// connectionManager = new MongooseConnection();

module.exports = connectionManager;
