/*
    Author: Shelley Arnold
    Name: friend-list.js
    Purpose: make it abundently clear you have no friends
*/


const userList = {
    buildUserList: () => {
        return `
        <figure class="w-100 text-center friend-figure-container figure">
            <img src="../images/sad.gif" class="friend-img-main figure-img img-fluid" alt="You have no friends">
            <figcaption class="figure-caption">You have no friends...</figcaption>
        </figure>
        `
    },
    printToDOM: () => {
        const outEl = document.querySelector(".friends-main-output-container");
        let userListHTML = userList.buildUserList();
        outEl.innerHTML = userListHTML;
    }
}

export default userList