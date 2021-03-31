import DOMPurify from 'dompurify';
import {addProjectRemoveLogic, addTaskContextLogic} from "./buttonLogic"
import {listOfProjects, default as Project, checkIPAE, deleteProject, init} from "./projectHandler"
const toDoSidebar = document.querySelector('.ToDoDate')
const toDoContainer = document.querySelector('.ToDoContainer')
const projects = document.querySelector('.projects')
const projectsTitle = document.querySelector(".projects h2")
const addProjectButton = document.querySelector(".addProject")

const editSideBar = (() => {
    const removeProjectText = (input) => {
        input.remove()
    };

    const addProjectText = () => {
        let input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.classList.add('projectButton')
        input.setAttribute('placeholder', 'Project name')
        input.setAttribute('data-button', 'project')
        projects.insertBefore(input, addProjectButton)
        input.focus()
        input.addEventListener('blur', (event)=> {
            let newProjectName = event.target.value ? event.target.value : "Default"

            if(checkIPAE(newProjectName)) {
                removeProjectText(input);
                return
            }

            addProject(newProjectName)
            removeProjectText(input)

            let newProjectObj = new Project(newProjectName)
            toggleSelected()
        })
        toggleSelected(addProjectButton)
    }
    const addProject = (project) => {
        let newProject = document.createElement('button')
        let cleanProject = DOMPurify.sanitize(project)
        newProject.innerHTML = `<i class="material-icons">folder</i>${cleanProject}<i class="material-icons">delete</i>`
        newProject.classList.add("singleProject")
        projects.appendChild(newProject)
        addProjectRemoveLogic();
    };

    const removeProject = (target) => {
        target.remove()
    };

    const toggleSelected = (target) => {
        let selected = document.querySelector('.selected')
        if (selected) {
            selected.classList.remove('selected')
        }
        if (target) {
            target.classList.add('selected')
        }
    }
    return {
        addProjectText,
        removeProjectText,
        addProject,
        removeProject,
        toggleSelected,
    };
})();

const editContainer = (() => {
    const container = document.querySelector(".ToDoContainer")
    const showTodos = (todo) => {
        // prende l'oggetto todo come lista intera di tutti i todo da mostrare, itera per ogni elemento e li mostra
        container.innerHTML = ""
        const circleIcon = '<i class="material-icons">panorama_fish_eye</i>'
        const deleteIcon = '<i class="material-icons">clear</i>'
        for(element in todo) {
            let name = element["name"]
            let dueTo = element["dueTo"]
            let newElement = document.createElement('button')
            newElement.setAttribute('data-value', `${name}`)
            newElement.classList.add('button-task')
            newElement.innerHTML = `${circleIcon}<p>${name}</p> <div data-value="${name}"}>${dueTo}</div> ${deleteIcon}}`
            toDoContainer.appendChild(newElement)
        };
    };

    const addTitle = (title) => {
        container.innerHTML = `<h1 class="containerTitle">${title}<h1>`
    }

    const removeTodo = (target) => {
        toDoContainer.remove(target)
    };

    const showTodoAdder = () => {
        let button = document.querySelector('.addTask')
        let addTaskUI = document.querySelector(".inputTask") ? document.querySelector(".inputTask") : undefined
        if (button || addTaskUI) {
            return
        }
        const addButton = document.createElement('button')
        const plusIcon = '<i class="material-icons">add</i>'
        const title = document.querySelector(".ToDoContainer h1")
        addButton.innerHTML = `${plusIcon}<p>Task<p>`
        addButton.classList.add('addTask')
        title.after(addButton)
    }

    const disableTaskAdder = () => {
        let button = document.querySelector('.addTask')
        button.setAttribute('disabled', '')
        button.style.animation = "taskFadeOut 0.2s linear forwards"
    }

    const enableTaskAdder = () => {
        let button = document.querySelector('.addTask')
        let div = document.querySelector("body > div.ToDoContainer > div")
        button.removeAttribute('disabled')
        button.style.animation = "taskFadeIn 0.2s linear forwards"
        div.remove()
    }

    const editName = (target, newName) => {
        return
    };
    const editDate = (target, newDate) => {
        return
    };

    const addTaskContext = () => {
        let container = document.querySelector(".ToDoContainer")
        container.innerHTML += `<div class="inputTask">
        <input type="text" name="taskName" id="" placeholder="Task name">
        <button id="confirmAddTask"><i class="material-icons">add</i>Add</button> <button id="cancelAddTask">Cancel</button>
        </div>`
    }

    return {
        showTodos,
        removeTodo,
        editName,
        editDate,
        showTodoAdder,
        addTaskContext,
        disableTaskAdder,
        enableTaskAdder,
        addTitle,
    }
})();

const DOMEdit = (() => {
    return {
        editSideBar,
        editContainer,
    };
})();


export default DOMEdit
