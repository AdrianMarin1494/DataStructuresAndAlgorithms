// https://leetcode.com/problems/goal-parser-interpretation/

function interpret(command: string): string {
    const parsedCommand: string[] = [];

    for (let i = 0; i < command.length; i++) {
        if (command[i] === "G") {
            parsedCommand.push("G");
        } else if (command[i] === "(" && command[i+1] === ")") {
            parsedCommand.push("o");
        } else if (command.slice(i, i+4) === "(al)") {
            parsedCommand.push("al");
        }
    }
    const parsedCommandString: string = [...parsedCommand].join("");
    return parsedCommandString;
};