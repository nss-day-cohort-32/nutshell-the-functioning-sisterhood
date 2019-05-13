/*
    Author: Heather Cleland
    Name: eventsDOMbuilder.js
    Purpose: Builds data into HTML object
*/
import buttonEvents from "./eventsSaveNewEvent"
import loginMethods from "./users-login"

// sessionStorage.setItem("userId", "6");

const buildEventsDOM = (events) => {
    let testUserId = sessionStorage.getItem("userId");
    let eventsList = document.querySelector(".events-right-output-container");
    eventsList.innerHTML = "";
    events.forEach(event => {
        // console.log(event)
        // if (event.userId != testUserId) {
        // } else {
        eventsList.innerHTML += `
        <div class="container">
            <div class="row">
                <div class="col">
                </div>
                <div class="col">
                <p>Let's Go Somewhere, ${loginMethods.getLoggedInUser().firstName}</p>
                <h1>${event.title}</h1>
                <h3>${event.description}</h3>
                <h5>${event.eventDate}</h5>
                <button id="editEventBtn" class="editEventBtn btn btn-outline-primary" data-id="${event.id}">Edit</button>
                <button id="deleteEventBtn" class="deleteEventBtn btn btn-outline-primary" data-id="${event.id}">Delete</button>
                <hr>
                </div>
            </div>
        </div>
        `
    })

    buttonEvents.editEvent();
    buttonEvents.deleteEvent();
};

export default buildEventsDOM

