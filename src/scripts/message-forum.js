/*
    Author: Shelley Arnold
    Name: message-forum.js
    Purpose:
*/

const forumMessages = {
    buildForum: () => {
        return `
       
        `
    },
    printToDOM: () => {
        const outEl = document.querySelector(".forum-main-output-container");
        let forumHTML = forumMessages.buildForum();
        outEl.innerHTML = forumHTML;
    }
}

export default forumMessages