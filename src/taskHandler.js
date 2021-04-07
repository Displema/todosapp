import DOMEdit from "./DOMManipulation"
import {listOfProjects} from "./projectHandler"
import isAfter from 'date-fns/isAfter'
import {stringToDate} from "./dateHandler"
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

const showToday = () => {
    if(listOfProjects.length === 0) {
        return
    }
    let today = new Date()
    today.setDate(today.getDate() - 1)
    listOfProjects.forEach(project => {
        if (project.task.length === 0) {
            return
        }
        project.task.forEach(task => {
            let notObjectDate = task.dueTo
            if(notObjectDate === "No date") {
                return
            }
            let objectDate = stringToDate(notObjectDate)
            if(isAfter(objectDate, today)) {
                taskArray.push(task)
            }
        })
    })
    DOMEdit.editContainer.showAllTodos(taskArray)
    taskArray = []
}
const showThisWeek = () => {
    if(listOfProjects.length === 0) {
        return
    }
    let today = new Date()
    today.setDate(today.getDate() - 7)
    listOfProjects.forEach(project => {
        if (project.task.length === 0) {
            return
        }
        project.task.forEach(task => {
            let notObjectDate = task.dueTo
            if(notObjectDate === "No date") {
                return
            }
            let objectDate = stringToDate(notObjectDate)
            if(isAfter(objectDate, today)) {
                taskArray.push(task)
            }
        })
    })
    DOMEdit.editContainer.showAllTodos(taskArray)
    taskArray = []
}

const taskHandler = (() => {
    return {
        showInbox,
        showToday,
        showThisWeek,
    }
})();

export default taskHandler

