/*
    Author: Shelley Arnold
    Name: message-forum.js
    Purpose:
*/

const forumMessages = {
    buildForum: () => {
        return `
        <div class="row bootstrap snippets">
        <div class="col-md-6 col-md-offset-2 col-sm-12">
            <div class="comment-wrapper">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        Comment panel
                    </div>
                    <div class="panel-body">
                        <textarea class="form-control" placeholder="write a comment..." rows="3"></textarea>
                        <br>
                        <button type="button" class="btn btn-info pull-right">Post</button>
                        <div class="clearfix"></div>
                        <hr>
                        <ul class="media-list">
                            <li class="media">
                                <a href="#" class="pull-left">
                                    <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" class="img-circle">
                                </a>
                                <div class="media-body">
                                    <span class="text-muted pull-right">
                                        <small class="text-muted">30 min ago</small>
                                    </span>
                                    <strong class="text-success">@MartinoMont</strong>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Lorem ipsum dolor sit amet, <a href="#">#consecteturadipiscing </a>.
                                    </p>
                                </div>
                            </li>
                            <li class="media">
                                <a href="#" class="pull-left">
                                    <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle">
                                </a>
                                <div class="media-body">
                                    <span class="text-muted pull-right">
                                        <small class="text-muted">30 min ago</small>
                                    </span>
                                    <strong class="text-success">@LaurenceCorreil</strong>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Lorem ipsum dolor <a href="#">#ipsumdolor </a>adipiscing elit.
                                    </p>
                                </div>
                            </li>
                            <li class="media">
                                <a href="#" class="pull-left">
                                    <img src="https://bootdey.com/img/Content/user_3.jpg" alt="" class="img-circle">
                                </a>
                                <div class="media-body">
                                    <span class="text-muted pull-right">
                                        <small class="text-muted">30 min ago</small>
                                    </span>
                                    <strong class="text-success">@JohnNida</strong>
                                    <p>
                                        Lorem ipsum dolor <a href="#">#sitamet</a> sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        
            </div>
        </div>
        `
    },
    printToDOM: () => {
        const outEl = document.querySelector(".forum-main-output-container");
        let forumHTML = forumMessages.buildForum();
        outEl.innerHTML = forumHTML;
    }
}

export default forumMessages