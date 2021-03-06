/*
    Author: Shelley Arnold
    Name: users-buildDOM.js
    Purpose: Build login/sign-up for users
*/

import usersAPImanager from "./users-apiManager"
import checkDB from "./users-signup-validation"
import loginMethods from "./users-login"


const postNewUserToDB = () => {
    let signUpFirstName = document.querySelector(".signup-input-firstName").value
    let signUpLastName = document.querySelector(".signup-input-lastName").value;
    let signUpEmail = document.querySelector(".signup-input-email").value;
    let signUpUserName = document.querySelector(".signup-input-userName").value;
    let signUpPassword1 = document.querySelector(".signup-input-password1").value;
    let signUpPassword2 = document.querySelector(".signup-input-password2").value;
    //validation conditions
    checkDB.getUserEmail(signUpEmail)
    .then(foundEmail => {
        checkDB.getUserName(signUpUserName)
        .then(foundUserName => {
        if(signUpFirstName == "" || signUpLastName == "" || signUpEmail == "" || signUpUserName == "" || signUpPassword1 == "" || signUpPassword2 == ""){
            alert("Missing content")
            return;
        }
        if(!foundUserName && !foundEmail){
            if(signUpPassword1 === signUpPassword2){
                usersAPImanager.makeUser({
                    firstName: signUpFirstName,
                    lastName: signUpLastName,
                    userName: signUpUserName,
                    email: signUpEmail,
                    password: signUpPassword2
                })
                .then(() => {
                    loginMethods.login(signUpUserName, signUpPassword2)
                })
            }else {
                alert("Passwords don't match")
            }
        }else {
            alert("Username or email already in use")
        }
    })
    })
}

export default postNewUserToDB