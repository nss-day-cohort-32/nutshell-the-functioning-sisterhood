/*
    Author: Shelley Arnold
    Name: users-feed-quoteDOMjs
    Purpose: Build quote for user feed
*/

import usersAPImanagerapiManager from "./users-apiManager"

buildQuote = () =>  {
    let quoteEl = document.querySelector(".quote-output");
    let quoteHtml = "";
    usersAPImanager.getQuote()
    .then((quote) => {
       quoteHtml = ` 
       <p> ${quote.quote}</p>
       `;
      quoteEl.innerHtml = quoteHtml;
   })
}

export default buildQuote