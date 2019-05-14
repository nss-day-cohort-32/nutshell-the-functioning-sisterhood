//newObject showing twice until refresh
//time fix
//buttons clicked, put not working
//links dont redirect

import articleFunctions from "./article-save"


const theInputFormForDOM = {
  displayFormAsHTML: () => {
    return `
         <fieldset class="submit-article">
         <h3>Submit Your Article</h3>
          <br>
           <label for="article-title">Title:</label>
           <input type="text" name="article-title" id="article-title"> </input>
           <br>
           <label for="article-synopsis">Synopsis:</label>
           <textarea name="article-synopsis" rows="5" cols="25" id="article-synopsis"> </textarea>
           <br>
           <label for="article-url">URL:</label>
           <input type="url" name="article-url" id="article-url"></input>
           <br>
           <label for="article-date">Date:</label>
           <input type="date" name="article-date" id="article-date"></input>
           <br>
           <button class="btn btn-outline-secondary" id="save-article-btn">Save Article</button>
         </fieldset>
       
       <br>
      `
  },
  printToDOM: () => {
    const newsLeftContainer = document.querySelector(".news-left-output-container");
    let myNewsForm = theInputFormForDOM.displayFormAsHTML();
    newsLeftContainer.innerHTML += myNewsForm
    document.getElementById("save-article-btn").addEventListener("click",
      articleFunctions.saveArticleBtn)
  }
}

export default theInputFormForDOM