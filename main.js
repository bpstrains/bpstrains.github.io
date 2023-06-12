function isLoggedIn() {
    var hash = "b17b49f2a7b26a487e88c2a483ab9443";
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf("loggedIn=") == 0) {
        return cookie.substring("loggedIn=".length, cookie.length) == hash;
      }
    }
    return false;
  }
  
  if (isLoggedIn()) {
    // User is logged in
  } else {
    window.location.href = "/login.html";
    // User is not logged in
  }