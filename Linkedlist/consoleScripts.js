import Node from './linkedListClass/Node.js'
import LinkedList from "./linkedListClass/LinkedList.js";
import Stack from "./linkedListClass/Stack.js";
import PostFixCalc from "./linkedListClass/postFixCalc.js";
import Listeners from "./consoleApp/Listeners.js";
import OutputConsole from "./consoleApp/OutputConsole.js";
import CommandController from "./consoleApp/CommandController.js";

// Setup controllers
let commandController = new CommandController();

// Set up listeners
let listeners = new Listeners(commandController);
listeners.setupListeners();
