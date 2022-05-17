// aanmaken LEGE variabele

let name;
let country;
let p = document.getElementById("output");

const nameChanged = function(event){
    // het event loggen in het console 
    name = event.target.value;
    changeInput();
}

// een functie werkt pas als je het oproept 
const countryChange = function(event){
    country = event.target.value;
    changeInput();
}

const changeInput = function(){
    const text = `Je heet ${name} en je komt uit ${country}`;     
    p.textContent = text;
}
 