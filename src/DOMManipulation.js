import DOMPurify from 'dompurify';
import {addProjectRemoveLogic, addTaskContextLogic} from "./buttonLogic"
import {listOfProjects, default as Project, checkIPAE, deleteProject, init, getProjectObject} from "./projectHandler"
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
                toggleSelected()
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
        newProject.innerHTML = `<i class="material-icons">folder</i><div style="pointer-events: none">${cleanProject}</div><i class="material-icons">delete</i>`
        newProject.classList.add("singleProject")
        projects.appendChild(newProject)

        newProject.addEventListener('click', (e) => {
            let projectName = e.target.children[1].textContent ? e.target.children[1].textContent : undefined
            if(!projectName) {
                return
            }
            toggleSelected(e.target)
            DOMEdit.editContainer.addTitle(projectName)
            let projObj = getProjectObject(projectName)
            DOMEdit.editContainer.showAllTodos(projObj.task)
            DOMEdit.editContainer.showTodoAdder()

        })
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
    const showAllTodos = (todo) => {
        const toDoContainerTitle = document.querySelector("body > div.ToDoContainer > h1.containerTitle").outerHTML
        // prende l'oggetto todo come lista intera di tutti i todo da mostrare, itera per ogni elemento e li mostra
        container.innerHTML = toDoContainerTitle
        const circleIcon = '<i class="material-icons">panorama_fish_eye</i>'
        const deleteIcon = '<i class="material-icons">clear</i>'
        todo.forEach(todo => {
            let name = todo["name"]
            /* let dueTo = element["dueTo"] */
            let newElement = document.createElement('button')
            newElement.setAttribute('data-value', `${name}`)
            newElement.classList.add('button-task')
            newElement.innerHTML = `${circleIcon}<p>${name}</p> <div data-value="${name}"}>$</div> ${deleteIcon}}`
            toDoContainer.appendChild(newElement)
        });
    };

    const addSingleTodo = (task) => {
        let taskName = task.name
        /* let taskDueTo = task.dueTo */
        const circleIcon = '<i class="material-icons">panorama_fish_eye</i>'
        const deleteIcon = '<i class="material-icons">clear</i>'
        let container = document.querySelector("body > div.ToDoContainer")
        container.innerHTML += `<button class="singleTask">${circleIcon} <p>${taskName}</p>${deleteIcon}</button>`
    }

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
        // coupled module but I found no way to do it
        addTaskContextLogic()
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
        showAllTodos,
        addSingleTodo,
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