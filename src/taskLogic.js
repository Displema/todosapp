class Task {
    constructor (name, project) {
        this.name = name
        this.project = project || "Default"
        this.dueDate = ''
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

    set dueDate(value) {
        ///
    }
    get dueDate() {
        return this._dueDate
    }
}

export default Task