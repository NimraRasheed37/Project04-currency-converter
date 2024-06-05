#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright("<<<<<<WELCOME TO NIMRA'S CURRENCY CONVERTER>>>>>\n"));
async function convertCurrency() {
    const answers = await inquirer.prompt([{
            message: "Which currency do you want to convert from?",
            name: "startCurrency",
            type: "list",
            choices: ["USD", "PKR", "EUR"]
        },
        {
            message: "Which currency do you want to convert to?",
            name: "endCurrency",
            type: "list",
            choices: ["USD", "PKR", "EUR"]
        },
        {
            message: "Enter an amount you want to convert?",
            name: "convert",
            type: "number"
        },
    ]);
    if (answers.startCurrency === "PKR" && answers.endCurrency === "USD") {
        console.log(`${answers.convert} ${answers.startCurrency} = ${answers.convert * 0.0036} USD`);
    }
    else if (answers.startCurrency === "USD" && answers.endCurrency === "PKR") {
        console.log(`${answers.convert} ${answers.startCurrency} = ${answers.convert * 277.74} PKR`);
    }
    else if (answers.startCurrency === "PKR" && answers.endCurrency === "EUR") {
        console.log(`${answers.convert} ${answers.startCurrency} = ${answers.convert * 0.0033} EUR`);
    }
    else if (answers.startCurrency === "EUR" && answers.endCurrency === "PKR") {
        console.log(`${answers.convert} ${answers.startCurrency} = ${answers.convert * 302.19} PKR`);
    }
    else if (answers.startCurrency === "USD" && answers.endCurrency === "EUR") {
        console.log(`${answers.convert} ${answers.startCurrency} = ${answers.convert * 0.92} EUR`);
    }
    else if (answers.startCurrency === "EUR" && answers.endCurrency === "USD") {
        console.log(`${answers.convert} ${answers.startCurrency} = ${answers.convert * 1.09} USD`);
    }
    else {
        console.log("Kindly select valid currency");
    }
    let option = await inquirer.prompt([
        {
            name: "continue",
            type: "confirm",
            message: "Do you want to continue?",
        }
    ]);
    if (option.continue) {
        convertCurrency();
    }
    else {
        console.log(chalk.greenBright("Goodbye"));
    }
    ;
}
convertCurrency();
// else if (answers.convert === null || answers.convert === undefined) {
//     console.log ("Invalid Number")
// }
