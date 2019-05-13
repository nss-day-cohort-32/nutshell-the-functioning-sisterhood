/*
    Author: Heather Cleland
    Name: eventsDOMbuilder.js
    Purpose: Builds data into HTML object
*/
import buttonEvents from "./eventsSaveNewEvent"

// sessionStorage.setItem("userId", "6");

const buildEventsDOM = (events) => {
    let testUserId = sessionStorage.getItem("userId");
    let eventsList = document.querySelector(".right-output-container");
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
                <p>${event.id}</p>
                <h1>${event.title}</h1>
                <h3>${event.description}</h3>
                <h5>${event.eventDate}</h5>
                <button id="editEventBtn" class="editEventBtn" data-id="${event.id}">Edit</button>
                <button id="deleteEventBtn" class="deleteEventBtn" data-id="${event.id}">Delete</button>
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

