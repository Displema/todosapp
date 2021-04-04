import DOMEdit from "./DOMManipulation"
import {listOfProjects} from "./projectHandler"
let taskArray = []

// if I'm on inbox then I show every task from every project
const showInbox = () => {
    if(listOfProjects.length === 0) {
        return
    }
    listOfProjects.forEach(project => {
        if (project.task.length === 0) {
            return
        }
        project.task.forEach(task => {
            taskArray.push(task)
        })
    })
    if(taskArray.length === 0) {
        return
    }
    DOMEdit.editContainer.showAllTodos(taskArray)
    taskArray = []
}

const today = () => {
    ///filters projects for any task that is due to today
}
const thisWeek = () => {
    //filters projects for any task that is due to less than one week
}

const taskHandler = (() => {
    return {
        showInbox,
        today,
        thisWeek,
    }
})();

export default taskHandler

