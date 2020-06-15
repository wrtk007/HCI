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

// Returns the signed-in user's display name.
function getUserName() {
 return firebase.auth().currentUser.displayName;
}

function getUserUid(){ //현재 로그인 한 유저의 uid 불러오기
  return firebase.auth().currentUser.uid;
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
return !!firebase.auth().currentUser;
}

// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
 if (user) { // User is signed in!
   // Get the signed-in user's profile pic and name.
   document.getElementById("userID").innerHTML = getUserName();
 } else { // User is signed out!
   location.href="/index.html";
 }
}

// sidebar menu toggle
$('.sidebarbtn').on('click', function(){
  //sidebarbtn color update
  $('.sidebarbtn').removeClass('on');
  $(this).addClass('on');

  //show the related content
  var idx = $('.sidebarbtn').index(this);
  $('.detail').hide(); //style="display:none"
  $('.detail').eq(idx).show();
  if (idx == 0){ //편지 읽기 상태에서 메뉴 바꿨을 때 메일함이 디폴트로 올 수 있게
    $('.lettercontent').hide();
    $('.mailbox').show();
  }
});

// Modal
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
}
// modal close
document.getElementById("letterclose").onclick = function() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  $(modal).children('.on').removeClass('on'); // 활성화된 modal content 삭제
};


// 1) Mailbox
// - Received Tab
// load letter
function getReceived() {
  var letters = document.getElementsByClassName("letter ");
  for (i=0; i< letters.length; i++){
    letters[i].onclick = function() {
      document.getElementById("myModal").style.display = "block";

      if ($(this).hasClass('new')){ //if it is a new letter, update as read
        $(this).removeClass(' new');
        $(this).addClass(' old');
        $(this).html('<i class="fas fa-envelope-open"></i>');
      }
    };
  }
}
getReceived();



// 2) Writing letter
// Saves a letter to Cloud Firestore database.
// Saves a letter to Cloud Firestore database.
function sendLetter() {
  // Add a new login info entry to the database.
  content= document.getElementById("txt").value;

  var t = new Date(+new Date()+(1000*60*60*9));

  if (content != "") {
    document.getElementById("txt").value = ""; //clear
    alert ("Letter has been sent");
    return firebase.firestore().collection('gamelist').doc("wQhqbpC51BWHdO3O3RdK").collection('letters').add({
      userID: getUserUid(),
      contents: content,
      read: false,
      timestamp:t.getUTCFullYear()+"."+ (t.getUTCMonth()+1) +"."+t.getUTCDate()+"   /   "+(t.getUTCHours())%24+":"+new Date().getUTCMinutes()
    }).catch(function(error) {
      console.error('Error writing new message to database', error);
    });
  }
  else {
    alert ("You cannot sent an empty letter");
  }
}
