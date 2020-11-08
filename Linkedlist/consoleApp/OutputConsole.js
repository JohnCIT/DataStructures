export default class OutputConsole {
    outputConsole;


    constructor()
    {
        this.outputConsole = document.getElementById("consoleOutputLog");
    }

    addToOutput(valueToAdd)
    {
         let currentText = this.outputConsole.innerHTML;
         this.outputConsole.innerHTML = currentText + " " + valueToAdd;
    }

    clearOutput()
    {
        this.outputConsole.innerHTML = "";
    }


}