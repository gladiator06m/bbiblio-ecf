var image1 = document.getElementById("img1");
var image2 = document.getElementById("img2");
var image3 = document.getElementById("img3");
var image4 = document.getElementById("img4");
var jaquette = document.getElementById("jaquette2");
var score = document.querySelector(".titre2");
var score2 = document.querySelector(".titre3");
var amazon = document.querySelector(".button_cont");

image1.addEventListener("click", function () {
  jaquette.src = "../image/recompense/sl(9).jpg";
  score.style.display = "block";
  score2.style.display = "block";
  amazon.style.display = "block";
});

image2.addEventListener("click", function () {
  jaquette.src = "../image/recompense/sl(10).jpg";
  score.style.display = "block";
  score2.style.display = "block";
  amazon.style.display = "block";
});

image3.addEventListener("click", function () {
  jaquette.src = "../image/recompense/sl(11).jpg";
  score.style.display = "block";
  score2.style.display = "block";
  amazon.style.display = "block";
});

image4.addEventListener("click", function () {
  jaquette.src = "../image/recompense/sl(12).jpg";
  score.style.display = "block";
  score2.style.display = "block";
  amazon.style.display = "block";
});
