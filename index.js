const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Employee = require("./lib/Employee")

const generateHTML = require("./src/generateHTML")
const managerCard = require("./src/managerHTML")
const engineerCard = require ("./src/engineerHTML")
const internCard = require ("./src/internHTML")

const employeeArray = []
const managerQuestions = [
    {
        type: "input",
        message: "What is the Manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the Manager's id?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the Manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the Manager's office number?",
        name: "managerOfficeNumber"
    },

];

const internQuestions = [
    {
        type: "input",
        message: "What is the Intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is the Intern's id?",
        name: "internId"
    },
    {
        type: "input",
        message: "What is the Intern's email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is the Intern's school?",
        name: "internSchool"
    }
];

const engineerQuestions = [
    {
        type: "input",
        message: "What is the Engineer's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is the Engineer's id?",
        name: "internId"
    },
    {
        type: "input",
        message: "What is the Engineer's email?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is the Engineer's github?",
        name: "engineerGithub"
    },
];


function init() {

    inquirer
        .prompt(managerQuestions)
        .then(response => {
            const manager = new Manager(response.managerName,
                response.managerId,
                response.managerEmail,
                response.managerOfficeNumber)

            employeeArray.push(manager)
            confirmNext()
        })


}

function confirmNext() {
    inquirer.prompt([{
        type: "confirm",
        message: "Do you want to add more employees?",
        name: "addMore"
    }])
        .then(response => {
            if (response.addMore === true) {
                addEmployee()
            }
            else {
                createHTML()
            }
        })
}

function addEmployee() {
    inquirer.prompt([{
        type: "list",
        message: " Do you add Engineer or Intern",
        choices: ["Engineer", "Intern"],
        name: "selection"
    }])
        .then(response => {
            if (response.selection == "Engineer") {
                addEngineer()
            }
            else {
                addIntern()
            }
        })
}

function addEngineer() {
    inquirer.prompt(engineerQuestions)
        .then(response => {
            const engineer = new Engineer(response.engineerName,
                response.engineerId,
                response.engineerEmail,
                response.engineerGithub)

            employeeArray.push(engineer)


            confirmNext()
        })
}

function addIntern() {
    inquirer.prompt(internQuestions)
        .then(response => {
            const intern = new Intern(response.internName,
                response.internId,
                response.internEmail,
                response.internSchool)

            employeeArray.push(intern)


            confirmNext()
        })
}

function createHTML() {
    console.log(employeeArray)

    let cards = ""

    for (let i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i].getRole() == "Manager") {
            cards = cards + managerCard(employeeArray[i])
        }
        else if (employeeArray[i].getRole() == "Engineer") {
            cards = cards + engineerCard(employeeArray[i])
        } else {
            cards = cards + internCard(employeeArray[i])
        }
    }

    fs.writeFileSync("./dist/team.html", generateHTML(cards))
}

init()