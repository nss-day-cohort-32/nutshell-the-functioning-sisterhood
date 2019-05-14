/*
    Author: Shelley Arnold
    Name: message-forum.js
    Purpose: read and post messages
*/
import messageHandler from "./friends-post-message"

const forumMessages = {
    buildMessagePost: () => {
        return `
        <div class="justify-content-center row bootstrap snippets forum-main-container-div">
        <div class="col-md-6 col-md-offset-2 col-sm-12">
            <div class="comment-wrapper">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        Post a new message
                    </div>
                    <div class="panel-body">
                        <textarea class="form-control message-input" placeholder="write a comment..." rows="3"></textarea>
                        <br>
                        <button type="button" class="post-message-button btn btn-outline-secondary float-right">Post</button>
                        <div class="clearfix"></div>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
        </div>
        `
    },
    buildForum: (userName, message) => {
        return `
        <div class='justify-content-center row'>
        <ul class="forum-secondary-container col-md-offset-2 col-md-6 media-list">
            <li class="media">
                <a href="#" class="pull-left">
                    <img height="42" width="42" src="../images/user.jpg" alt="" class="img-circle">
                </a>
                <div class="media-body">
                    <strong class="text-success">@${userName}</strong>
                    <p>
                        ${message}.
                    </p>
                </div>
            </li>
        </ul>
        </div>
        `
    },
    printToDOM: () => {
        const topEl = document.querySelector(".forum-top-output-container");
        const bottomEl = document.querySelector(".forum-bottom-output-container");
        let postHTML = forumMessages.buildMessagePost();
        let forumHTML = forumMessages.buildForum();
        topEl.innerHTML = postHTML;
        bottomEl.innerHTML = forumHTML;
        document.querySelector(".post-message-button").addEventListener("click", () => {
            messageHandler.postNewMessageToDB();
        })
        messageHandler.postAllMessageDOM()
    }
}

export default forumMessages