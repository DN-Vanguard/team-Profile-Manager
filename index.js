// Packages/Modules required
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Inquirer question arrays
const nextTeamMember = [
    {
        type: "list",
        message: "Would you like to add another team member?",
        name: "teamMember",
        choices: ["Engineer","Intern","Finished"]
    }
];
const managerQuestions = [ //Manager Questions
    {
        type: "input",
        message: "What is the team manager's Name?",
        name: "name",
        validate: (input) => {
            if(input !== "" && !(/\d/.test(input))) return true;
            return "Please enter a name without numeric characters.";
        }
    },
    {
        type: "input",
        message: "What is the team manager's ID?",
        name: "id",
        validate: (input) => {
            if(input !== "") return true;
            return "Please enter an ID.";
        }
    },
    {
        type: "input",
        message: "What is the team manager's Email?",
        name: "email",
        validate: (input) => {
            if(input !== "" && /@/.test(input)) return true;
            return "Please enter a full valid Email.";
        }
    },
    {
        type: "input",
        message: "What is the team manager's Office Number?",
        name: "officeNumber",
        validate: (input) => {
            if(input !== "") return true;
            return "Please enter an Office Number.";
        }
    }
];
const engineerQuestions = [ //Engineers Questions
    {
        type: "input",
        message: "What is this engineer's Name?",
        name: "name",
        validate: (input) => {
            if(input !== "" && !(/\d/.test(input))) return true;
            return "Please enter a name without numeric characters.";
        }
    },
    {
        type: "input",
        message: "What is this engineer's ID?",
        name: "id",
        validate: (input) => {
            if(input !== "") return true;
            return "Please enter an ID.";
        }
    },
    {
        type: "input",
        message: "What is this engineer's Email?",
        name: "email",
        validate: (input) => {
            if(input !== "" && /@/.test(input)) return true;
            return "Please enter a full valid Email.";
        }
    },
    {
        type: "input",
        message: "What is this engineer's GitHub Username?",
        name: "github",
        validate: (input) => {
            if(input !== "") return true;
            return "Please enter a GitHub Username.";
        }
    }
];
const internQuestions = [ //Interns questions
    {
        type: "input",
        message: "What is this intern's Name?",
        name: "name",
        validate: (input) => {
            if(input !== "" && !(/\d/.test(input))) return true;
            return "Please enter a name without numeric characters.";
        }
    },
    {
        type: "input",
        message: "What is this intern's ID?",
        name: "id",
        validate: (input) => {
            if(input !== "") return true;
            return "Please enter an ID.";
        }
    },
    {
        type: "input",
        message: "What is this intern's Email?",
        name: "email",
        validate: (input) => {
            if(input !== "" && /@/.test(input)) return true;
            return "Please enter a full valid Email.";
        }
    },
    {
        type: "input",
        message: "What is this intern's School Name?",
        name: "school",
        validate: (input) => {
            if(input !== "") return true;
            return "Please enter a School Name.";
        }
    }
];
// Stored team members array
let teamMembers = [];