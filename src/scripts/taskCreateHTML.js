import saveNewTask from "./taskSaveForm"
import API from "./taskApiManager"
import createListItems from "./taskDomComponent"
    const saveBtnFrag = document.createDocumentFragment()
    const saveBtnHTML = document.createElement("button")
    saveBtnHTML.textContent = "Save"
    saveBtnHTML.className = "btn btn-outline-secondary task-save-btn"
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
    <label for="exampleFormControlInput1">Priority Level:</label><br>
    <div class="form-check form-check-inline">
    <input class="form-check-input task-check-input-field" type="checkbox" id="inlineCheckbox1" value="1">
    <label class="form-check-label" id="lowPriority" for="inlineCheckbox1">Low</label>
    </div>
    <div class="form-check form-check-inline">
    <input class="form-check-input task-check-input-field" type="checkbox" id="inlineCheckbox2" value="2">
    <label class="form-check-label" id="mediumPriority" for="inlineCheckbox2">Medium</label>
    </div>
    <div class="form-check form-check-inline">
    <input class="form-check-input task-check-input-field" type="checkbox" id="inlineCheckbox3" value="3">
    <label class="form-check-label" id="highPriority" for="inlineCheckbox3">High</label>
    </div>
    </form>`


    container.innerHTML = block;

    container.appendChild(saveBtnFrag)
    saveBtnHTML.addEventListener("click", function () {
        let taskInput = document.querySelector("#exampleFormControlInput1").value
        let dateinput = document.querySelector("#exampleFormControlInput2").value
        let priorityInput = document.querySelector(".task-check-input-field").value
        let newTaskObj =
            {
                task: taskInput,
                dueDate: dateinput,
                priorityLevel: priorityInput,
                taskCompleted: false
            }
        API.createTaskData(newTaskObj)
        createListItems()
    })
}

export default createNewTaskForm
