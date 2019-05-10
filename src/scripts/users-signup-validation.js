/*
    Author: Shelley Arnold
    Name: users-signup-validation.js
    Purpose: Grabs info from the database for taken usernames and email addresses
*/

import apiManager from "./users-apiManager"


const checkDB = {
    getUserEmail: () => {
        return apiManager.getAllUsers().then((users) => {
            users.forEach(user => {
                console.log(user.email)
            });
        })
    },
    getUserName: () => {
        return apiManager.getAllUsers().then((users) => {
            users.forEach(user => {
                console.log(user.userName)
            });
        })
    }
}

export default checkDB