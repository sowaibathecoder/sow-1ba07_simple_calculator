#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.bgMagentaBright("\n\t\t\t\t\t ****A SIMPLE CALCULATOR**** \n\t\t\t\t\t")
);

const result = await inquirer.prompt([
  {
    message: chalk.yellowBright("Enter your first number:"),
    type: "number",
    name: "firstNumber",
  },
  {
    message: chalk.yellowBright("Enter your second number:"),
    type: "number",
    name: "secondNumber",
  },
  {
    message: chalk.yellowBright(
      "Select one of the operators to perform operation:"
    ),
    type: "list",
    name: "operators",
    choices: [
      chalk.magenta("Addition"),
      chalk.green("Subtraction"),
      chalk.yellow("Multiplication"),
      chalk.red("Division"),
    ],
  },
]);

if (result.operators === chalk.magenta("Addition")) {
  console.log(result.firstNumber + result.secondNumber);
} else if (result.operators === chalk.green("Subtraction")) {
  console.log(result.firstNumber - result.secondNumber);
} else if (result.operators === chalk.yellow("Multiplication")) {
  console.log(result.firstNumber * result.secondNumber);
} else if (result.operators === chalk.red("Division")) {
  console.log(result.firstNumber / result.secondNumber);
} else {
  console.log(chalk.red("Please select valid operator"));
}
