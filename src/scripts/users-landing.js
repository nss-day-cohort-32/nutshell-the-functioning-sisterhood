/*
    Author: Shelley Arnold
    Name: users-landing.js
    Purpose: Landing page and welcome message
*/

import signUpForm from "./users-signup-buildDOM"
import loginForm from "./users-login-buildDOM"

const welcomeMessage = {
    buildWelcomeMessage: () => {
        return `
        <div class="jumbotron">
            <h1 class="display-4">Welcome!</h1>
            <p class="lead">Conveniently access your messages, friends, news, tasks, and events.</p>
            <hr class="my-4">
            <p>Shakespeare may have been one of the first to use a nutshell as a metaphor for something small, and by the 1800's the phrase in a nutshell became commonly used to mean "in a small number of words."</p>
            <p class="lead">
            <a class="landing-button-signIn btn btn-outline-primary" href="#" role="button">Register</a>
            <a class="landing-button-login btn btn-outline-primary s" href="#" role="button">Login</a>
            </p>
        </div>
        `
    },
    printToDOM: () => {
        const outEl = document.querySelector(".users-main-output-container");
        let welcomeHTML = welcomeMessage.buildWelcomeMessage();
        outEl.innerHTML = welcomeHTML;
        document.querySelector(".landing-button-signIn").addEventListener("click", () => {
            signUpForm.printToDOM();
        })
        document.querySelector(".landing-button-login").addEventListener("click", () => {
            loginForm.printToDOM();
        })
    }
}

export default welcomeMessage

