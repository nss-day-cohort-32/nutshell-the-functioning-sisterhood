import welcomeMessage from "./users-landing"
import userFeed from "./users-feed.js"
import loginMethods from "./users-login"
import usersLogOut from "./users-logOut"

import userList from "./friends-list"

userList.printToDOM()

// if(loginMethods.getLoggedInUser() !== null) {
//     userFeed.printToDOM()
//     usersLogOut();
// }else {
//     welcomeMessage.printToDOM()
//     document.querySelector(".logout-button-main").style.display="none"
// }