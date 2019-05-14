/*
  Author: Heather Cleland
  Name: eventsEventListeners.js
  Purpose: Add Event Listeners to Buttons
*/
import eventsAPIManager from "./eventsApiManager"
import displayForm from "./eventsNewForm"
import displayEvents from "./eventsDOMDisplay"
import buildEventsDOM from "./eventsDOMbuilder"
import loginMethods from "./users-login"

const buttonEvents = {
 editEvent: () => {
  document.querySelectorAll(".editEventBtn").forEach(edit => {
   edit.addEventListener("click", (event) => {
    const editEventId = event.target.dataset.id;
    console.log("editEventId", editEventId);
    displayForm.updateEventHTML(editEventId);
    });
   })
 },
 // clearEventForm: () => {
 //  const updateButton = document.querySelector(".updateEventBtn");
 //  updateButton.addEventListener("click", (event) => {
 //    document.getElementById("eventForm").reset();
 //  })
 // },
 saveNewEvent: () => {
  let titleInput = document.getElementById("eventNameInput").value
  let dateInput = document.getElementById("eventDateInput").value
  let descriptionInput = document.getElementById("eventDescriptionInput").value
  eventsAPIManager.createEvent({
   title: titleInput,
   eventDate: dateInput,
   description: descriptionInput,
   userId: loginMethods.getLoggedInUser().id
  })
  .then(displayEvents);
  document.getElementById("eventForm").reset();
  console.log("yay")
 },
 deleteEvent: () => {
  document.querySelectorAll(".deleteEventBtn").forEach(deleteEvent => {
   deleteEvent.addEventListener("click", (event) => {
    eventsAPIManager.deleteEvent(event.target.dataset.id).then(() => {
     displayEvents();
    })
   })
   // (event) => {
   //  eventsAPIManager.deleteEvent(event.target.dataset.id).then(() => {
   //   displayEvents();
   //  })
   // }
  })
 }
}
export default buttonEvents