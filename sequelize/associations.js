function applyAssociations(sequelize) {

  const { person, address } = sequelize.models;

  person.belongsTo(address, { foreignKey: "address_id" });

}

module.exports = { applyAssociations };