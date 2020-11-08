export default class Listeners {

    setupListeners() {
        let inputField = document.getElementById("consoleInput");

        inputField.addEventListener("keypress", (e) => {
            if (e.key === 'Enter') {
                console.log("!!!!!!");
            }
        })


    }



}