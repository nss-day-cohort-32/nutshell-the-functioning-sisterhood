// /*
//     Author: Emily
//     Name: taskCreateHTML
//     Purpose: creating the form that pops up when you click "new task"
// */

import loginMethods from "./users-login"
import API from "./taskApiManager"
import createListItems from "./taskDomComponent"

    const saveBtnFrag = document.createDocumentFragment()
    const saveBtnHTML = document.createElement("button")
    saveBtnHTML.textContent = "Save"
    saveBtnHTML.className = "btn btn-outline-secondary task-buttons task-save-btn"
    saveBtnFrag.appendChild(saveBtnHTML)

const createNewTaskForm = (container) => {

    let block = `<form class="task-new-form">
    <h4>What would you like to get done?</h4>
    <div class="form-group">
    <input type="text" class="form-control task-input" id="exampleFormControlInput1" placeholder="Your task...">
    </div>
    <div class="form-group">
    <input type="text" class="form-control duedate-input" id="exampleFormControlInput2" placeholder="Due date...">
    </div>
    <div class="form-check">
    <input class="form-check-input task-check-input-field" type="radio" name="exampleRadios" id="exampleRadios1" value="1" checked>
    <label class="form-check-label" id="lowPriority" for="exampleRadios1">
    Low
    </label>
    </div>
    <div class="form-check">
    <input class="form-check-input task-check-input-field" type="radio" name="exampleRadios" id="exampleRadios1" value="2" checked>
    <label class="form-check-label" id="mediumPriority" for="exampleRadios1">
    Medium Priority
    </label>
    </div>
    <div class="form-check">
    <input class="form-check-input task-check-input-field" type="radio" name="exampleRadios" id="exampleRadios2" value="3">
    <label class="form-check-label" id="highPriority" for="exampleRadios2">
    High Priority
    </label>
  </div>
    </form>`

    container.innerHTML = block;

    container.appendChild(saveBtnFrag)
    saveBtnHTML.addEventListener("click", function () {
        let taskInput = document.querySelector("#exampleFormControlInput1").value
        let dateinput = document.querySelector("#exampleFormControlInput2").value
        let priorityInput = document.querySelector(".task-check-input-field").value
        // console.log(priorityInput)
        let newTaskObj =
        {
            task: taskInput,
            dueDate: dateinput,
            priorityLevel: priorityInput,
            taskCompleted: false,
            userId: loginMethods.getLoggedInUser().id
        }
        API.createTaskData(newTaskObj)
        .then(function () {
            createListItems()
        })
    })
}

export default createNewTaskForm

{/* <label for="exampleFormControlInput1">Priority Level:</label><br>
<div class="form-check form-check-inline">
<input class="form-check-input task-check-input-field" type="checkbox" id="inlineCheckbox1" value="1">
<label class="form-check-label" id="lowPriority" for="inlineCheckbox1" value="1">Low</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input task-check-input-field" type="checkbox" id="inlineCheckbox2" value="2">
<label class="form-check-label" id="mediumPriority" for="inlineCheckbox2" value="2">Medium</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input task-check-input-field" type="checkbox" id="inlineCheckbox3" value="3">
<label class="form-check-label" id="highPriority" for="inlineCheckbox3" value="3">High</label> */}