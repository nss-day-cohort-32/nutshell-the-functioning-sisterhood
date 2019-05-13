const populatePage = (articleArray) => {
    let newDiv = document.createElement("div")
    newDiv.innerHTML = articleArray.map(makeGrid).join("");
    document.querySelector(".right-output-container").append(newDiv);
}

const makeGrid = (news) => {
    return `<div id="rightColumn">
            <h3> ${news.title} </h3>
            <p> ${news.synopsis} </p>
            <a href="${news.url}"> Go to Article </a>
            <p> Author: ${news.userId} </p>
            <p> ${news.articleDate} </p>
            <button id="edit-article-btn"> Edit </button>
            <button id="delete-article-btn"> Delete </button>
            <hr>
            </div>
    `
}

 export default populatePage
