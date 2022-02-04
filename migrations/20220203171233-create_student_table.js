'use strict';
const { DataTypes } = require('sequelize')

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('Students', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    class_: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rollNumber: {
        type: DataTypes.INTEGER,
        unique: true      
    },
    createdAt: DataTypes.DATE, 
    updatedAt: DataTypes.DATE, 
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('Students');
  }
};
