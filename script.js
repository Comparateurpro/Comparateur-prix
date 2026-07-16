function rechercher(){

let recherche=document
.getElementById("search")
.value
.toLowerCase();

let cartes=document
.querySelectorAll(".card");

cartes.forEach(function(card){

let titre=card.innerText.toLowerCase();

if(titre.includes(recherche)){
card.style.display="block";
}else{
card.style.display="none";
}

});

}
