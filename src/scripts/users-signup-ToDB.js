/*
    Author: Shelley Arnold
    Name: users-buildDOM.js
    Purpose: Build login/sign-up for users
*/

import apiManager from "./users-apiManager"
import checkDB from "./users-signup-validation"


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
        if(!foundUserName && !foundEmail && signUpFirstName !== "" && signUpLastName !== "" && signUpEmail !== "" && signUpUserName !== "" && signUpPassword1 !== "" && signUpPassword2 !== ""){
            if(signUpPassword1 === signUpPassword2){
                apiManager.makeUser({
                    firstName: signUpFirstName,
                    lastName: signUpLastName,
                    userName: signUpUserName,
                    email: signUpEmail,
                    password: signUpPassword2
                })
            }else {
                alert("passwords don't match")
            }
        }else {
            alert("Username or password already in use")
        }
    })
    })
}

export default postNewUserToDB