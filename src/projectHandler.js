/* const projectHandler = (() => {
    const addProjectInList = (target) => {
        listOfProjects.push(target)
    }
    const deleteProjectFromList = (target) => {
        let index = listOfProjects.indexOf(target)
        listOfProjects.splice(index, 1)
    }
    const editProjectName = (before, target) => {
        if (!target || !before) {
            return
        }
        let project = listOfProjects.indexOf(before)
        listOfProjects[project] = target
    }
    return {
        addProjectInList,
        deleteProjectFromList,
        editProjectName,
    }
})();
 */
let listOfProjects = []

class Project {
    constructor(name) {
        this.name = name
        this.task = []
        this.init = (()=> {
            listOfProjects.push(this)
        })();
    }

    get name() {
        return this._name
    }

    set name(value) {
        if (value) {
            this._name = value
        }
    }

    addTaskToProject(value) {
        this.task.push(value)
    }

    removeTaskFromProject(value) {
        let index = this.task.indexOf(value)
        if(index !== -1) {
            this.task.splice(index, 1)
        }
    }
}

const checkIPAE = (name) => { ///check if project already exists
    let result = false
    listOfProjects.forEach(project => {
        if(project.name === name) {
            result = true
        }
    })
    return result
} 

const deleteProject = (value) => {
    function findIndexFunction(project) {
        if(project.name === value) {
            return true;
        }
    }

    let index = listOfProjects.findIndex(findIndexFunction)
    
    if(index === -1) {
        return
    }

    listOfProjects.splice(index, 1)
}

export { listOfProjects as listOfProjects,
        checkIPAE as checkIPAE,
        deleteProject as deleteProject,
        Project as default}