import articleAPI from "./article-calls"
import populatePage from "./article-populate";

const editFunction = {
editNewArticleObject: () => {
    const editObject = {
      title: document.getElementById("article-title").value,
      synopsis: document.getElementById("article-synopsis").value,
      url: document.getElementById("article-url").value,
      picture: document.getElementById("article-img").value,
      userId: document.getElementById("user-id").value
    };
    // getting the database
    articleAPI.editArticle(editObject)
        .then(result => {
            console.log(result);
            articleAPI.editArticle()
            .then(allResults => {
            populatePage(allResults);
            })
        }
        )
  },
  editArticleBtn: () => {
    console.log("edit button clicked");
    const rightColumn = document.querySelector(".right-output-container")
    let edit = editFunction.editNewArticleObject();
    rightColumn.innerHTML += edit
  },
}
