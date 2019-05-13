/*
    Author: Shelley Arnold
    Name: users-signup-validation.js
    Purpose: Grabs info from the database for taken usernames and email addresses
*/

import usersAPImanager from "./users-apiManager"


const checkDB = {
    getUserEmail: (email) => {
        let foundEmail = false;
        return usersAPImanager.getAllUsers().then((users) => {
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
        return usersAPImanager.getAllUsers().then((users) => {
            users.forEach(user => {
                if(user.userName == userName) {
                    foundUserName = true;
                }
            })
            return foundUserName;
        })
    },
    getUserNameAndPassword: (username, password) => {
        let foundUser = null;
        return usersAPImanager.getAllUsers().then((users) => {
            users.forEach(user => {
                if(user.userName == username && user.password == password) {
                    foundUser = user
                }
            })
            return foundUser;
        })
    }
}

export default checkDB