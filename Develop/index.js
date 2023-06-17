// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('/Users/jacobhargraves/bootcamp/week-9-challenge/node-readme-generator/Develop/utils/generateMarkdown.js');

// array of questions for user input
const questions = [        
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
    {
        type: 'input',
        message: 'Enter how you want others to contribute:',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Enter test instructions:',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Add questions/info:',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'Finally, what is your GitHub user Link? (inlcude full link including https://)',
        name: 'github',
    },
];

// gets user input to create README contents
function userInput() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile('newREADME.md', answers);
    })
    .catch((error) => {
    if (error.isTtyError) {
        console.log(error);
    } 
    });
}

// function to write README file
function writeToFile(fileName, data) {
    const markdownContent = generateMarkdown(data)
    fs.writeFile(fileName, markdownContent, (err) => err ? console.error(err) : console.log('File created and README answers added!'));
}

// function to initialize app
function init() {
    userInput();
}

// Function call to initialize app
init();
