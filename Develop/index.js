// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName = 'newREADME.md'
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter the project title:',
                name: 'title',
              },
              {
                type: 'input',
                message: 'Enter a description of the README:',
                name: 'description',
              },
              {
                type: 'input',
                message: 'Enter installation instructions:',
                name: 'installation',
              },
              {
                type: 'input',
                message: 'Enter usage instructions:',
                name: 'usage',
              },
              {
                type: 'checkbox',
                message: 'What license would you like to select?',
                name: 'license',
                choices: ['MIT', 'Creative Commons Attribution 4.0', 'Educational Community License v2.0', 'Open Software License 3.0' ]
              },
        ])
        .then((answers) => {
          console.log(answers);
        })
        .catch((error) => {
          if (error.isTtyError) {
            console.log(error);
          } 
        });
    // fs.appendFile(fileName, 'data', (err) => err ? console.error(err) : console.log('Commit logged!'));
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
