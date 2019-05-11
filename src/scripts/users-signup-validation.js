/*
    Author: Shelley Arnold
    Name: users-signup-validation.js
    Purpose: Grabs info from the database for taken usernames and email addresses
*/

import apiManager from "./users-apiManager"


const checkDB = {
    getUserEmail: (email) => {
        let foundEmail = false;
        return apiManager.getAllUsers().then((users) => {
            users.forEach(user => {
                if(user.email == email) {
                    foundEmail = true;
                }
            })
            return foundEmail;
        })
    },
    getUserName: (userName) => {
        let foundUserName = false;
        return apiManager.getAllUsers().then((users) => {
            users.forEach(user => {
                if(user.userName == userName) {
                    foundUserName = true;
                }
            })
            return foundUserName;
        })
    },
    getUserPassword: (password) => {
        let foundPassword = false;
        return apiManager.getAllUsers().then((users) => {
            users.forEach(user => {
                if(user.password == password) {
                    foundPassword = true;
                }
            })
            return foundPassword;
        })
    }
}

export default checkDB