import articleAPI from "./article-calls"
import displayEvents from "./eventsDOMDisplay"
import buildEventsDOM from "./eventsDOMbuilder"
// import editEvent from "./eventsEditEvent"
import displayForm from "./eventsNewForm"
import buttonEvents from "./eventsSaveNewEvent";

displayEvents();
displayForm.displayFormEvents();
displayForm.displayFormHTML();
// buttonEvents();
import welcomeMessage from "./users-landing"
import userFeed from "./users-feed.js"
import usersAPImanager from "./users-apiManager.js"
import loginMethods from "./users-login"
import usersLogOut from "./users-logOut"
import theInputFormForDOM from "./article-form"
import submissionsAndButtons from "./article-populate"

// Ellie's News

articleAPI.getAllArticles()
  .then(
      (allOfTheArticles) => {
          console.log("the articles", allOfTheArticles);
          submissionsAndButtons.populatePage(allOfTheArticles);
      }
  )
theInputFormForDOM.printToDOM()





import taskCreate from "./taskDomComponent"
import newTask from "./taskCreateHTML"
import saveNewObj from "./taskSaveForm";



if(loginMethods.getLoggedInUser() !== null) {
    userFeed.printToDOM()
    usersLogOut();
}else {
    welcomeMessage.printToDOM()
    document.querySelector(".logout-button-main").style.display="none"
}

// BEGIN: Emily's code

taskCreate()
// saveNewObj()

// END: Emily's code
