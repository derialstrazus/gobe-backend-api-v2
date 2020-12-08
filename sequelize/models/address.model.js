const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('address', {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    street1: {
      type: DataTypes.TEXT,
    },
    street2: {
      type: DataTypes.TEXT,
    },
    city: {
      type: DataTypes.TEXT,
    },
    state: {
      type: DataTypes.TEXT,
    },
    zip: {
      type: DataTypes.TEXT,
    },
    //Definite foreign key association when Sequelize applies associations via associations.js
  });
}