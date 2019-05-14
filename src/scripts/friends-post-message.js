import forumMessages from "./message-forum"
import usersAPImanager from "./users-apiManager"
import loginMethods from "./users-login"

const messageHandler = {
    postNewMessageToDB: () => {
        let newMessage = document.querySelector(".message-input")
        if(newMessage.value !== ""){
            usersAPImanager.makeMessage({
                userId:loginMethods.getLoggedInUser().id,
                message: newMessage.value
            }).then(() => {
                messageHandler.postAllMessageDOM()
            })
        }
        newMessage.value = ""
    },
    postAllMessageDOM: () => {
        let outEl = document.querySelector(".forum-bottom-output-container");
        outEl.innerHTML = "";
        usersAPImanager.getAllMessages().then(messages => {
            messages.sort(function ( a, b ) { return b.id - a.id; }).forEach(message => {
                usersAPImanager.getOneUser(message.userId).then(user => {
                    let buildAllForum = forumMessages.buildForum(user.userName, message.message)
                    outEl.innerHTML += buildAllForum
                })
            })
        })
    }
}

export default messageHandler