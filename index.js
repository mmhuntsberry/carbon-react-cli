#!/usr/bin/env node

const fs = require("fs");
const inquirer = require("inquirer");

const CHOICES = {
  projects: fs.readdirSync(`${__dirname}/templates/projects`),
  cicd: fs.readdirSync(`${__dirname}/templates/cicd`),
  linting: fs.readdirSync(`${__dirname}/templates/linting`),
  hosting: fs.readdirSync(`${__dirname}/templates/hosting`),
};

const QUESTIONS = [
  {
    name: "project-choice",
    type: "list",
    message: "What project template would you like to generate?",
    choices: CHOICES.projects,
  },
  {
    name: "cicd-provider",
    type: "list",
    message: "Would you like to setup continous integration/deployment?",
    choices: [...CHOICES.cicd, "none"],
  },
  // {
  //   name: "linting",
  //   type: "list",
  //   message: "Would you like to have some standards?",
  //   choices: [...CHOICES.linting, "none"],
  // },
  {
    name: "hosting",
    type: "list",
    message: "Where would you like to host your project?",
    choices: [...CHOICES.hosting, "none"],
  },
  {
    name: "project-name",
    type: "input",
    message: "Project name:",
    validate(input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else
        return "Project name may only include letters, numbers, underscores, and hashes.";
    },
  },
];

const CURR_DIR = process.cwd();

inquirer.prompt(QUESTIONS).then((answers) => {
  const projectChoice = answers["project-choice"];
  const projectName = answers["project-name"];
  const cicdChoice = answers["cicd-provider"];
  const lintingChoice = answers["linting"];
  const hostingChoice = answers["hosting"];
  const projectTemplatePath = `${__dirname}/templates/projects/${projectChoice}`;
  const cicdTemplatePath = `${__dirname}/templates/cicd/${cicdChoice}`;
  const lintingTemplatePath = `${__dirname}/templates/linting/${lintingChoice}`;
  const hostingTemplatePath = `${__dirname}/templates/hosting/${hostingChoice}`;

  fs.mkdirSync(`${CURR_DIR}/${projectName}`);

  createDirectoryContents(projectTemplatePath, projectName);

  if (!fs.existsSync(cicdTemplatePath)) return;
  createDirectoryContents(cicdTemplatePath, projectName);

  if (!fs.existsSync(lintingTemplatePath)) return;
  createDirectoryContents(lintingTemplatePath, projectName);

  if (!fs.existsSync(hostingTemplatePath)) return;
  createDirectoryContents(hostingTemplatePath, projectName);
});

function createDirectoryContents(templatePath, newProjectPath) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const ogFilePath = `${templatePath}/${file}`;

    // get stats about the current file
    const stats = fs.statSync(ogFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(ogFilePath, "utf-8");

      const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;

      fs.writeFileSync(writePath, contents, "utf-8");
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);

      // recursive call
      createDirectoryContents(
        `${templatePath}/${file}`,
        `${newProjectPath}/${file}`
      );
    }
  });
}
