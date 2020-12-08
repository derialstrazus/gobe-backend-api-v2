const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('person', {
    id: {
      // type: Sequelize.STRING,
      type: DataTypes.TEXT,
      primaryKey: true,
      allowNull: false,
    },
    identifier: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.TEXT,
    },
    last_name: {
      type: DataTypes.TEXT,
    },
    avatar_url: {
      type: DataTypes.TEXT,
    },
    //Definite foreign key association when Sequelize applies associations via associations.js
  });
};