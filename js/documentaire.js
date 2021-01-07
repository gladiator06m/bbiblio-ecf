// DOCUMENTAIRE

var image9 = document.getElementById("img9")
var image10 = document.getElementById("img10")
var image11 = document.getElementById("img11")
var image12 = document.getElementById("img12")
var jaquette = document.getElementById("jaquette2")
var score = document.querySelector(".score")
var amazon = document.querySelector(".button_cont");
var amazon2 = document.querySelector(".button_cont2");

image9.addEventListener("click", function () {                    
    jaquette.src = "../image/sl8.jpg" 
    score.style.display = "block"
    amazon.style.display = "block";
    amazon2.style.display = "block";
})

image10.addEventListener("click", function () {                    
    jaquette.src = "../image/sl9.jpg" 
    score.style.display = "block"
    amazon.style.display = "block";
    amazon2.style.display = "block";
})

image11.addEventListener("click", function () {                    
    jaquette.src = "../image/sl10.jpg" 
    score.style.display = "block"
    amazon.style.display = "block";
    amazon2.style.display = "block";
})

image12.addEventListener("click", function () {                    
    jaquette.src = "../image/sl11.jpg" 
    score.style.display = "block"
    amazon.style.display = "block";
    amazon2.style.display = "block";
})

// SOMME ET CALCUL

var envoyez = document.querySelector(".example_a")

var ratings = {
    style: 4,
    illustration: 3,
    page: 2,
    emotion: 3,
    final: 0
  }

  // Total Stars
  const starsTotal = 10;

  // Run getRatings when DOM loads
  document.addEventListener('DOMContentLoaded', getRatings);

  // Form Elements
  const productSelect = document.getElementById('product-select');
  const ratingControl = document.getElementById('rating-control');

  // Init product
  let product;

  // Product select change
  productSelect.addEventListener('change',(e) => {
    product = e.target.value;
    // Enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
  });

  // Rating control change
  ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;

    // Make sure 5 or under
    if (rating > 10) {
      alert('Veuillez attribuer une note de 1 à 10');
      return;
    }

    // Change rating
    ratings[product] = rating;

    getRatings();
    
  });

  // Get ratings
  function getRatings() {
    for (let rating in ratings) {
      // Get percentage
      const starPercentage = (ratings[rating] / starsTotal) * 100;

      // Round to nearest 10
      const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

      // Set width of stars-inner to percentage
      document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
     
     // Add number rating
      document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];

    } 
  }


  // BOUTON NOTEZ 
  envoyez.addEventListener("click", function(){
    var resultat = document.getElementById("resultat")
    var numero = document.querySelector(".num")
    var etoile = document.querySelector(".starsis")
    ratingtotal = (Number(ratings.style) + Number(ratings.illustration) + Number(ratings.page) + Number(ratings.emotion))
    ratingtotal2 = ratingtotal / 4
    numero.innerHTML = ratingtotal2
    etoile.style.width = ratingtotal2 * 10 + "%"
    resultat.innerHTML = "Vous avez attribué la note de " + ratingtotal2 + " à cette Oeuvre, merci de votre contribution"
})
