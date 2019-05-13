/*
    Author: Shelley Arnold
    Name: users-login-buildDOM.js
    Purpose: Build login for users
*/

import signUpForm from "./users-signup-buildDOM"
import loginMethods from "./users-login"

const loginForm = {
    buildLoginForm: () => {
        return `
            <div class="users-login-div card">
            <h5 class="users-login-h5 card-header info-color white-text text-center py-4">
            <strong>Login</strong>
            </h5>

            <!--Card content-->
            <div class="users-login-container card-body px-lg-5 pt-0">

                <!-- Form -->
                <form class="users-login-form text-center" style="color: #757575;">

                <!-- Username -->
                <form class="text-center" style="color: #757575;">
                <div class="users-input-username md-form"">
                    <input type="text" id="materialRegisterFormUsername" class="login-input-userName form-control" required>
                    <label for="materialLoginFormUsername">Username</label>
                </div>

                <!-- Password -->
                <div class="md-form">
                    <input type="password" id="materialLoginFormPassword" class="login-input-password form-control">
                    <label for="materialLoginFormPassword">Password</label>
                </div>

                <!-- Login button -->
                <button class="users-login-button  btn btn-outline-primary btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Login</button>

                <!-- Register -->
                <p>Not a member?
                <button class="return-signup-button-submit btn btn-outline-primary btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Register</button>
                <hr>
                
                </form>
                <!-- Form -->

            </div>

            </div>
            <!-- Material form login -->
        `
    },
    printToDOM: () => {
        const outEl = document.querySelector(".users-main-output-container");
        let loginHTML = loginForm.buildLoginForm();
        outEl.innerHTML = loginHTML;
        document.querySelector(".return-signup-button-submit").addEventListener("click", () => {
            signUpForm.printToDOM();
        })
        document.querySelector(".users-login-button").addEventListener("click", () => {
            let loginUserName = document.querySelector(".login-input-userName").value;
            let loginPassword = document.querySelector(".login-input-password").value;
            loginMethods.login(loginUserName, loginPassword)
        })
    }
}

//once logged in there will be a user id, the fucntion that logs a person in will also set session storage
//sessionStorage.setItem("key", "value") ie - "userId", "1"
//.getItem()

export default loginForm