import API from "./taskApiManager"

const bottomContainer = document.querySelector(".task-bottom-container")
console.log(bottomContainer)
const createNewTaskForm = (container) => {
    const saveBtnClick = () => {
    API.createTaskData
    }

    let block = `<form class="task-new-form">
    <h4>What would you like to get done?</h4>
        <div class="form-group">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your task...">
        </div>
            <div class="form-group">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Due date...">
        </div>
        <label for="exampleFormControlInput1">Priority Level:</label><br>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" id="lowPriority" for="inlineCheckbox1">Low</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
            <label class="form-check-label" id="mediumPriority" for="inlineCheckbox2">Medium</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
            <label class="form-check-label" id="highPriority" for="inlineCheckbox3">High</label>
    </div>
    <button class="taskSaveBtn">Save</button>
    </form>`

    container.innerHTML = block;
    // const saveBtnFrag = document.createDocumentFragment()
    // const saveBtnHTML = document.createElement("button")
    // saveBtnFrag.appendChild(saveBtnHTML)
    // container.appendChild(saveBtnFrag)
}
export default createNewTaskForm
{/* <label for="exampleFormControlInput1">Task:</label><br>
<label for="exampleFormControlInput1">Due Date:</label><br> */}

