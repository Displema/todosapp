import DOMPurify from 'dompurify';
import {addProjectRemoveLogic, addTaskContextLogic, taskButtonLogic, editTaskNameLogic, editTaskDateLogic} from "./buttonLogic"
import { formatDate } from './dateHandler';
import {listOfProjects, default as Project, checkIPAE, getProjectObject} from "./projectHandler"
import taskHandler from "./taskHandler"

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
            if(e.target.nodeName === "I") {
                return
            }

            let projectName = e.target.children[1].textContent
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
        container.innerHTML = toDoContainerTitle
        let circleIcon = '<i title="Edit task status"class="material-icons">panorama_fish_eye</i>'
        const deleteIcon = '<i title="Delete task" class="material-icons">clear</i>'
        todo.forEach(todo => {
            let name = todo.name
            let project = todo.project
            let dueTo = todo.dueTo || 'No date'
            let status = todo.status
            let newElement = document.createElement('button')
            newElement.setAttribute('data-value', `${name}`)
            newElement.setAttribute('data-project', `${project}`)
            newElement.classList.add('singleTask')
            if(status === "expired") {
                newElement.classList.add('expired')
            } else if (status === "completed") {
                newElement.classList.add('completed')
                circleIcon = '<i title="Edit task status"class="material-icons">done</i>'
            }

            newElement.innerHTML = `${circleIcon}<p>${name}</p><p>${dueTo}</p>${deleteIcon}`
            toDoContainer.appendChild(newElement)

            newElement.addEventListener('click', e => taskButtonLogic(e))
            document.querySelector(`[data-value="${name}"] p`).addEventListener('click', e => editTaskNameLogic(e))
            document.querySelector(`[data-value="${name}"] p:nth-child(3)`).addEventListener('click', e => editTaskDateLogic(e))
        });
    };
    const addSingleTodo = (task) => {
        const circleIcon = '<i title="Edit task status" class="material-icons">panorama_fish_eye</i>'
        const deleteIcon = '<i title="Delete task" class="material-icons">clear</i>'
        const container = document.querySelector(".ToDoContainer")

        let taskName = task.name
        let project = task.project
        let taskDueTo = task.dueTo || 'No date'
        let newElement = document.createElement('button')
        newElement.classList.add("singleTask")
        newElement.setAttribute('data-value', `${taskName}`)
        newElement.setAttribute('data-project', `${project}`)
        newElement.innerHTML += `${circleIcon}<p>${taskName}</p><p>${taskDueTo}</p>${deleteIcon}`
        container.innerHTML += newElement.outerHTML
        document.querySelector(`[data-value="${taskName}"]`).addEventListener('click', e => taskButtonLogic(e))
        document.querySelector(`[data-value="${taskName}"] p`).addEventListener('click', e => editTaskNameLogic(e))
        document.querySelector(`[data-value="${taskName}"] p:nth-child(3)`).addEventListener('click', e => editTaskDateLogic(e))
    }
    const editTaskStatus = (target, status) => {
        switch (status) {
            case "uncompleted": {
                //removes other classes
                target.parentElement.classList.remove('completed')
                target.parentElement.classList.remove('expired')

                target.innerHTML = "panorama_fish_eye"
                break
            }
            case "completed": {
                target.parentElement.classList.remove('uncompleted')
                target.parentElement.classList.remove('expired')
                target.parentElement.classList.add("completed")

                target.innerHTML = "done"
                break
            }
            case "expired": {
                target.parentElement.classList.remove('uncompleted')
                target.parentElement.classList.remove('completed')
                target.parentElement.classList.add("expired")

                target.innerHTML = "hourglass_empty"
                break
            }
        }
    }

    const addTitle = (title) => {
        container.innerHTML = `<h1 class="containerTitle">${title}</h1>`
    }
    const getTitle = () => {
        let title = document.querySelector(".containerTitle").textContent
        return title
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
        const plusIcon = '<i class="material-icons" style="padding-right: 0.2em">add_task</i>'
        const title = document.querySelector(".ToDoContainer h1")
        addButton.innerHTML = `${plusIcon}<p>Add task</p>`
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
        let div = document.querySelector("body > div.ToDoContainer > div") ? document.querySelector("body > div.ToDoContainer > div") : undefined
        if(!div) {
            return
        }
        button.removeAttribute('disabled')
        button.style.animation = "taskFadeIn 0.2s linear forwards"
        div.remove()
    }

    const editNameContext = (target, currName) => {
        let currTitle = getTitle()
        let projectName = target.parentElement.dataset.project
        const projectObject = getProjectObject(projectName)
        let input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.setAttribute('placeholder', currName)
        target.after(input)
        target.remove()
        input.focus()
        input.addEventListener('blur', () => {
            let newName = input.value && input.value !== "" && input.value !== currName ? input.value : currName
            projectObject.editTaskName(currName, newName)
            if (!(currTitle === "Inbox" || currTitle === "This week" || currTitle === "Today")) {
                DOMEdit.editContainer.showAllTodos(projectObject.task)
                showTodoAdder()
            }
            switch(currTitle) {
                case 'Inbox': {
                    taskHandler.showInbox()
                    showTodoAdder()
                    break
                }
            }
        })
    };
    const editDateContext = (target, currDate) => {
        let currTitle = getTitle();
        let projectName = target.parentElement.dataset.project
        let taskName = target.parentElement.dataset.value
        const projectObject = getProjectObject(projectName)
        let input = document.createElement('input')
        input.setAttribute('type', 'date')
        input.setAttribute('value', currDate)
        target.after(input)
        target.remove()
        input.focus()
        input.addEventListener('blur', () => {
            let newDate = input.value && input.value !== "" && input.value !== currDate ? input.value : currDate
            if(newDate) {
                let formattedDate = formatDate(newDate)
                projectObject.editTaskDate(taskName, formattedDate)
            }
            if (!(currTitle === "Inbox" || currTitle === "This week" || currTitle === "Today")) {
                DOMEdit.editContainer.showAllTodos(projectObject.task)
                showTodoAdder()
            }
            switch(currTitle) {
                case 'Inbox': {
                    taskHandler.showInbox()
                    showTodoAdder()
                    break
                }
            }
        })
    };

    const addTaskContext = () => {
        let addTaskButton = document.querySelector("body > div.ToDoContainer > button.addTask")

        let existentDiv = document.querySelector("body > div.ToDoContainer > div") ? document.querySelector("body > div.ToDoContainer > div") : undefined
        if (existentDiv) {
            return
        }

        let newDiv = document.createElement("div")
        newDiv.classList.add("inputTask")
        newDiv.innerHTML = `<input type="text" name="taskName" id="" placeholder="Task name">
        <button id="confirmAddTask"><i class="material-icons">add</i>Add</button> <button id="cancelAddTask">Cancel</button>`
        addTaskButton.after(newDiv)
    }

    return {
        showAllTodos,
        addSingleTodo,
        removeTodo,
        editNameContext,
        editDateContext,
        showTodoAdder,
        addTaskContext,
        disableTaskAdder,
        enableTaskAdder,
        addTitle,
        getTitle,
        editTaskStatus,
    }
})();

const DOMEdit = (() => {
    return {
        editSideBar,
        editContainer,
    };
})();


export default DOMEdit
