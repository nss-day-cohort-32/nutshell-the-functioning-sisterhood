/*
    Author: Shelley Arnold
    Name: users-login.js
    Purpose: Login users and add session storage id
*/

import checkDB from "./users-signup-validation"
<<<<<<< HEAD
=======
import userFeed from "./users-feed.js"
>>>>>>> master

let loginMethods = {
    login: (loginUserName, loginPassword) => {
        //validation conditions
        checkDB.getUserNameAndPassword(loginUserName, loginPassword)
        .then(foundUser => {
        if(foundUser !== null){
            console.log("what is foundUser", foundUser)
            console.log("successful login")
            sessionStorage.setItem("user", JSON.stringify(foundUser));
<<<<<<< HEAD
=======
            userFeed.printToDOM();
>>>>>>> master
        }else {
            alert("Username or password not a match")
        }
        })
    },
    getLoggedInUser: () => {
        let userSession = sessionStorage.getItem("user");
        if(userSession != null && userSession != ""){
            return JSON.parse(userSession);
        }
        return null;
    }
}

//get user id = loginMethods.getLoggedInUser().id

export default loginMethods