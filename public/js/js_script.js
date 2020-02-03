function menuItem(name, kCal, allergies, pathToImage) {
  this.name = name;
  this.kCal = kCal;
  this.allergies = allergies;
  this.pathToImage = pathToImage;
}

function returnNameAndkCal(item){
  return item.name + " " + item.kCal;
}

let theSaucyBurger = new menuItem("The saucy burger", "500 kCal", true, "");
console.log(returnNameAndkCal(theSaucyBurger));

let theGoodBurger = new menuItem("The good burger", "400 kCal", true, "");
console.log(returnNameAndkCal(theGoodBurger));

let theTTTBurger = new menuItem("The TTT burger", "350 kCal", true, "");
console.log(returnNameAndkCal(theTTTBurger));

let LivsSpecialBurger = new menuItem("Liv's special burger", "450 kCal", true, "");
console.log(returnNameAndkCal(LivsSpecialBurger));

let theStrangeBurger = new menuItem("The strange burger", "420 kCal", true, "");
console.log(returnNameAndkCal(theStrangeBurger));
