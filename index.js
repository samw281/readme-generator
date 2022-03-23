const fs = require("fs");
const { prompt } = require("inquirer");
const genMD = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?(Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your projects name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project(Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter project description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "install",
    message: "Please provide installation instructions for your project(Required)",
    validate: (installInput) => {
      if (installInput) {
        return true;
      } else {
        console.log("Please enter project installation instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage instructions for your project(Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter project usage instructions!");
        return false;
      }
    },
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select the license(s) used. If none please select 'None'(Required)",
    choices: ["MIT", "Mozilla", "Apache", "GNU", "BSD", "None"],
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please enter the projects license or select 'None'!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "Who has contributed to this project?(Required)",
    validate: (contributingInput) => {
      if (contributingInput) {
        return true;
      } else {
        console.log("Please enter project contributer(s)!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide instructions on how to test your project(Required)",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Please enter project testing instructions!");
        return false;
      }
    },
  },
];

prompt(questions).then((ans) => console.log(genMD(ans)));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
