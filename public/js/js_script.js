function menuItem(name, kCal, allergies, pathToImage) {
  this.name = name;
  this.kCal = kCal;
  this.allergies = allergies;
  this.pathToImage = pathToImage;

  this.returnNameAndkCal = function() {
        return this.name + ' ' + this.kCal;
    };

  function returnNameAndkCal(){
    return this.name + " " + this.kCal;
  }
}

let theSaucyBurger = new menuItem("The saucy burger", "500 kCal", true, "");

let Id = document.getElementById("myID");
let saucyBurger = document.createElement('h3');
let goodBurger = document.createElement('h3');
let tTTBurger = document.createElement('h3');
let livsBurger = document.createElement('h3');
let strangeBurger = document.createElement('h3');

saucyBurger.innerHTML = "The Saucy Burger";
goodBurger.innerHTML = "The Good Burger";
tTTBurger.innerHTML = "The TTT Burger";
livsBurger.innerHTML = "Liv's Special Burger";
strangeBurger.innerHTML = "The Strange Burger";

Id.appendChild(saucyBurger);
Id.appendChild(goodBurger);
Id.appendChild(tTTBurger);
Id.appendChild(livsBurger);
Id.appendChild(strangeBurger);

console.log(theSaucyBurger.returnNameAndkCal());

let theGoodBurger = new menuItem("The good burger", "400 kCal", true, "");
console.log(theGoodBurger.returnNameAndkCal());

let theTTTBurger = new menuItem("The TTT burger", "350 kCal", true, "");
console.log(theTTTBurger.returnNameAndkCal());

let livsSpecialBurger = new menuItem("Liv's special burger", "450 kCal", true, "");

console.log(livsSpecialBurger.returnNameAndkCal());

let theStrangeBurger = new menuItem("The strange burger", "420 kCal", true, "");
console.log(theStrangeBurger.returnNameAndkCal());
