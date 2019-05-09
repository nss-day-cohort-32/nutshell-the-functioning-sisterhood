// article button -> click event ->

// create fieldset for user input

// user input will POST to DOM (with fetch) (save or 'submit' button?)

// create new object (HTML format)

// new object will have edit button

// new object will have delete button

// save button?
import API from "./article-calls"


let leftArticleForm = document.createElement("div");
  leftArticleForm.innerHTML = `
  <div id="leftColumn">
        <h1>Submit Your Article</h1>
        <fieldset class="submit-article">
          <label for="article-title">Title</label>
          <input type="text" name="article-title" id="article-title"> </input>
          <br></br>
          <label for="article-synopsis">Synopsis</label>
          <input type="text" name="article-synopsis" id="article-synopsis"> </input>
          <br></br>
          <label for="article-url">URL</label>
          <input type="url" name="article-url" id="article-url"></input>
          <br></br>
          <label for="article-img">Picture</label>
          <input type="file" name="article-img" id="article-img"></input>
          <br></br>
          <button id="save-article-btn">Save Article></button>
        </fieldset>
      </div>
     `;

const saveArticleBtn = document.getElementById("save-article-btn");

const article = {
  clearSubmitForm: () => {
    document.getElementById("article-title").value = "";
    document.getElementById("article-synopsis").value = "";
    document.getElementById("article-url").value = "";
    document.getElementById("article-img").value = "";
  },
  saveNewArticleObject: () => {
    const newArticleObject = {
      title: document.getElementById("article-title").value,
      synopsis: document.getElementById("article-synopsis").value,
      url: document.getElementById("article-url").value,
      picture: document.getElementById("article-img").value
    };
    API.saveArticle(newArticleObject);
  },
}
saveArticleBtn.addEventListener("click", () => {
article.saveNewArticleObject();
});

article.clearSubmitForm();

export default article