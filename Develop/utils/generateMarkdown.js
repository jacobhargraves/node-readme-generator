// function that returns a license badge based on which license is passed in
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

// function that returns the license link
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

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\n" +
    "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n" +
    "THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.";
  } else if (license === 'Creative Commons Attribution 4.0') {
    return "Data in RGD are provided under the terms of the Creative Commons Attribution 4.0 International (CC BY 4.0) license. A human-readable summary of the license listing the key features and terms of the actual license is as follows:\n\n" +
    "You are free to...\n" +
    "Share: copy and redistribute the material in any medium or format\n" +
    "Adapt: remix, transform, and build upon the material for any purpose, even commercially.\n" +
    "The licensor cannot revoke these freedoms as long as you follow the license terms.\n\n" +
    "Under the following terms...\n" +
    "Attribution: You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.\n" +
    "No additional restrictions: You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.\n\n" +
    "Notices:\n" +
    "You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.\n" +
    "No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material.";
  } else if (license === 'Eclipse Public License 1.0') {
    return 'The accompanying program is provided under the terms of this Eclipse Public License (EPL). Any use, reproduction, or distribution of the program constitutes recipient\'s acceptance of this agreement.';
  } else if (license === 'Mozilla Public License 2.0') {
    return '[MPL 2.0 License Link](https://opensource.org/licenses/MPL-2.0)'
  } else {
    return '1. Definitions\n\n' +
    '1.1. "Contributor" means each individual or legal entity that creates, contributes to the creation of, or owns Covered Software.\n' +
    '1.2. "Contributor Version" means the combination of the Contributions of others (if any) used by a Contributor and that particular Contributor\'s Contribution.\n' +
    '1.3. "Contribution" means Covered Software of a particular Contributor.\n' +
    '1.4. "Covered Software" means Source Code Form to which the initial Contributor has attached the notice in Exhibit A, the Executable Form of such Source Code Form, and Modifications of such Source Code Form, in each case including portions thereof.\n' +
    '1.5. "Incompatible With Secondary Licenses" means that the initial Contributor has attached the notice described in Exhibit B to the Covered Software; or that the Covered Software was made available under the terms of version 1.1 or earlier of the License, but not also under the terms of a Secondary License.\n' +
    '1.6. "Executable Form" means any form of the work other than Source Code Form.\n' +
    '1.7. "Larger Work" means a work that combines Covered Software with other material, in a separate file or files, that is not Covered Software.\n' +
    '1.8. "License" means this document.\n' +
    '1.9. "Licensable" means having the right to grant, to the maximum extent possible, whether at the time of the initial grant or subsequently, any and all of the rights conveyed by this License.\n' +
    '1.10. "Modifications" means any of the following:\n' +
    '  - any file in Source Code Form that results from an addition to, deletion from, or modification of the contents of Covered Software; or\n' +
    '  - any new file in Source Code Form that contains any Covered Software.\n' +
    '1.11. "Patent Claims" of a Contributor means any patent claim(s), including without limitation, method, process, and apparatus claims, in any patent Licensable by such Contributor that would be infringed, but for the grant of the License, by the making, using, selling, offering for sale, having made, import, or transfer of either its Contributions or its Contributor Version.\n' +
    '1.12. "Secondary License" means either the GNU General Public License, Version 2.0, the GNU Lesser General Public License, Version 2.1, the GNU Affero General Public License, Version 3.0, or any later versions of those licenses.\n' +
    '1.13. "Source Code Form" means the form of the work preferred for making modifications.\n' +
    '1.14. "You" (or "Your") means an individual or a legal entity exercising rights under this License. For legal entities, "You" includes any entity that controls, is controlled by, or is under common control with You. For purposes of this definition, "control" means (a) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (b) ownership of more than fifty percent (50%) of the outstanding shares or beneficial ownership of such entity.\n' +
    '\n2. License Grants and Conditions\n\n' +
    '2.1. Grants\n\n'
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n` +
    `${renderLicenseBadge(data.license.join(', '))}\n\n` +
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
    `${data.license.join(', ')}\n` + 
    `${renderLicenseSection(data.license.join(', '))}\n\n` +
    `## How to Contribute\n` +
    `${data.contribute}\n\n` +
    `## Tests\n` +
    `${data.tests}\n\n` +
    `## Questions\n` +
    `${data.questions}\n` +
    `Contact me at: ${data.email}\n\n` +
    `[GitHub Link](${data.github})\n`;
}

module.exports = generateMarkdown;
