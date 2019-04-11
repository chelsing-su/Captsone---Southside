function myFunction() {
    var breakPoint = document.getElementById("breakPoint");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (breakPoint.style.display === "none") {
      breakPoint.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      breakPoint.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
}