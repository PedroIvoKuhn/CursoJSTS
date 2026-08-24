const bcryptjs = require("bcryptjs");

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert("users", [
      {
        nome: "Luiz",
        email: "luiz@email.com",
        password_hash: await bcryptjs.hash("123456", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "Luiz 2",
        email: "luiz2@email.com",
        password_hash: await bcryptjs.hash("123456", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: "Luiz 3",
        email: "luiz3@email.com",
        password_hash: await bcryptjs.hash("123456", 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down() {},
};
