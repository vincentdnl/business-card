#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

const chalk = require("chalk")
const bgColor = chalk.bgCyan

const lines = [
    `    ${bgColor(" ")}${bgColor.bold(" Vincent Déniel (@vincentdnl) ")}`,
    `    ${bgColor(" ")} ${chalk.magentaBright.underline("Web Developer")}`,
    `    ${bgColor(" ")} • ${chalk.bold("Twitter")}:  https://twitter.com/vincentdnl`,
    `    ${bgColor(" ")} • ${chalk.bold("Github")}:   https://github.com/vincentdnl`,
    `    ${bgColor(" ")} • ${chalk.bold("Linkedin")}: https://linkedin.com/in/vincentdnl`,
]

console.log("\n")
lines.map(line => {
    console.log(line)
})
console.log("\n")
