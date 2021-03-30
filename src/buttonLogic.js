import DOMEdit from "./DOMManipulation"
import { deleteProject as deleteProject } from "./projectHandler"

const inboxButton = document.querySelector(".inbox")
const todayButton = document.querySelector(".today")
const thisWeekButton = document.querySelector(".thisWeek")
const addProject = document.querySelector(".addProject")
const toDoContainerTitle = document.querySelector('h1 .containerTitle')

const addProjectRemoveLogic = () => {
    const projects = document.querySelectorAll(".singleProject")
    const deleteIcon = document.querySelectorAll(".singleProject i:last-of-type")

    deleteIcon.forEach(icon => {
        icon.addEventListener('click', (event) => {
            let project = event.target.parentElement
            deleteProject(project)
            DOMEdit.editSideBar.removeProject(project)
        })
    })

    projects.forEach(project => {
        project.addEventListener('mouseover', (event) => {
            let icon = (event.target.children[1]) ? event.target.children[1] : event.target;
            icon.style.opacity = 1;
        })
        project.addEventListener('mouseout', (event) => {
            let icon = document.querySelector('.singleProject i:last-of-type')
            if(!event.target || event.target === icon) {
                return
            }
            icon.style.opacity = 0;
        }) 
    })
}

const buttonLogic = () => {
    inboxButton.addEventListener('click',  (e) => {
    //cerca tutti gli impegni del giorno
    //li mette all'interno di un array di oggetti
    //mostra gli oggetti
        DOMEdit.editSideBar.toggleSelected(e.target)
        DOMEdit.editContainer.addTitle("Inbox")
        DOMEdit.editContainer.showTodoAdder()
    });
    
    inboxButton.click()

    todayButton.addEventListener('click', (e) => {
        DOMEdit.editSideBar.toggleSelected(e.target)
        DOMEdit.editContainer.addTitle("Today")
    })

    thisWeekButton.addEventListener('click', (e) => {
        DOMEdit.editSideBar.toggleSelected(e.target)
        DOMEdit.editContainer.addTitle("This week")
    })

    addProject.addEventListener('click', (e) => {
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
        let taskName = (input.value && input.value !== "") ? input.value : undefined
        if(taskName === undefined) {
            DOMEdit.editContainer.enableTaskAdder()
            addTaskContextLogic()
            return
        }
        /// create task class and later adds it to the project selected
        DOMEdit.editContainer.enableTaskAdder()
        addTaskContextLogic()
    })

    deleteButton.addEventListener('click', () => {
        DOMEdit.editContainer.enableTaskAdder()
        addTaskContextLogic()
    })
}

export {addTaskContextLogic as addTaskContextLogic, 
        addProjectRemoveLogic as addProjectRemoveLogic, 
        buttonLogic as default}