/*
    Author: Shelley Arnold
    Name: friend-list.js
    Purpose:
*/


const userList = {
    buildUserList: () => {
        return `
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="people-nearby">
                    <div class="nearby-user">
                        <div class="row">
                        <div class="col-md-2 col-sm-2">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user" class="profile-photo-lg">
                        </div>
                        <div class="col-md-7 col-sm-7">
                            <h5><a href="#" class="profile-link">User First Name from all api call</a></h5>
                            <p>User username from all api call</p>
                        </div>
                        <div class="col-md-3 col-sm-3">
                            <button class="btn btn-outline-primary pull-right">Add Friend</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        `
    },
    printToDOM: () => {
        const outEl = document.querySelector(".friends-main-output-container");
        let userListHTML = userList.buildUserList();
        outEl.innerHTML = userListHTML;
    }
}

export default userList