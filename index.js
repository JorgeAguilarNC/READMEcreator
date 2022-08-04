// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a brief description of your project: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Describe the installation process if any: ",
  },
  {
    type: "input",
    name: "usage",
    message: "What is this project usage for?",
  },

  {
    type: "input",
    name: "contributing",
    message: "Who are the contributors of this projects?",
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("success");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    console.log(data);
    const markdown = generateMarkdown(data);
    writeToFile("README.md", markdown);
  });
}

// Function call to initialize app
init();
