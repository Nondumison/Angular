module.exports = (sequelize, type) => {
  return sequelize.define("types", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    typesName: type.STRING,
    typeComment: type.STRING
  });
};
