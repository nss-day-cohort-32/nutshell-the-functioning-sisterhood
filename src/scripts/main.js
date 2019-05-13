import article from "./article"
import articleAPI from "./article-calls"
import welcomeMessage from "./users-landing"
import userFeed from "./users-feed.js"
import usersAPImanager from "./users-apiManager.js"
import loginMethods from "./users-login"
import usersLogOut from "./users-logOut"
import theInputFormForDOM from "./article-form"
import populatePage from "./article-populate"



if(loginMethods.getLoggedInUser() !== null) {
    userFeed.printToDOM()
    usersLogOut();
}else {
    welcomeMessage.printToDOM()
    document.querySelector(".logout-button-main").style.display="none"
}

article()
articleAPI()


  articleAPI.getAllArticles()
  .then(
      (allOfTheArticles) => {
          console.log("the articles", allOfTheArticles);
          populatePage(allOfTheArticles);
      }
  )

theInputFormForDOM.printToDOM()
