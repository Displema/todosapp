import DOMPurify from 'dompurify';

const toDoSidebar = document.querySelector('#ToDoDate')
const toDoContainer = document.querySelector('#ToDoContainer')
const projects = document.querySelector('#projects')

const editSideBar = () => {
    addProject = (project) => {
        let newProject = document.createElement('button')
        cleanProject = DOMPurify.sanitize(project)
        newProject.innerHTML = `<i class="material-icons">folder</i>${cleanProject}<i class="material-icons">delete</i>}`
        projects.appendChild(newProject)
    };
    removeProject = (target) => {
        projects.remove(target)
    }
};

const editContainer = () => {
    showTodos = (todo) => {
        // prende l'oggetto todo come lista intera di tutti i todo da mostrare, itera per ogni elemento e li mostra
        const circleIcon = '<i class="material-icons">panorama_fish_eye</i>'
        const deleteIcon = '<i class="material-icons">clear</i>'
        for(element in todo) {
            let name = element["name"]
            let dueTo = element["dueTo"]
            let newElement = document.createElement('button')
            newElement.setAttribute('data-value', `${name}`)
            newElement.classList.add('button-task')
            newElement.innerHTML = `${circleIcon}<p>${name}</p> <p>${date}</p> ${deleteIcon}}`
        }
    }
}

const DOMEdit = (() => {
    return {
        editSideBar,
        editContainer,
    }
})();

export default DOMEdit