import displayEvents from "./eventsDOMDisplay"
import displayForm from "./eventsNewForm"
import welcomeMessage from "./users-landing"
import userFeed from "./users-feed.js"
import loginMethods from "./users-login"
import usersLogOut from "./users-logOut"
import forumMessages from "./message-forum"
import userList from "./friends-list"
import taskCreate from "./taskDomComponent"



if(loginMethods.getLoggedInUser() !== null) {
    userFeed.printToDOM()
    usersLogOut();
    displayEvents();
    displayForm.displayFormEvents();
    displayForm.displayFormHTML();
    forumMessages.printToDOM();
    userList.printToDOM();
    taskCreate();
}else {
    welcomeMessage.printToDOM()
    document.querySelector(".logout-button-main").style.display="none"
}
