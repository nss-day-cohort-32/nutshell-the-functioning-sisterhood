import articleAPI from "./article-calls"

const submissionsAndButtons = {
populatePage: (articleArray) => {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "article-list");
    newDiv.innerHTML = articleArray.map(makeGrid).join("");
    document.querySelector(".news-right-output-container").append(newDiv);
    let allDeleteBtns = document.querySelectorAll(".delete-btn");
    allDeleteBtns.forEach(dbtn => {
        console.log(dbtn);
        dbtn.addEventListener("click", handleDelete)
    })
    let allEditBtns = document.querySelectorAll(".edit-btn");
    allEditBtns.forEach(ebtn => {
        console.log(ebtn);
        ebtn.addEventListener("click", handleEdit)
    })
}
}


const handleDelete = (event) => {
    console.log("Let's Delete", event);
    console.log("deleteobject", event.target.getAttribute("data-delete-id"))
    articleAPI.deleteArticle(event.target.getAttribute("data-delete-id"))
}


const handleEdit = (editObject) => {
    console.log("Let's Edit ", editObject);
    console.log("editobj", event.target.getAttribute("data-edit-id"))
    articleAPI.editArticle(event.target.getAttribute("data-edit-id"))
}

const makeGrid = (news) => {
    return `<div id="newsSubmissions">
    <h3> ${news.title} </h3>
    <p> ${news.synopsis} </p>
    <a href="${news.url}"> Go to Article </a>
    <p> ${news.dateTime} </p>
    <button class="delete-btn btn btn-outline-secondary data-delete-id="${news.id}" >Delete</button>
    <button class="edit-btn btn btn-outline-secondary data-edit-id="${news.id}"> Edit </button>
    <hr>
    </div>
    `
}




export default submissionsAndButtons
