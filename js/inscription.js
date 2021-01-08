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

modalBtn2.addEventListener("click", function (e) {
  const mdp3 = document.getElementById("mdp3").value
  const mdp2 = document.getElementById("mdp2").value

  if (mdp2 == '') 
    alert ("Les mots de passe ne sont pas identiques, vérifier que votre mot de passe comporte au moin 10 caractère, une majuscule et au moins un chiffre"); 
                      
  else if (mdp3 == '') 
    alert ("Veuillez confirmer mot de passe"); 
                      
  else if (mdp2 != mdp3) { 
    alert ("\nLes mots de passe ne sont pas identique veuillez recommencer...") 
    return false; 
    } 
  
  else{ 
    alert("Félicitation, votre compte a bien été créer") 
    return true; 
    } 
    e.preventDefault()
});

