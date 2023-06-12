function isLoggedIn() {
    var hash = "e8758b6eafe2002eff11fafe3673d0c4";
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