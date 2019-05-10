/*
    Author: Shelley Arnold
    Name: users-buildDOM.js
    Purpose: Build login/sign-up for users
*/

import apiManager from "./users-apiManager";


const postNewUserToDB = () => {
    // document.querySelector(".signup-button-submit").addEventListener("click", (event) => {
        let signUpFirstName = document.querySelector(".signup-input-firstName").value
        let signUpLastName = document.querySelector(".signup-input-lastName").value;
        let signUpEmail = document.querySelector(".signup-input-email").value;
        let signUpUserName = document.querySelector(".signup-input-userName").value;
        let signUpPassword1 = document.querySelector(".signup-input-password1").value;
        let signUpPassword2 = document.querySelector(".signup-input-password2").value;
        console.log("1", signUpPassword1, "2", signUpPassword2)
    //validation conditions
    // if(signUpEmail !== && signUpUserName !== ){
        if(signUpFirstName !== "" && signUpLastName !== "" && signUpEmail !== "" && signUpUserName !== "" && signUpPassword1 !== "" && signUpPassword2 !== ""){
            console.log("if conditions met")
            if(signUpPassword1 === signUpPassword2){
                console.log("passwords match")
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
        }
    // }
// })
}

export default postNewUserToDB