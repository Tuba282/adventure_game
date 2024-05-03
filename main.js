#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import chalkAnimation from "chalk-animation";
// -----------------------Welcomming message---------------------------------//
async function start() {
    await new Promise((resolve) => {
        figlet.text(`Welcome to Adventure Game`, { font: "Slant" }, function (err, data) {
            if (err) {
                console.dir(`Oops you did some mistake dear`);
                console.log(err);
            }
            let animate = chalkAnimation.rainbow(data);
            setTimeout(() => {
                resolve(animate.stop());
            }, 1000);
        });
    });
    console.log(`
    ${chalk.greenBright("Game Principles")} 

    got hit = 25 - points.
    If you first chose punch = 5 + points.
    If you first chose Kick = 3 + points.
    portion = 25 - 
    life = 100%


    ${chalk.hex("#62C6E6")("Best of Luck")}

  `);
}
await start();
// -----------------------Starting---------------------------------//
class hero {
    name;
    life;
    constructor(name, life) {
        this.name = name;
        this.life = life;
    }
    get hero() {
        return this.name;
    }
    get portion() {
        return (this.life += 25);
    }
    get got_hit() {
        return (this.life -= 25);
    }
    get punch() {
        return (this.life += 5);
    }
}
// -----------------------hero_villain_intro---------------------------------//
let hero_name = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "What is the name of our hero ...?\n",
    },
]);
let villain_selection = await inquirer.prompt([
    {
        name: "name",
        type: "list",
        message: "Whom would you like to fight...?\n",
        choices: [`Beast`, `Dracula`, `Villain`],
    },
]);
// -----------------------making_Entry---------------------------------//
async function ready() {
    await new Promise((resolve) => {
        figlet(`${hero_name.name} Vs ${villain_selection.name}`, { font: "Varsity", width: 150 }, function (err, data) {
            if (err) {
                console.dir(`Oops you did some mistake dear`);
                console.log(err);
            }
            let animate = chalkAnimation.karaoke(data);
            setTimeout(() => {
                resolve(animate.stop());
            }, 9000);
        });
    });
}
await ready();
// -----------------------fight_loop---------------------------------//
let loop = true;
let life = 100;
let opponent = Math.floor(Math.random() * 10) + 1;
async function game() {
    while (loop) {
        let Action = await inquirer.prompt([
            {
                name: "act",
                type: "list",
                message: "What would you like to do 🤶🏻?",
                choices: ["Punch 🤷🏻‍♂️", "Kick 🚶🏻‍♂️", "Portion ⚱️", "Run 🏃🏻‍♂️"],
                default: "Please Select !!! ",
            },
        ]);
        if (Action.act === `Punch 🤷🏻‍♂️`) {
            life += 5;
            console.log(`\nYou Punch first ${chalk.green(" Good Job ")}
      Your Life is ${chalk.blueBright(life)} %`);
            if (opponent === 3 || opponent === 4) {
                console.log(`\n🎊🎉 Congrats you hit your rival 🎊🎉`);
            }
            else {
                console.log(`\nOops your rival hit you 🙍🏻‍♂️`);
                life -= 25;
                console.log(`
        Your Life is ${chalk.red(life)} %`);
            }
        }
        if (Action.act === `Kick 🚶🏻‍♂️`) {
            life += 3;
            console.log(`\nYou Kick first ${chalk.green(" Good Job ")}
      Your Life is ${chalk.blueBright(life)} %`);
            if (opponent === 2 || opponent === 7) {
                console.log(`\n🎊🎉 Congrats you hit your rival 🎊🎉`);
            }
            else {
                console.log(`\nOops your rival hit you 🙍🏻‍♂️`);
                life -= 25;
                console.log(`
        Your Life is ${chalk.red(life)} %`);
            }
        }
        if (Action.act === `Portion ⚱️`) {
            life += 25;
            console.log(`\n\n 🌟
      Took Portion \nNow  Your Life is ${chalk.bgBlueBright(life)} %`);
        }
        if (Action.act === `Run 🏃🏻‍♂️`) {
            loop = false;
            console.log(`\n\n🌞 Thank for participate 🌞`);
        }
        if (life <= 0) {
            loop = false;
            console.log(`🐒🐒 You loose the game`);
        }
    }
}
game();
