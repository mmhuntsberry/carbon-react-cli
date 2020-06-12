const fs = require("fs");
const yaml = require("js-yaml");

// TODO Create yaml file programmatically

exports.write2Yaml = (data) => {
  let contents = {
    name: `carborn-${data}`, // change here for unique name
    memory: "64M",
    buildpack: "https://github.com/cloudfoundry/staticfile-buildpack.git",
  };

  let yamlStr = yaml.safeDump(contents);

  fs.writeFileSync(
    `../templates/hosting/ibmcloud/manifest.yaml`,
    yamlStr,
    "utf-8"
  ); //! error Error: ENOENT: no such file or directory, open '../templates/hosting/ibmcloud/manifest.yaml'
};
