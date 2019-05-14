// /*
//     Author: Emily
//     Name: taskDomComponent
//     Purpose: creating DOM components and appending them to left and right containers to display "TO DO" and "COMPLETED" tasks.
// */

import createTask from "./taskCreateHTML"
import API from "./taskApiManager"

const createListItems = () => {
    let container = document.querySelector(".task-main-output-container")
    container.innerHTML = "";

    // create left container
    let leftFrag = document.createDocumentFragment();
    let leftContainer = document.createElement("div");
    leftContainer.className = "task-left-container"
    leftFrag.appendChild(leftContainer)
    container.appendChild(leftFrag)

    // create right container
    let rightFrag = document.createDocumentFragment();
    let rightContainer = document.createElement("div");
    rightContainer.className = "task-right-container"
    rightFrag.appendChild(rightContainer)
    container.appendChild(rightFrag)

    // create right row
    const rightRowFrag = document.createDocumentFragment()
    let rightRowEl = document.createElement("div")
    rightRowEl.className = "row task-row"
    rightRowFrag.appendChild(rightRowEl)

    // create left row
    const leftRowFrag = document.createDocumentFragment()
    let leftRowEl = document.createElement("div")
    leftRowEl.className = "row task-row"
    leftRowFrag.appendChild(leftRowEl)
    leftContainer.appendChild(leftRowFrag)
    rightContainer.appendChild(rightRowFrag)

    // create bottom container
    let bottomFrag = document.createDocumentFragment();
    let bottomContainer = document.createElement("div");
    bottomContainer.className = "task-bottom-container"
    bottomFrag.appendChild(bottomContainer)
    container.appendChild(bottomFrag)

    // create new task button
    let newTaskFrag = document.createDocumentFragment();
    let newTaskBtn = document.createElement("button");
    newTaskBtn.className = "btn btn-outline-secondary task-buttons new-task-btn"
    newTaskBtn.innerHTML += "+ New Task"
    newTaskFrag.appendChild(newTaskBtn)
    bottomContainer.appendChild(newTaskFrag)
    newTaskBtn.addEventListener("click", function (event) {
        createTask(bottomContainer)
    })

        // create complete button
        let completeFrag = document.createDocumentFragment()
        let completeButton = document.createElement("button")
        completeButton.textContent = "Complete"
        completeButton.className = "btn btn-outline-secondary task-buttons task-complete-btn"
        completeFrag.appendChild(completeButton)
        bottomContainer.appendChild(completeFrag)

        // create incomplete button
        let incompleteFrag = document.createDocumentFragment()
        let incompleteButton = document.createElement("button")
        incompleteButton.textContent = "Incomplete"
        incompleteButton.className = "btn btn-outline-secondary task-buttons task-incomplete-btn"
        incompleteFrag.appendChild(incompleteButton)
        bottomContainer.appendChild(incompleteFrag)

        // create delete button
        let deleteFrag = document.createDocumentFragment()
        let deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
        deleteButton.className = "btn btn-outline-secondary task-buttons task-delete-btn"
        deleteFrag.appendChild(deleteButton)
        bottomContainer.appendChild(deleteFrag)

        API.getTaskData()
            .then(parsedResult => parsedResult.forEach(task => {
                if (task.taskCompleted === false) {
                    let listFrag = document.createDocumentFragment()
                    let leftCheckFrag = document.createDocumentFragment()
                    let leftCheckEl = document.createElement("input")
                    leftCheckEl.setAttribute("type", "checkbox")
                    leftCheckEl.className = "task-check form-check-input"
                    leftCheckEl.id = `${task.id}`
                    leftCheckFrag.appendChild(leftCheckEl)
                    let listEl = document.createElement("div")
                    let leftPFrag = document.createDocumentFragment()
                    let leftPEl = document.createElement("p")
                    leftPEl.textContent = `${task.task}`
                    leftPEl.className = `list-group-item task-list-${task.priorityLevel}`
                    const LeftSmallFrag = document.createDocumentFragment()
                    const LeftSmallEl = document.createElement("small")
                    LeftSmallEl.className = "task text-muted"
                    LeftSmallEl.textContent = `${task.dueDate}`
                    LeftSmallFrag.appendChild(LeftSmallEl)
                    leftPEl.appendChild(LeftSmallFrag)
                    leftPFrag.appendChild(leftPEl)
                    leftCheckFrag.appendChild(leftPFrag)
                    listFrag.appendChild(listEl)
                    leftCheckFrag.appendChild(listFrag)
                    leftRowEl.appendChild(leftCheckFrag)
                } else {
                    let listFrag = document.createDocumentFragment()
                    let rightCheckFrag = document.createDocumentFragment()
                    let rightCheckEl = document.createElement("input")
                    rightCheckEl.setAttribute("type", "checkbox")
                    rightCheckEl.className = "task-check form-check-input"
                    rightCheckEl.id = `${task.id}`
                    rightCheckFrag.appendChild(rightCheckEl)
                    let listEl = document.createElement("div")
                    let rightPFrag = document.createDocumentFragment()
                    let rightPEl = document.createElement("p")
                    rightPEl.className = `list-group-item task-list-${task.priorityLevel}`
                    rightPEl.textContent = `${task.task}`
                    rightPFrag.appendChild(rightPEl)
                    rightCheckFrag.appendChild(rightPFrag)
                    listFrag.appendChild(listEl)
                    rightCheckFrag.appendChild(listFrag)
                    rightRowEl.appendChild(rightCheckFrag)
                }
                let checkboxes = document.querySelectorAll(".task-check")
                let completeButtonClick = document.querySelector(".task-complete-btn")

                completeButtonClick.addEventListener("click", function (event) {
                    for (let box of checkboxes) {
                        if (box.checked === true) {
                            API.getOneTaskData(box.id)
                                .then(parsedResult => {
                                    if (parsedResult.length) {
                                        let task = parsedResult[0]
                                        task.taskCompleted = true;
                                        API.editTaskData(box.id, task)
                                            .then(function () {
                                                createListItems()
                                            })
                                    }
                                })
                        }
                    }
                })

                let incompleteButtonClick = document.querySelector(".task-incomplete-btn")
                incompleteButtonClick.addEventListener("click", function (event) {
                    for (let box of checkboxes) {
                        if (box.checked === true) {
                            API.getOneTaskData(box.id)
                                .then(parsedResult => {
                                    if (parsedResult.length) {
                                        let task = parsedResult[0]
                                        task.taskCompleted = false;
                                        API.editTaskData(box.id, task)
                                            .then(function () {
                                                createListItems()
                                            })
                                    }
                                })
                        }
                    }
                })

                let deleteButtonClick = document.querySelector(".task-delete-btn")
                // console.log(deleteButtonClick)
                deleteButtonClick.addEventListener("click", function (event) {
                    for (let box of checkboxes) {
                        if (box.checked === true) {
                            API.getOneTaskData(box.id)
                                .then(parsedResult => {
                                    if (parsedResult.length) {
                                        let task = parsedResult[0]
                                        console.log(task.id)
                                        API.deleteTaskData(task.id)
                                            .then(function () {
                                                createListItems()
                                            })
                                    }
                                })
                        }
                    }
                })
            }))
}

export default createListItems