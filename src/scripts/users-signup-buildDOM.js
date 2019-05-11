/*
    Author: Shelley Arnold
    Name: users-singup-buildDOM.js
    Purpose: Build sign-up for users
*/

import loginForm from "./users-login-buildDOM"
import postNewUserToDB from "./users-signup-ToDB"
import loginMethods from "./users-login"

const signUpForm = {
    buildSignUpForm: () => {
        return `
        <!-- Material form register -->
        <div class="users-signup-div card">
        
            <h4 class="card-header info-color white-text text-center py-4">
                <strong>Sign up</strong>
            </h4>
        
            <!--Card content-->
            <div class="users-signup-container card-body px-lg-5 pt-0">
        
                <!-- Form -->
                <form class="text-center" style="color: #757575;">
        
                    <div class="form-row">
                        <div class="col">
                            <!-- First name -->
                            <div class="md-form">
                                <input type="text" id="materialRegisterFormFirstName" class="signup-input-firstName form-control" required>
                                <label for="materialRegisterFormFirstName">First name</label>
                            </div>
                        </div>
                        <div class="col">
                            <!-- Last name -->
                            <div class="md-form">
                                <input type="text" id="materialRegisterFormLastName" class="signup-input-lastName form-control" required>
                                <label for="materialRegisterFormLastName">Last name</label>
                            </div>
                        </div>
                    </div>
        
                    <!-- E-mail -->
                    <div class="md-form mt-0">
                        <input type="email" id="materialRegisterFormEmail" class="signup-input-email form-control" required>
                        <label for="materialRegisterFormEmail">E-mail</label>
                    </div>

                    <!-- Username -->
                    <form class="text-center" style="color: #757575;">
                    <div class="md-form mt-0">
                        <input type="text" id="materialRegisterFormUsername" class="signup-input-userName form-control" required>
                        <label for="materialRegisterFormUsername">Username</label>
                    </div>
        
                    <!-- Password -->
                    <div class="users-password1-input md-form">
                        <input type="password" minlength="6" id="materialRegisterFormPassword" class="signup-input-password1 form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" required>
                        <label for="materialRegisterFormPassword">Password</label>
                        <small id="materialRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                        <!-- At least 8 characters and 1 digit -->
                        </small>
                    </div>

                    <!-- Password Match-->
                    <div class="users-password2-input md-form">
                        <input type="password" minlength="6" id="materialRegisterFormPasswordMatch" class="signup-input-password2 form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" required>
                        <label for="materialRegisterFormPassword">Repeat Password</label>
                        <small id="materialRegisterFormPasswordHelpBlock1" class="form-text text-muted mb-4">
                        </small>
                    </div>
        
                    <!-- Sign up button -->
                    <button class="signup-button-submit btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign up</button>
                    <hr>
        
                    <!-- Terms of service -->
                    <!-- <p>By clicking
                        <em>Sign up</em> you agree to our
                        <a href="" target="_blank">terms of service</a> -->
        
                </form>
                <!-- Form -->
                
                <!-- Login Option -->
                <h6 class="card-header info-color white-text text-center py-4">
                <strong>Already a user?</strong>
                </h6>
                <!-- Login button -->
                <button class="login-button-submit btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Login</button>
                <hr>
            </div>
        
        </div>

        <!-- Material form register -->

        `
    },
    printToDOM: () => {
        const outEl = document.querySelector(".main-output-container");
        let signUpHTML = signUpForm.buildSignUpForm();
        outEl.innerHTML = signUpHTML;
        document.querySelector(".login-button-submit").addEventListener("click", () => {
            loginForm.printToDOM();
        });
        document.querySelector(".signup-button-submit").addEventListener("click", () => {
            postNewUserToDB()
        });
    }
}



export default signUpForm