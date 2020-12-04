
exports.up = function(knex) {
  return knex.schema.createTable('todos', function (table) {
    table.bigIncrements('id');
    table.bigInteger('user_id').unsigned().index();
    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.string('name');
    table.boolean('is_completed').defaultsTo(0);
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('todos');
};
