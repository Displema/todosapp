import DOMEdit from "./DOMManipulation"
import { deleteProject, listOfProjects, getProjectObject, default as Project } from "./projectHandler"
import taskHandler from "./taskHandler"
import Task from "./taskLogic"

const inboxButton = document.querySelector(".inbox")
const todayButton = document.querySelector(".today")
const thisWeekButton = document.querySelector(".thisWeek")
const addProject = document.querySelector(".addProject")

const addProjectRemoveLogic = () => {
    const projects = document.querySelectorAll(".singleProject")
    projects.forEach(project => {
        project.addEventListener('mouseover', (event) => {
            let icon = (event.target.children[2]) ? event.target.children[2] : event.target;
            icon.style.opacity = 1;
        })
        project.addEventListener('mouseout', (event) => {
            if(!event.target || event.target.nodeName === "I") {
                return
            }
            let icon = (event.target.children[2]) ? event.target.children[2] : event.target;
            icon.style.opacity = 0;
        })
        project.addEventListener('click', (event) => {
            if (event.target.nodeName === "I") {
                let project = event.target.parentElement
                let title = DOMEdit.editContainer.getTitle()
                if(project.children[1].textContent === title) {
                    inboxButton.click()
                }
                deleteProject(project)
                DOMEdit.editSideBar.removeProject(project)

            }
        }) 
    })
}

const buttonLogic = () => {
    inboxButton.addEventListener('click',  (e) => {
    //cerca tutti gli impegni del giorno
    //li mette all'interno di un array di oggetti
    //mostra gli oggetti
        if(e.target.classList.contains("selected")) {
            return
        }

        DOMEdit.editSideBar.toggleSelected(e.target)
        DOMEdit.editContainer.addTitle("Inbox")
        taskHandler.showInbox()
        DOMEdit.editContainer.showTodoAdder()
    });
    
    inboxButton.click()

    todayButton.addEventListener('click', (e) => {
        if(e.target.classList.contains("selected")) {
            return
        }
        DOMEdit.editSideBar.toggleSelected(e.target)
        DOMEdit.editContainer.addTitle("Today")
    })

    thisWeekButton.addEventListener('click', (e) => {
        if(e.target.classList.contains("selected")) {
            return
        }
        DOMEdit.editSideBar.toggleSelected(e.target)
        DOMEdit.editContainer.addTitle("This week")
    })

    addProject.addEventListener('click', (e) => {
        if(e.target.classList.contains("selected")) {
            return
        }
        DOMEdit.editSideBar.toggleSelected(e.target)
        DOMEdit.editSideBar.addProjectText()
    });
};

const addTaskContextLogic = () => {
    const addTask = document.querySelector(".addTask")
    addTask.addEventListener('click', () => {
        DOMEdit.editContainer.addTaskContext();
        DOMEdit.editContainer.disableTaskAdder();
        taskAdderLogic();
    })
}

const taskAdderLogic = () => {
    const addButton = document.querySelector('#confirmAddTask')
    const deleteButton = document.querySelector('#cancelAddTask')
    const input = document.querySelector("body > div.ToDoContainer > div > input[type=text]")

    addButton.addEventListener('click', () => {

        //get task name
        let taskName = (input.value && input.value !== "") ? input.value : undefined
        if(!taskName) {
            DOMEdit.editContainer.enableTaskAdder()
            addTaskContextLogic()
            return
        }

        let targetProjectName
        let title = DOMEdit.editContainer.getTitle()
        if(title === "Inbox") {
            targetProjectName = "Default"
        } else {
            targetProjectName = title
        }
        let projectObject = getProjectObject(targetProjectName)

        /// create task class and later adds it to the project selected 
        let taskObject = new Task(taskName, targetProjectName)
        DOMEdit.editContainer.addSingleTodo(taskObject)
        projectObject.addTaskToProject(taskObject)
        DOMEdit.editContainer.enableTaskAdder()
        addTaskContextLogic()
    })

    deleteButton.addEventListener('click', () => {
        DOMEdit.editContainer.enableTaskAdder()
        addTaskContextLogic()
    })
}

const taskButtonLogic = (e) => {
        if(e.target.nodeName === "I") {
            switch(e.target.innerHTML) {
                case "panorama_fish_eye": {
                    DOMEdit.editContainer.editTaskStatus(e.target, "completed")
                    break
                }
                case "clear": {
                    //delete task from project
                    const projectName = e.target.parentElement.dataset.project
                    const taskName = e.target.parentElement.dataset.value
                    const projectObject = getProjectObject(projectName)
                    projectObject.removeTaskFromProject(taskName)
                    DOMEdit.editContainer.showAllTodos(projectObject.task)
                    DOMEdit.editContainer.showTodoAdder()
                    break
                }
                case "done": {
                    DOMEdit.editContainer.editTaskStatus(e.target, "uncompleted")
                    break
                }
            }
        }
    }

export {addTaskContextLogic as addTaskContextLogic, 
        addProjectRemoveLogic as addProjectRemoveLogic,
        taskButtonLogic as taskButtonLogic,
        buttonLogic as default}