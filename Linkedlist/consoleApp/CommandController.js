import OutputConsole from "./OutputConsole.js";

export default class CommandController {

    outputConsole;

    constructor() {
        this.outputConsole = new OutputConsole();
    }

    mainCommandController(command) {
        console.log("!!!! main Command");
        this.outputConsole.addToOutput(command);
    }

}