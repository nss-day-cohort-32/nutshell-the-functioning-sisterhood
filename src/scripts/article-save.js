import articleAPI from "./article-calls"

import submissionsAndButtons from "./article-populate";

const saveFunctions = {
  clearSubmitForm: () => {
    document.getElementById("article-id").value = "x";
    document.getElementById("article-title").value = "x";
    document.getElementById("article-synopsis").value = "x";
    document.getElementById("article-url").value = "x";
  },
  saveNewArticleObject: () => {
    const stampDate = Date();
    const newsTime = (stampDate);
    const newArticleObject = {
      title: document.getElementById("article-title").value,
      synopsis: document.getElementById("article-synopsis").value,
      url: document.getElementById("article-url").value,
      dateTime: newsTime,
    };
    // getting the database
    articleAPI.saveArticle(newArticleObject)
      .then(allResults => {
        console.log(allResults);
        articleAPI.getAllArticles()
          .then(result => {
            submissionsAndButtons.populatePage(result);
          })
      }
      )
  },
  saveArticleBtn: () => {
    console.log("save button clicked");
    const newsLeftContainer = document.querySelectorAll(".news-left-output-container")
    let mySavedNews = saveFunctions.saveNewArticleObject();
    newsLeftContainer.innerHTML = mySavedNews;
  },
}

export default saveFunctions
