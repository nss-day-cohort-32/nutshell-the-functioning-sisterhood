/*
    Author: Shelley Arnold
    Name: users-feed.js
    Purpose: Display a collection of a user's information
*/

import usersAPImanager from "./users-apiManager"
import loginMethods from "./users-login"

const userFeed = {
    buildUserFeed: () => {
        return `
        <!-- Page Content -->
        <div class="container">

            <!-- Heading Row -->
            <div class="row align-items-center my-5">
            <div class="col-lg-4">
                <img class="img-fluid rounded mb-4 mb-lg-0" <img class="user-nut-img" src="../images/nuts.jpg" alt="friends">
            </div>
            <!-- /.col-lg-7 -->
            <div class="col-lg-5">
                <h1 class="font-weight-light">Welcome back ${loginMethods.getLoggedInUser().firstName}</h1>
                <h5 class="quote-output"></h5>
            </div>
            <!-- /.col-md-4 -->
            </div>
            <!-- /.row -->

            <!-- Call to Action Well -->
            <div class="card text-white bg-secondary my-5 py-2 text-center">
            <div class="card-body">
                <p class="text-white m-0">Here's what you were working on last...</p>
            </div>
        </div>

        <!-- Page Features -->
        <div class="row text-center">
    
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <img class="card-img-top" src="../images/friends.jpg" alt="">
              <div class="card-body">
                <h4 class="card-title">Friend Card</h4>
                <p class="card-text">Friend username maybe?</p>
              </div>
              <div class="card-footer">
                <a href="#" class="btn btn-outline-secondary">Find Out More!</a>
              </div>
            </div>
          </div>
    
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <img class="card-img-top" src="../images/news.jpg" alt="">
              <div class="card-body">
                <h4 class="card-title">News Card</h4>
                <p class="card-text">News description</p>
              </div>
              <div class="card-footer">
                <a href="#" class="btn btn-outline-secondary">Find Out More!</a>
              </div>
            </div>
          </div>
    
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <img class="card-img-top" src="../images/tasks.jpg" alt="">
              <div class="card-body">
                <h4 class="card-title">Tasks Card</h4>
                <p class="card-text">Task text content</p>
              </div>
              <div class="card-footer">
                <a href="#" class="btn btn-outline-secondary">Find Out More!</a>
              </div>
            </div>
          </div>
    
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100">
              <img class="card-img-top" src="../images/events.jpg" alt="">
              <div class="card-body">
                <h4 class="card-title">Events Card</h4>
                <p class="card-text">Event description</p>
              </div>
              <div class="card-footer">
                <a href="#" class="btn btn-outline-secondary">Find Out More!</a>
              </div>
            </div>
          </div>
    
        </div>
        <!-- /.row -->
    
      </div>
      <!-- /.container -->
    `
    },
    printToDOM: () => {
        const outEl = document.querySelector(".users-main-output-container");
        let userFeedHTML = userFeed.buildUserFeed();
        outEl.innerHTML = userFeedHTML;
        userFeed.buildQuote();
    },
    buildQuote: () =>  {
        let quoteHtml = "";
        usersAPImanager.getQuote()
        .then((quote) => {
        let quoteEl = document.querySelector(".quote-output");
           quoteHtml = ` 
           Kayne West says, "${quote.quote}"
           `;
          quoteEl.textContent = quoteHtml;
       })
    }
}

export default userFeed