const listOfProjects = []

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

    editTaskName(oldName, newName) {
        function findIndexFunction(task) {
            if(task.name === oldName) {
                return true;
            }
        }
    
        let result = this.task.findIndex(findIndexFunction)
        this.task[result].name = newName
    }

    editTaskStatus(taskName, newStatus) {
        function findIndexFunction(task) {
            if(task.name === taskName) {
                return true;
            }
        }
    
        let result = this.task.findIndex(findIndexFunction)
        this.task[result].status = newStatus
    }

    editTaskDate(taskName, newDate) {
        function findIndexFunction(task) {
            if(task.name === taskName) {
                return true;
            }
        }
    
    let result = this.task.findIndex(findIndexFunction)
    this.task[result].dueTo = newDate
    }
    
    removeTaskFromProject(value) {
    function findIndexFunction(task) {
        if(task.name === value) {
            return true;
        }
    }

    let result = this.task.findIndex(findIndexFunction)
    this.task.splice(result, 1)
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

const getProjectObject = (projectName) => {
    function findFunction(project) {
        if(project.name === projectName) {
            return true;
        }
    }

    let result = listOfProjects.find(findFunction)
    
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

/* const Default = new Project("Default") */

export { listOfProjects as listOfProjects,
        checkIPAE as checkIPAE,
        deleteProject as deleteProject,
        getProjectObject as getProjectObject,
        Project as default}