function isLoggedIn() {
    var hash = "a11b0f4ee42a8e6f7c5d001a68c1f2a5";
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
// Refresh Rate is how often you want to refresh the page 
// bassed off the user inactivity. 
var refresh_rate = 60; //<-- In seconds, change to your needs
var last_user_action = 0;
var has_focus = false;
var lost_focus_count = 0;
// If the user loses focus on the browser to many times 
// we want to refresh anyway even if they are typing. 
// This is so we don't get the browser locked into 
// a state where the refresh never happens.    
var focus_margin = 10; 

// Reset the Timer on users last action
function reset() {
    last_user_action = 0;
    console.log("Reset");
}

function windowHasFocus() {
    has_focus = true;
}

function windowLostFocus() {
    has_focus = false;
    lost_focus_count++;
    console.log(lost_focus_count + " <~ Lost Focus");
}

// Count Down that executes ever second
setInterval(function () {
    last_user_action++;
    refreshCheck();
}, 1000);

// The code that checks if the window needs to reload
function refreshCheck() {
    var focus = window.onfocus;
    if ((last_user_action >= refresh_rate && !has_focus && document.readyState == "complete") || lost_focus_count > focus_margin) {
        window.location.reload(); // If this is called no reset is needed
        reset(); // We want to reset just to make sure the location reload is not called.
    }

}
window.addEventListener("focus", windowHasFocus, false);
window.addEventListener("blur", windowLostFocus, false);
window.addEventListener("click", reset, false);
window.addEventListener("mousemove", reset, false);
window.addEventListener("keypress", reset, false);
window.addEventListener("scroll", reset, false);
document.addEventListener("touchMove", reset, false);
document.addEventListener("touchEnd", reset, false);