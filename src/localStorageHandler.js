import DOMEdit from "./DOMManipulation";
import { listOfProjects, default as Project } from "./projectHandler"
import Task from "./taskLogic"

const loadLS = () => {
    if(localStorage.length === 0) {
        return
    }
    Object.keys(localStorage).forEach(key => {
        listOfProjects.splice(1)
        let jsoned = localStorage.getItem(key)
        let parsedProject = JSON.parse(jsoned)
        let projectTask = parsedProject.task
        DOMEdit.editSideBar.addProject(key)
        const newProject = new Project(key)
        projectTask.forEach(task => {
            const newTask = new Task(task._name, key)
            newTask.status = task._status
            newTask.dueTo = task._dueTo
            newProject.addTaskToProject(newTask)
        })
     });
}

const addProjectToLS = project => {
    const projectName = project.name
    const projectStringified = JSON.stringify(project)
    localStorage.setItem(projectName, projectStringified)
}

const removeProjectFromLS = project => {
    localStorage.removeItem(project)
}

const localStorageHandler = (() => {
    return {
        loadLS,
        addProjectToLS,
        removeProjectFromLS,
    }
})();

export default localStorageHandler