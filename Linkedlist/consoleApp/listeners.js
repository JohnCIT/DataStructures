export default class Listeners {

    commandController;

    constructor(commandController)
    {
        this.commandController = commandController;
    }

    setupListeners() {
        let inputField = document.getElementById("consoleInput");

        inputField.addEventListener("keypress", (e) => {
            if (e.key === 'Enter') {
                this.commandController.mainCommandController(e.currentTarget.value)
            }
        })


    }



}