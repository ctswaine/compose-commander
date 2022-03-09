const fs = require("fs");
const yaml = require("js-yaml");
const path = require("path");
const chalk = require("chalk");

module.exports = function set(service, prop, value) {
  try {
    const filePath = `${process.cwd()}${path.sep}docker-compose.yml`;
    const dockerComposeFile = yaml.load(fs.readFileSync(filePath, "utf8"));
    dockerComposeFile.services[service][prop] = value;
    fs.writeFileSync(filePath, yaml.dump(dockerComposeFile));
    console.info(
      chalk.green.bold(`${prop} set to ${value} for ${service} in ${filePath}`)
    );
  } catch (e) {
    console.log(e);
  }
};
