var knex = require("knex")({
  client: "mysql",
  version: "8.0.13",
  connection: {
    host: "127.0.0.1",
    user: "user",
    password: "password",
    database: "buymyhouse"
  }
});

(async () => {
  var hasPetsTable = await knex.schema.hasTable("pet");
  if (!hasPetsTable) {
    console.log("creating table");
    await knex.schema.createTable("pet", function(table) {
      table.increments();
      table.string("name");
      table.timestamps();
    });
  }

  await knex("pet").insert({ name: "Random pet!" });

  await knex
    .select("name")
    .from("pet")
    .then(results => {
      results.forEach(res => console.log(res.name));
    });

  await knex("pet")
    .where("name", "Random pet!")
    .del();

  await knex
    .select("name")
    .from("pet")
    .then(results => {
      results.forEach(res => console.log(res.name));
    });
})();
