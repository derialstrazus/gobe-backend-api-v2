const { Sequelize } = require('sequelize');
const { applyAssociations } = require('./associations');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.PG_USERNAME,
  process.env.PG_PW,
  {
    dialect: "postgres",
    port: process.env.PG_PORT,
    host: process.env.PG_HOST,
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  }
);

const modelDefiners = [
  require('./models/person.model'),
  require('./models/address.model'),
];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

applyAssociations(sequelize);

module.exports = sequelize;