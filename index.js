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
            return "Please enter a valid Email.";
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
            return "Please enter a valid name.";
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
            return "Please enter a valid Email.";
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
            return "Please enter a valid name.";
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
            return "Please enter a valid Email.";
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

// Ask the user what team member they would like to add OR finish process
const askforNextTeamMember = () => {
    return inquirer
        .prompt(nextTeamMember)
        .then((nextTeamMemberAnswer) => {

            switch(nextTeamMemberAnswer.teamMember) {

                case "Engineer":
                    return askforEngineerInfo();

                case "Intern":
                    return askforInternInfo();

                default:
                    return;
            }
        });
}
// Command to ask engineer questions
const askforEngineerInfo = () => {
    return inquirer
        .prompt(engineerQuestions)
        .then((engineerAnswers) => {

            // Add an engineer object to the team members array
            teamMembers.push(new Engineer(engineerAnswers));

            return askforNextTeamMember();
        });
}
// Command to ask intern questions
const askforInternInfo = () => {
    return inquirer
        .prompt(internQuestions)
        .then((internAnswers) => {

            // Add an intern object to the team members array
            teamMembers.push(new Intern(internAnswers));

            return askforNextTeamMember();
        });
}
