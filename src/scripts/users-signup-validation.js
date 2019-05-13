/*
    Author: Shelley Arnold
    Name: users-signup-validation.js
    Purpose: Grabs info from the database for taken usernames and email addresses
*/

<<<<<<< HEAD
import apiManager from "./users-apiManager"
=======
import usersAPImanager from "./users-apiManager"
>>>>>>> master


const checkDB = {
    getUserEmail: (email) => {
        let foundEmail = false;
<<<<<<< HEAD
        return apiManager.getAllUsers().then((users) => {
=======
        return usersAPImanager.getAllUsers().then((users) => {
>>>>>>> master
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
<<<<<<< HEAD
        return apiManager.getAllUsers().then((users) => {
=======
        return usersAPImanager.getAllUsers().then((users) => {
>>>>>>> master
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
<<<<<<< HEAD
        return apiManager.getAllUsers().then((users) => {
=======
        return usersAPImanager.getAllUsers().then((users) => {
>>>>>>> master
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