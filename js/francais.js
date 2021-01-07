// ROMAN FRANCAIS
var image1 = document.getElementById("img1")
var image2 = document.getElementById("img2")
var image3 = document.getElementById("img3")
var image4 = document.getElementById("img4")
var jaquette = document.getElementById("jaquette2")
var score = document.querySelector(".score")
var amazon = document.querySelector(".button_cont");
var amazon2 = document.querySelector(".button_cont2");

image1.addEventListener("click", function () {                    
    jaquette.src = "../image/sl0.jpg" 
    score.style.display = "block"
    amazon.style.display = "block";
    amazon2.style.display = "block";
})

image2.addEventListener("click", function () {                    
    jaquette.src = "../image/sl1.jpg" 
    score.style.display = "block"
    amazon.style.display = "block";
    amazon2.style.display = "block";
})

image3.addEventListener("click", function () {                    
    jaquette.src = "../image/sl2.jpg" 
    score.style.display = "block"
    amazon.style.display = "block";
    amazon2.style.display = "block";
})

image4.addEventListener("click", function () {                    
    jaquette.src = "../image/sl3.jpg" 
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



 
  
 

  


  


      

    







































// function ratingStar2(event){
//     var checkValue = document.querySelectorAll("input");
//     var checkStar = document.querySelectorAll("label");
//     var checkSmiley = document.querySelectorAll("i");
//     var checkCount = 0;
//     for(var i=0; i<checkValue.length; i++){
//         if(checkValue[i]==event.target){
//             checkCount = i+1;
//         }
//     }
//     for(var j=0; j<checkCount; j++){
//         checkValue[j].checked = true;
//         checkStar[j].className = "rated";
//         checkSmiley[j].style.display = "none";
//     }
    
// }

// function ratingStar3(event){
//     var checkValue = document.querySelectorAll("input");
//     var checkStar = document.querySelectorAll("label");
//     var checkSmiley = document.querySelectorAll("i");
//     var checkCount = 0;
//     for(var i=0; i<checkValue.length; i++){
//         if(checkValue[i]==event.target){
//             checkCount = i+1;
//         }
//     }
//     for(var j=0; j<checkCount; j++){
//         checkValue[j].checked = true;
//         checkStar[j].className = "rated";
//         checkSmiley[j].style.display = "none";
//     }
    
// }

// function ratingStar4(event){
//     var checkValue = document.querySelectorAll("input");
//     var checkStar = document.querySelectorAll("label");
//     var checkSmiley = document.querySelectorAll("i");
//     var checkCount = 0;
//     for(var i=0; i<checkValue.length; i++){
//         if(checkValue[i]==event.target){
//             checkCount = i+1;
//         }
//     }
//     for(var j=0; j<checkCount; j++){
//         checkValue[j].checked = true;
//         checkStar[j].className = "rated";
//         checkSmiley[j].style.display = "none";
//     }
    
// }

// function ratingStar5(event){
//     var checkValue = document.querySelectorAll("input");
//     var checkStar = document.querySelectorAll("label");
//     var checkSmiley = document.querySelectorAll("i");
//     var checkCount = 0;
//     for(var i=0; i<checkValue.length; i++){
//         if(checkValue[i]==event.target){
//             checkCount = i+1;
//         }
//     }
//     for(var j=0; j<checkCount; j++){
//         checkValue[j].checked = true;
//         checkStar[j].className = "rated";
//         checkSmiley[j].style.display = "none";
//     }
    
// }

