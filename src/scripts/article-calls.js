const apibaseUrl = "http://localhost:8088/news";

const API = {
  getAllArticles: function() {
    return fetch(apibaseUrl).then(results => results.json());
  },
  getOneArticle: function(articleId) {
    return fetch(`${apibaseUrl}/${articleId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json());
  },
  saveArticle: function(articleObject) {
    return fetch(`${apibaseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(articleObject)
    }).then(response => response.json());
  },
  deleteArticle: function(articleId) {
    return fetch(`${apibaseUrl}/${articleId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json());
  },
  editArticle: function(articleId, articleObject) {
    return fetch(`${apibaseUrl}/${articleId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(articleObject)
    }).then(response => response.json());
  }
};

export default API