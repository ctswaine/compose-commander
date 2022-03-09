#! /usr/bin/env node

const { program } = require("commander");
const set = require("./bin/set");

program
  .command("set <service> <property> <value>")
  .description("sets the property of the given service")
  .action(set);

program.parse();
