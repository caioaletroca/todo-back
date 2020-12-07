
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
      table.bigIncrements('id');
      table.string('name', 100);
      table.string('login', 50).unique().index();
      table.string('password', 100);
      table.string('token');
      table.timestamps();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
