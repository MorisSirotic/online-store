"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("CartItems", "publicId", {
      type: Sequelize.UUID,
      allowNull: true,
    });
    await queryInterface.changeColumn("Countries", "publicId", {
      type: Sequelize.UUID,
      allowNull: true,
    });
    await queryInterface.changeColumn("Orders", "publicId", {
      type: Sequelize.UUID,
      allowNull: true,
    });
    await queryInterface.changeColumn("Products", "publicId", {
      type: Sequelize.UUID,
      allowNull: true,
    });
    await queryInterface.changeColumn("Users", "publicId", {
      type: Sequelize.UUID,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {},
};
