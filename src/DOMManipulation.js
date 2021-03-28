import DOMPurify from 'dompurify';
import {addProjectRemoveLogic} from "./buttonLogic"
import {listOfProjects, default as projectHandler} from "./projectHandler"

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
            let newProject = event.target.value ? event.target.value : "Default"
            if(listOfProjects.indexOf(newProject) !== -1) {
                removeProjectText(input);
                return
            }
            addProject(newProject)           
            removeProjectText(input);
            projectHandler.addProjectInList(newProject)
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
    const showTodos = (todo) => {
        // prende l'oggetto todo come lista intera di tutti i todo da mostrare, itera per ogni elemento e li mostra
        const container = document.querySelector(".ToDoContainer")
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
    const removeTodo = (target) => {
        toDoContainer.remove(target)
    };
    const showTodoAdder = () => {
        let button = document.querySelector('.addTask')
        if (button) {
            return
        }
        const addButton = document.createElement('button')
        const plusIcon = '<i class="material-icons">add</i>'
        const title = document.querySelector(".ToDoContainer h1")
        addButton.innerHTML = `${plusIcon}<p>Task<p>`
        addButton.classList.add('addTask')
        title.after(addButton)

    }
    const editName = (target, newName) => {

    };
    const editDate = (target, newDate) => {

    };

    const addTaskContext = () => {
        let container = document.querySelector(".ToDoContainer")
        container.innerHTML += ""
    }
    return {
        showTodos,
        removeTodo,
        editName,
        editDate,
        showTodoAdder,
        addTaskContext
    }
})();

const DOMEdit = (() => {
    return {
        editSideBar,
        editContainer,
    };
})();


export default DOMEdit