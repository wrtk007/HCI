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

// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
 if (user) { // User is signed in!
   // Get the signed-in user's profile pic and name.
   var url = getProfilePicUrl();

   document.getElementById("userpic").setAttribute("src", url);
   document.getElementById("userpic2").setAttribute("src", url);
   document.getElementById("userpic3").setAttribute("src", url);
   document.getElementById("userpic4").setAttribute("src", url);
   document.getElementById("userID").innerHTML = getUserName();
   document.getElementById("userID2").innerHTML = getUserName();
   document.getElementById("userID3").innerHTML = getUserName();
   document.getElementById("userID4").innerHTML = getUserName();
   document.getElementById("userID5").innerHTML = getUserName();

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
    if (idx == 0){
      $('.manitomain').show();
      $('.guesswindow').hide();
    }
  });

$('#guessingbutton').on('click', function(){
    if($(this).hasClass('guessbtn posi')){
        document.getElementsByClassName("manitomain")[0].style.display = "none";
        document.getElementsByClassName("guesswindow")[0].style.display = "block";
    }

});

$('#guesswindowclose').on('click', function(){
    document.getElementsByClassName("guesswindow")[0].style.display = "none";
    document.getElementsByClassName("manitomain")[0].style.display = "block";
});


$('#guessuserbutton1').on('click',function(){
    const result = confirm('Would you choose this one as Manito?');
    if(result){
        var photo_html = $('#guessprofile1').html();
        $('#manitoprofile').removeClass(' empty');
        $('#manitoprofile').html(photo_html);
        $('#guessingbutton').removeClass(' posi');
        $('#guessingbutton').addClass(' nega');
        document.getElementsByClassName("guesswindow")[0].style.display = "none";
        document.getElementsByClassName("manitomain")[0].style.display = "block";
    }
    else{

    }

});

$('#guessuserbutton2').on('click',function(){
    const result = confirm('Would you choose this one as Manito?');
    if(result){
        var photo_html = $('#guessprofile2').html();
        $('#manitoprofile').removeClass(' empty');
        $('#manitoprofile').html(photo_html);
        $('#guessingbutton').removeClass(' posi');
        $('#guessingbutton').addClass(' nega');
        document.getElementsByClassName("guesswindow")[0].style.display = "none";
        document.getElementsByClassName("manitomain")[0].style.display = "block";
    }
    else{

    }

});
$('#guessuserbutton3').on('click',function(){
    const result = confirm('Would you choose this one as Manito?');
    if(result){
        var photo_html = $('#guessprofile3').html();
        $('#manitoprofile').removeClass(' empty');
        $('#manitoprofile').html(photo_html);
        $('#guessingbutton').removeClass(' posi');
        $('#guessingbutton').addClass(' nega');
        document.getElementsByClassName("guesswindow")[0].style.display = "none";
        document.getElementsByClassName("manitomain")[0].style.display = "block";
    }
    else{

    }

});
