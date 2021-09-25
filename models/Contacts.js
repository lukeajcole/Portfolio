const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Contacts extends Model {
}

Contacts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        validate: {
            isDate: true    
        }
    },
    phone: {
      type: DataTypes.STRING
    },
    message: {
        type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'contact',
  }
);

module.exports = Contacts;
