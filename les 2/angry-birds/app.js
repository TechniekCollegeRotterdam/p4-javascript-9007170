//Oefening angry-birds
//.is voor class
//#is voor id
// niks is voor html-tags
//de image ophaald uit de html 
const bird = document.querySelector(".bird");
let px = 0;

bird.addEventListener("click", function(){
    //elke keer als ik op de bird klik, word er 50 opgeteld. 
    px = px + 50;
    //voeg styling toe aan je bird class met als property 
    // left : 50px
    bird.style.left = px + "px";
})