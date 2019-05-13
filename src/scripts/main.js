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
import taskCreate from "./taskDomComponent"
import newTask from "./taskCreateHTML"



if(loginMethods.getLoggedInUser() !== null) {
    userFeed.printToDOM()
    usersLogOut();
}else {
    welcomeMessage.printToDOM()
    document.querySelector(".logout-button-main").style.display="none"
}
<<<<<<< HEAD

// BEGIN: Emily's code

taskCreate()

// END: Emily's code
=======
>>>>>>> master
