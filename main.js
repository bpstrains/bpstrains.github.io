let users = [];
fetch('https://bpscdn.pages.dev/users.json')
  .then(response => response.json())
  .then(data => {
    users = data;
    var loggedInValues = checkLoggedIn();
    if (loggedInValues.some(value => users.some(user => user.hash === value))) {
      // User is logged in
    } else {
      deleteCookie()
      window.location.href = "/login/";
    }
  })
    .catch(error => {
      // something
  });

function checkLoggedIn() {
  var cookie = document.cookie;
  var loggedInValues = [];
  if (cookie.includes("loggedIn")) {
    var cookieArray = cookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
      var cookieItem = cookieArray[i].trim();
      if (cookieItem.indexOf("loggedIn=") == 0) {
        loggedInValues.push(cookieItem.substring("loggedIn=".length, cookieItem.length));
      }
    }
  }
  return loggedInValues;
}
const activityCheckInterval = 1200000;

let isUserActive = true; // Assume user is initially active

// Function to check if the user is active
function checkUserActivity() {
  isUserActive = true; // Set user as active when this function is called
}

// Function to refresh the page
function refreshPage() {
  if (navigator.onLine && !isUserActive) {
    location.reload(); // Reload the page when user is not active and connected to the internet
  } else {
    isUserActive = false; // Reset user activity status
  }
}

// Event listeners for user activity
document.addEventListener("mousemove", checkUserActivity);
document.addEventListener("keydown", checkUserActivity);

// Start checking user activity at a specified interval
setInterval(refreshPage, activityCheckInterval);
function deleteCookie() {
  document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}