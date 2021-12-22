//?Exo1.1
let firstVariable = "Nyange"
console.log(firstVariable);

//?Exo1.2
let empty = []
console.log(empty);

//?Exo1.3
empty = ["MOI", 25]
console.log(empty);

//?Exo1.4
let nothing = null
let blank;
console.log(nothing, blank);

//?Exo2
let variable1 = "string"
let variable2 =  365
let variable3 =  true
console.log(variable1, variable2, variable3);
console.log(typeof(variable1));
console.log(typeof(variable2));
console.log(typeof(variable3));

//?Exo2.1
let pays = "Burundi"
let capitale = "Bujumbura"
let maPhrase = capitale + " est la capitale du pays: " + pays
console.log(maPhrase);

//?Exo2.2
let maPhraseNew = `${capitale} est la capitale du pays: ${pays}`
console.log(maPhraseNew);

//?Exo2.3
let agemoi = 25
let amis = ["Marouane", " Ismail", " Hédi"]
let lieux = "Molengeek"
let fun = true
let sentence = `Je m'appelle ${firstVariable} et j'ai ${agemoi} ans. Je suis à ${lieux}, avec ${amis} et on s'amuse tous bien. On crie "${fun}"`
console.log(sentence);

//?Exo2.4
let sept = 7
let septbis = "7"
// console.log(sept = septbis);
// j'ai du mettre en commentaire parce que sinon la valeur de sept était réattribué. Et donc le === était true alors qu'il deevait être false
console.log(sept == septbis);
console.log(sept === septbis);

//?Exo2.5
let cinq = 5
let cinqbis = "5"
console.log(cinq + cinqbis);
cinqbis = cinq //j'aurai pu faire cinqbis = 5 mais comme c'était la même valeur que cinq, j'ai fait comme ça
console.log(cinq + cinqbis);

//?Exo3
var prenom = "Nyange"
let age = 25
// const nom = "Lambrette"
// console.log(prenom, age, nom);
//?Exo3.1
var prenom =  "Alixe"
// let age = 90
console.log(prenom, age);

//?Exo3.2
const nom = "Rodriguez"
console.log(nom);

//?Exo3.3
if (true) {
    let maison = "Buja"
    var appart = "Bxl"
    console.log(maison, appart);
}
let maison = "Andenne"
var appart = "De Panne"
console.log(maison, appart);
