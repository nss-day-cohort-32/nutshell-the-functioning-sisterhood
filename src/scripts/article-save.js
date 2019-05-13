import articleAPI from "./article-calls"
import populatePage from "./article-populate";

const articleFunctions = {
  clearSubmitForm: () => {
    document.getElementById("article-title").value = "x";
    document.getElementById("article-synopsis").value = "x";
    document.getElementById("article-url").value = "x";
    document.getElementById("article-img").value = "x";
  },
  saveNewArticleObject: () => {
    const newArticleObject = {
      title: document.getElementById("article-title").value,
      synopsis: document.getElementById("article-synopsis").value,
      url: document.getElementById("article-url").value,
      picture: document.getElementById("article-img").value,
    };
    // getting the database
    articleAPI.saveArticle(newArticleObject)
      .then(result => {
        console.log(result);
        articleAPI.getAllArticles()
          .then(allResults => {
            populatePage(allResults);
          })
      }
      )
  },
  saveArticleBtn: () => {
    console.log("save button clicked");
    const rightColumn = document.querySelector(".news-right-output-container")
    let mySaved = articleFunctions.saveNewArticleObject();
    rightColumn.innerHTML += mySaved
  },
}


export default articleFunctions