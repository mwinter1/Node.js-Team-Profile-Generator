// employee classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// prompt for information
const inquirer = require('inquirer');

// file path stuff
const path = require('path');
const fs = require('fs');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

// html template
const generateHTML = require('./src/html-template');

// each employee object will push into this array
const teamMembers = [];

// create manager with prompts
function createManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the team managers id?'
        },
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the team managers name?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the team managers email?'
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the team managers office number?'
        }
    ]).then(answers => {
        // create manager object
        const manager = new Manager(answers.managerId, answers.managerName, answers.managerEmail, answers.managerOfficeNumber);
        // push manager on to team
        teamMembers.push(manager);
        // ask user to create another employee
        createTeam();
    });
}

// create manager with prompts
function createEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the engineer id?',
        },
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineer name?',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineers email?',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the engineers github?'
        }
    ]).then(answers => {
        // create engineer object
        const engineer = new Engineer(answers.engineerId, answers.engineerName, answers.engineerEmail, answers.engineerGithub);
        // push engineer on to team
        teamMembers.push(engineer);
        // ask user to create another employee
        createTeam();
    });
}

// create intern with prompts
function createIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internId',
            message: 'What is the intern id?',
        },
        {
            type: 'input',
            name: 'internName',
            message: 'What is the intern name?',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the interns email?',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the interns school?'
        }
    ]).then(answers => {
        // create intern object
        const intern = new Intern(answers.internId, answers.internName, answers.internEmail, answers.internSchool);
        // push intern on to team
        teamMembers.push(intern);
        // ask user to create another employee
        createTeam();
    });
}

// create team with prompts
function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberChoice',
            message: 'What team member would you like to create?',
            choices: [
                "Engineer",
                "Intern",
                "Im done with the team",
            ],
        },
    ]).then(userChoice => {
        if (userChoice.memberChoice === 'Engineer') {
            createEngineer();
        } else if (userChoice.memberChoice === 'Intern') {
            createIntern();
        } else {
            buildTeam();
        }
    });
}

// take array of team and send it to the create file
function buildTeam() {
    // create html file
    // console.log(teamMembers);
    const htmlPageContent = generateHTML(teamMembers);
    createFile(htmlPageContent);
}

// create the file and save it to the output folder
function createFile(htmlCode) {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, htmlCode, 'utf-8');
}

// start the program
createManager();