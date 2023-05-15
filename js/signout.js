  function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
    document.getElementById("user-name").innerHTML = "";
    document.querySelector(".g-signin2").style.display = "block";
  });
  }
