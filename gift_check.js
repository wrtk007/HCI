//load gift
var gifts = document.getElementsByClassName("gift ");
for (i=0; i< gifts.length; i++){
  gifts[i].onclick = function() {
    document.getElementsByClassName("wrapper")[0].style.display = "none";
    document.getElementsByClassName("giftbox")[0].style.display = "none";
    document.getElementsByClassName("giftcontent")[0].style.display = "block";
  //  document.getElementById("letterdisplay").innerHTML = "편지내용";
    if ($(this).hasClass('new')){ //if it is a new gift, update as read
      $(this).removeClass('new');
      $(this).addClass('old');
      $(this).html('<i class="fas fa-box-open"></i>');
    }
  }
};

//load giftbox
document.getElementById("giftclose").onclick = function() {
  document.getElementsByClassName("giftcontent")[0].style.display = "none";
  document.getElementsByClassName("giftbox")[0].style.display = "grid";
  document.getElementsByClassName("wrapper")[0].style.display = "block";
};


