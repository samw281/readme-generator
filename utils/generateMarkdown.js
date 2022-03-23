// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // console.log(license == "None")
  if (license == "None") {
    return "";
  }
  return `![Badge](https://img.shields.io/badge/licence-${license}-green)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return "";
  }
  return `* [License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return "";
  }
  return `
  ## License 
  This project is licensed under ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# <center>${data.title}<center>
  ===============================================

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage 
  ${data.usage}

  ## Contributions
  ${data.contributing}

  ${renderLicenseSection(data.license)} 
  ${renderLicenseBadge(data.license[0])}

  ## Testing
  ${data.tests}
`;
}

module.exports = generateMarkdown;
