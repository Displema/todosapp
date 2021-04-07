class Task {
    constructor (name, project) {
        this.name = name
        this.project = project || "Default"
        this.status = 'uncompleted'
        this.dueTo = 'No date'
    }

    set name(value) {
        this._name = value
    }
    get name() {
        return this._name
    }

    set project(value) {
        this._project = value
    }
    get project() {
        return this._project
    }

    set dueTo(value) {
        this._dueTo = value
    }
    get dueTo() {
        return this._dueTo
    }

    set status(value) {
        this._status = value
    }
    get status() {
        return this._status
    }
}
///////////

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

const loadLS = () => {
    if(localStorage.length === 0) {
        return
    }
    Object.keys(localStorage).forEach(key => {
        listOfProjects = []
        let jsoned = localStorage.getItem(key)
        let parsedProject = JSON.parse(jsoned)
        let projectTask = parsedProject.task
        const newProject = new Project(key)
        projectTask.forEach(task => {
            const newTask = new Task(task._name, key)
            newTask.status = task._status
            newTask.dueTo = task._dueTo
            newProject.addTaskToProject(newTask)
        })
        console.log(newProject)
     });
}

const addProjectToLS = project => {
    const projectName = project.name
    const projectStringified = JSON.stringify(project)
    localStorage.setItem(projectName, projectStringified)
}

const editTaskNameLS = task => {
    const projectName = task.project
    const projectObject = getProjectObject(projectName)
    const stringified = JSON.stringify(projectObject)
    localStorage.setItem(projectName, stringified)
}

const localStorageHandler = (() => {
    return {
        loadLS,
        addProjectToLS,
    }
})();

export default localStorageHandler