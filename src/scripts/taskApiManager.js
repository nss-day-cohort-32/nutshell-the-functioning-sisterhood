/*
    Author: Emily
    Name: taskApiManager
    Purpose: database calls
*/
const apiUrl = "http://localhost:8088";

const API = {
    getTaskData: function () {
        return fetch(`${apiUrl}/tasks`)
            .then(result => result.json())
    },
    getOneTaskData: function (taskId) {
        return fetch(`${apiUrl}/tasks?id=${taskId}`)
            .then(result => result.json())
    },
    editTaskData: function (taskId, taskToEdit) {
        return fetch(`${apiUrl}/tasks/${taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskToEdit)
        })
    },
    createTaskData: function (taskToSave) {
        fetch(`${apiUrl}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskToSave)
        })
    },
    deleteTaskData: function (taskId) {
        return fetch(`${apiUrl}/tasks/${taskId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}

export default API
