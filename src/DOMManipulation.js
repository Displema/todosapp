import DOMPurify from 'dompurify';

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
        input.addEventListener('blur', (e)=> {
            let newProject = e.target.value ? e.target.value : "Default"
            addProject(newProject)
            removeProjectText(input);
        })
    }
    const addProject = (project) => {
        let newProject = document.createElement('button')
        let cleanProject = DOMPurify.sanitize(project)
        newProject.innerHTML = `<i class="material-icons">folder</i>${cleanProject}<i class="material-icons">delete</i>`
        newProject.classList.add("singleProject")
        projects.appendChild(newProject)
    };

    const removeProject = (target) => {
        projects.remove(target)
    };

    return {
        addProjectText,
        removeProjectText,
        addProject,
        removeProject,
    };
})();

const editContainer = (() => {
    const showTodos = (todo) => {
        // prende l'oggetto todo come lista intera di tutti i todo da mostrare, itera per ogni elemento e li mostra
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
    const editName = (target, newName) => {

    };
    const editDate = (target, newDate) => {

    };
    return {
        showTodos,
        removeTodo,
        editName,
        editDate
    }
})();

const DOMEdit = (() => {
    return {
        editSideBar,
        editContainer,
    };
})();


export default DOMEdit
