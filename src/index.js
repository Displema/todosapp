import buttonLogic, { addTaskContextLogic } from "./buttonLogic";
import localStorageHandler from "./localStorageHandler";
import { listOfProjects as listOfProjects, default as projectHandler} from "./projectHandler"
import taskHandler from "./taskHandler"

localStorageHandler.loadLS()
taskHandler.checkExpiration()
buttonLogic()