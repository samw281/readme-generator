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
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license[0])}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  ${renderLicenseLink(data.license)}
  * [Testing](#testing)
  * [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage 
  ${data.usage}

  ## Contributions
  ${data.contributing}

  ${renderLicenseSection(data.license)} 
  

  ## Testing
  ${data.tests}

  ## Questions
  If you have any further questions please feel free to reach out to me via [email](mailto:${data.email})  <br>  
  To view more of my work please visit my [GitHub](https://github.com/${data.github}) page.
`;
}

module.exports = generateMarkdown;
