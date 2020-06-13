initFirebaseAuth();
// Initiate firebase auth.
function initFirebaseAuth() {
 firebase.auth().onAuthStateChanged(authStateObserver);
}

var signOutButtonElement = document.getElementById('logoutbtn');
function signOut() {
 // Sign out of Firebase.
 firebase.auth().signOut();
}
signOutButtonElement.addEventListener('click', signOut);

function getProfilePicUrl() {
 return firebase.auth().currentUser.photoURL;
}

// Returns the signed-in user's display name.
function getUserName() {
 return firebase.auth().currentUser.displayName;
}


// Returns true if a user is signed-in.
function isUserSignedIn() {
return !!firebase.auth().currentUser;
}

// Adds a size to Google Profile pics URLs.
function addSizeToGoogleProfilePic(url) {
 if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
   return url + '?sz=50';
 }
 return url;
}

// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
 if (user) { // User is signed in!
   // Get the signed-in user's profile pic and name.
 //  var profilePicUrl = getProfilePicUrl();
 //  var url = addSizeToGoogleProfilePic(profilePicUrl);

 //  document.getElementById("userpic").setAttribute("src", url);
   document.getElementById("userID").innerHTML = getUserName();

 } else { // User is signed out!
   location.href="/index.html";
 }
}
