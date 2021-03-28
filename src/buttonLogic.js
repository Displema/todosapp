import DOMEdit from "./DOMManipulation"
import projectHandler from "./projectHandler"

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
/*             projectHandler.deleteProjectFromList(project) */
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
            if(event.target === icon) {
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
    });

    addProject.addEventListener('click', (e) => {
        DOMEdit.editSideBar.toggleSelected(e.target)
        DOMEdit.editSideBar.addProjectText()
    });
    
    todayButton.addEventListener('click', (e) => {
        DOMEdit.editSideBar.toggleSelected(e.target)
    })

    thisWeekButton.addEventListener('click', (e) => {
        DOMEdit.editSideBar.toggleSelected(e.target)
    })


};

export {addProjectRemoveLogic as addProjectRemoveLogic, buttonLogic as default}