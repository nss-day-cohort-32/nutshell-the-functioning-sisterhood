/*
    Author: Heather Cleland
    Name: eventsApiManager.js
    Purpose: Makes Fetch Calls to API
*/
import saveNewEvent from "./eventsSaveNewEvent"

const apiBaseUrl = "http://localhost:8088"

const eventsAPIManager = {
    getAllEvents: () => {
        return fetch(`${apiBaseUrl}/events`)
        .then(response => response.json())
    },
    getOneEvent: (eventId) => {
        return fetch(`${apiBaseUrl}/events/${eventId}`)
        .then(response => response.json())
    },
    editEvent: (eventId, eventObj) => {
        return fetch (`${apiBaseUrl}/events/${eventId}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(eventObj)
        })
        .then(response => response.json())
        .then(parsedResult => {
            console.log("updated event", parsedResult);
        })
    },
    createEvent: (eventObj) => {
        return fetch(`${apiBaseUrl}/events/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(eventObj)
            })
        .then(response => response.json())
        .then(parsedResult => {
            console.log("new user", parsedResult);
        });
    },
    deleteEvent: (eventId) => {
        return fetch(`${apiBaseUrl}/events/${eventId}`,
            {
                method: "DELETE"
            })
    }
}



export default eventsAPIManager