$(function(){
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    $('html, body').animate({scrollTop: dn}, 1000);
  });
});



menu.onclick = function myFunction(){
  var x = document.getElementById('myTopnav');

  if (x.className === "topnav") {
    x.className += " responsive";
  }
  else{
    x.className = "topnav";
  }
}
