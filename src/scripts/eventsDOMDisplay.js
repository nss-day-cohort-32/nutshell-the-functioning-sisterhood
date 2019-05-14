/*
    Author: Heather Cleland
    Name: eventsDOMDisplay.js
    Purpose: Renders object to the DOM
*/
import eventsAPIManager from "./eventsApiManager"
import buildEventsDOM from "./eventsDOMbuilder"
import saveNewEvent from "./eventsSaveNewEvent"

const displayEvents = () => {
    eventsAPIManager.getAllEvents().then(parsedEvents => {
        // console.log("getting events", parsedEvents);
        buildEventsDOM(parsedEvents);
    });
};



export default displayEvents