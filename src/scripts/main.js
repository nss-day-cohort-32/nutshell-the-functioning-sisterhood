import welcomeMessage from "./users-landing"
import userFeed from "./users-feed.js"
import usersAPImanager from "./users-apiManager.js"
import loginMethods from "./users-login"



if(loginMethods.getLoggedInUser() !== null) {
    userFeed.printToDOM()
}else {
    welcomeMessage.printToDOM()
}