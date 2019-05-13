/*
    Author: Heather Cleland
    Name: eventsNewForm.js
    Purpose: Renders Form for Editing Event to the DOM
*/
import eventButtons from "./eventsSaveNewEvent";
import eventsAPIManager from "./eventsApiManager";
import buildEventsDOM from "./eventsDOMbuilder";
import displayEvents from "./eventsDOMDisplay";
import loginMethods from "./users-login"

const displayForm = {
    displayFormHTML: () => {
    return `
    <form id="eventForm">
        <div class="form-group">
            <label for="eventNameInput">Event Title: </label>
            <input type="text" class="form-control" id="eventNameInput" placedholder="Event Title" required></input>
        </div>

        <div class="form-group">
            <label for="eventDateInput">Event Date: </label>
            <input type="date" class="form-control" id="eventDateInput" placedholder="Event Date" required></input>
        </div>

        <div class="form-group">
            <label for="eventDescriptionInput">Event Description: </label>
            <input type="text" class="form-control" id="eventDescriptionInput" placedholder="Event Description" required></input>
        </div>
    </form>
    <button type="button" class="saveNewEventBtn btn btn-outline-primary">Save</button>
    `
    },

    updateEventHTML: (editEventId) => {
    return eventsAPIManager.getOneEvent(editEventId).then((event) => {
        const eventFormHTML = `
    <form id="eventForm">
        <div class="form-group">
            <label for="eventNameInput">Event Title: </label>
            <input type="text" class="form-control" id="eventNameInput" placedholder="Event Title" value="${event.title}"required></input>
        </div>

        <div class="form-group">
            <label for="eventDateInput">Event Date: </label>
            <input type="text" class="form-control" id="eventDateInput" placedholder="Event Date" value="${event.eventDate}"required></input>
        </div>

        <div class="form-group">
            <label for="eventDescriptionInput">Event Description: </label>
            <input type="text" class="form-control" id="eventDescriptionInput" placedholder="Event Description" value=${event.description}required></input>
        </div>
    </form>
    <button type="button" class="updateEventBtn btn btn-primary">Update</button>
    `
    document.querySelector(".events-left-output-container").innerHTML = eventFormHTML;
    document.querySelector(".updateEventBtn").addEventListener("click", () => {
        let titleInput = document.getElementById("eventNameInput").value
        let dateInput = document.getElementById("eventDateInput").value
        let descriptionInput = document.getElementById("eventDescriptionInput").value
        eventsAPIManager.editEvent(editEventId, {
          title: titleInput,
          eventDate: dateInput,
          description: descriptionInput,
          userId: loginMethods.getLoggedInUser().id
        }).then(() => {
          displayEvents();
        })
    })
    })
},

    displayFormEvents: () => {
        const outputEl = document.querySelector(".events-left-output-container");
        let eventHTML = displayForm.displayFormHTML();
        outputEl.innerHTML = eventHTML;
        document.querySelector(".saveNewEventBtn").addEventListener("click", () => {
            console.log("button clicked");
            eventButtons.saveNewEvent();
        });
        console.log("display form working")
    }
};

export default displayForm