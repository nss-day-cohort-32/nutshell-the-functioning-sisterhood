// article button -> click event ->

// create fieldset for user input

// user input will POST to DOM (with fetch) (save or 'submit' button?)

// create new object (HTML format)

// new object will have edit button

// new object will have delete button

// save button?
import articleFunctions from "./article-save"
import editFunction from "./article-edit"

const theInputFormForDOM = {
  displayFormAsHTML: () => {
    return `
         <fieldset class="submit-article">
         <h3>Submit Your Article</h3>
           <label for="article-title">Title:</label>
           <input type="text" name="article-title" id="article-title"> </input>
           <br>
           <label for="article-synopsis">Synopsis:</label>
           <input type="text" name="article-synopsis" id="article-synopsis"> </input>
           <br>
           <label for="article-url">URL:</label>
           <input type="url" name="article-url" id="article-url"></input>
           <br>
           <label for="article-img">Picture:</label>
           <input type="file" name="article-img" id="article-img"></input>
           <br>
           <label for="article-date">Date:</label>
           <input type="date" name="article-img" id="article-img"></input>
           <br>
           <button id="save-article-btn">Save Article</button>
         </fieldset>
       
       <br>
      `
  },
  printToDOM: () => {
    const leftColumn = document.querySelector("#news");
    let myForm = theInputFormForDOM.displayFormAsHTML();
    leftColumn.innerHTML += myForm
    document.getElementById("save-article-btn").addEventListener("click",
        articleFunctions.saveArticleBtn)
      }
    }

document.getElementById("edit-article-btn").addEventListener("click",
      editFunction.editArticleBtn)



export default theInputFormForDOM