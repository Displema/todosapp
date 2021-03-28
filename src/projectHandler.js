let listOfProjects = []

const projectHandler = (() => {
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

export { listOfProjects as listOfProjects,
        projectHandler as default}