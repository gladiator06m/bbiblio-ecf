// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modalBtn2 = document.querySelector(".modal-btn2");
const modal = document.querySelector(".modal-overlay");
const modal2 = document.querySelector(".modal-overlay2"); 

modalBtn.addEventListener("click", function () {
  const name = document.getElementById("name").value
  const mdp = document.getElementById("mdp").value
  const dupond = "dupond16881"
  const motdepasse = "Hkrakken1986"
  if ( name === dupond  && motdepasse === mdp ) {
    modal.style.display = "none"
    modal2.style.display = "grid"
  }
  else{
    alert("Identifiant ou mot de passe incorrect")
  }
 
});

modalBtn2.addEventListener("click", function () {
  const mdp3 = document.getElementById("mdp3").value
  const mdp2 = document.getElementById("mdp2").value
  if ( mdp3 === '' || mdp2 === '' ) {
    alert("Veuillez insérer un mot de passe")
    windows.open("../index.html")
  }
     
  if ( mdp3 === mdp2 ) {
    alert("Vérifiez votre Boite de reception ou Veuillez recommencer")
  }

  else{
    alert("- Les mots de passe ne sont pas identiques, vérifier que votre mot de passe comporte au moin 10 caractère, une majuscule et au moins un chiffre")
  }
});

