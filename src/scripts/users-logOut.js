/*
    Author: Shelley Arnold
    Name: users-logOut.js
    Purpose: Logout and clear session storage
*/

const usersLogOut = () => {
    document.querySelector(".logout-button-main").addEventListener("click", () => {
        sessionStorage.setItem("user", null);
        window.location.reload()
    })
}

export default usersLogOut