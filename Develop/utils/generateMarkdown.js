// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Creative Commons Attribution 4.0') {
    return '[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)'
  } else if (license === 'Eclipse Public License 1.0') {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  } else if (license === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License Link](https://opensource.org/licenses/MIT)'
  } else if (license === 'Creative Commons Attribution 4.0') {
    return '[CC BY 4.0 Link](https://creativecommons.org/licenses/by/4.0/)'
  } else if (license === 'Eclipse Public License 1.0') {
    return '[Eclipse Public License 1.0 Link](https://opensource.org/licenses/EPL-1.0)'
  } else if (license === 'Mozilla Public License 2.0') {
    return '[MPL 2.0 License Link](https://opensource.org/licenses/MPL-2.0)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
  } else if (license === 'Creative Commons Attribution 4.0') {
    return '[CC BY 4.0 Link](https://creativecommons.org/licenses/by/4.0/)'
  } else if (license === 'Eclipse Public License 1.0') {
    return '[Eclipse Public License 1.0 Link](https://opensource.org/licenses/EPL-1.0)'
  } else if (license === 'Mozilla Public License 2.0') {
    return '[MPL 2.0 License Link](https://opensource.org/licenses/MPL-2.0)'
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n` +
    `${renderLicenseBadge(data.license.join(', '))}\n` +
    `${renderLicenseLink(data.license.join(', '))}\n\n` +
    `## Table of Contents\n` +
    `[Description](#Description)\n\n` +
    `[Installation](#Installation)\n\n` +
    `[Usage](#Usage)\n\n` +
    `[License](#License)\n\n` +
    `## Description\n` +
    `${data.description}\n\n` +
    `## Installation\n` +
    `${data.installation}\n\n` +
    `## Usage\n` +
    `${data.usage}\n\n` +
    `## License\n` +
    `${data.license.join(', ')}\n\n` + 
    `## How to Contribute\n` +
    `${data.contribute}\n\n` +
    `## Tests\n` +
    `${data.tests}\n\n` +
    `## Questions\n` +
    `${data.questions}\n` +
    `Contact me at: ${data.email}\n` +
    `[GitHub Link](${data.github})`;
}

module.exports = generateMarkdown;
