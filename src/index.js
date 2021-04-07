import buttonLogic, { addTaskContextLogic } from "./buttonLogic";
import localStorageHandler from "./localStorageHandler";
import taskHandler from "./taskHandler"

const app = (() => {
    localStorageHandler.loadLS()
    taskHandler.checkExpiration()
    buttonLogic()
})()
