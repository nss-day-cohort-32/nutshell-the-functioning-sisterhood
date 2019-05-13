/*
    Author: Shelley Arnold
    Name: users-apiManager.js
    Purpose: Fetch calls to access the database
*/

const apiBaseURL = "http://localhost:8088"

const usersAPImanager = {
    getAllUsers: () => {
        return fetch(`${apiBaseURL}/users`)
          .then(response => response.json())
        //   .then(parsedResult => {
        //     console.log("All users", parsedResult);
        //     });
    },
    getOneUser: (userId) => {
        return fetch(`${apiBaseURL}/users/${userId}`)
            .then(response => response.json())
            //.then(parsedResult => {
            //console.log("one user", parsedResult);
            //});
    },
    updateUser: (userId, userObj) => {
        return fetch (`${apiBaseURL}/users/${userId}`,
            {
                method:"PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(userObj)
            })
        .then(response => response.json())
        .then(parsedResult => {
            console.log("updated user", parsedResult);
            })
    },
    makeUser: (userObj) => {
        return fetch(`${apiBaseURL}/users/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userObj)
            })
        .then(response => response.json())
        .then(parsedResult => {
            console.log("new user", parsedResult);
            });
    },
    deleteContact: (userId) => {
      return fetch(`${apiBaseURL}/user/${userId}`,
        {
            method: "DELETE"
        })
    },
    getQuote: () => {
        return fetch("https://api.kanye.rest/")
        .then(response => response.json());
        }
}

export default usersAPImanager
