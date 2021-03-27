import DOMEdit from "./DOMManipulation"

const inboxButton = document.querySelector(".inbox")
const todayButton = document.querySelector(".today")
const thisWeekButton = document.querySelector(".thisWeek")
const addProject = document.querySelector(".addProject")

const buttonLogic = () => {
    inboxButton.addEventListener('click',  () => {
    //cerca tutti gli impegni del giorno
    //li mette all'interno di un array di oggetti
    //mostra gli oggetti

    
    });

    addProject.addEventListener('click', () => {
        DOMEdit.editSideBar.addProjectText()
    });
    
};

export default buttonLogic