/*
    Author: Shelley Arnold
    Name: users-login.js
    Purpose: Login users and add session storage id
*/

import loginForm from "./users-login-buildDOM"
import checkDB from "./users-signup-validation"


const login = () => {
    let loginUserName = document.querySelector(".login-input-userName").value;
    let loginPassword = document.querySelector(".login-input-password").value;
    //validation conditions
    checkDB.getUserPassword(loginPassword)
    .then(foundPassword=> {
        checkDB.getUserName(loginUserName)
        .then(foundUserName => {
        if(foundUserName && foundPassword){
          console.log("successful login")
        }else {
            alert("Username or password not a match")
        }
    })
    })
}

export default login