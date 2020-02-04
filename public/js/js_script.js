/*function menuItem(name, kCal, allergies, pathToImage) {
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

let theSaucyBurger = new menuItem("The saucy burger", "500 kCal", true, "");*/

/*let Id = document.getElementById("myID");
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
Id.appendChild(strangeBurger);*/

/*
console.log(theSaucyBurger.returnNameAndkCal());

let theGoodBurger = new menuItem("The good burger", "400 kCal", true, "");
console.log(theGoodBurger.returnNameAndkCal());

let theTTTBurger = new menuItem("The TTT burger", "350 kCal", true, "");
console.log(theTTTBurger.returnNameAndkCal());

let livsSpecialBurger = new menuItem("Liv's special burger", "450 kCal", true, "");

console.log(livsSpecialBurger.returnNameAndkCal());

let theStrangeBurger = new menuItem("The strange burger", "420 kCal", true, "");
console.log(theStrangeBurger.returnNameAndkCal());*/


/*
let myElement1 = document.getElementById("burger1");
let myImage1 = document.createElement("img");
let myHeader1 = document.createElement("p");
let headerText1 = document.createTextNode("The Saucy Burger");
myHeader1.appendChild(headerText1);
myImage1.src = "https://media-cdn.tripadvisor.com/media/photo-s/0b/32/be/36/saucy-burger.jpg";
myImage1.width = 300;

let myInfo1 = document.createElement("ul");
let listElem1 = document.createElement("li")
let text1 = document.createTextNode("The meat is imported from the great madagascar");
listElem1.appendChild(text1);
let listElem2 = document.createElement("li")
let text2 = document.createTextNode("The sauce is a great mayo");
listElem2.appendChild(text2);
let listElem3 = document.createElement("li")
let text3 = document.createTextNode("Allergies: gluten, lactose");
listElem3.appendChild(text3);
myInfo1.appendChild(listElem1);
myInfo1.appendChild(listElem2);
myInfo1.appendChild(listElem3);

myElement1.appendChild(myHeader1);
myElement1.appendChild(myImage1);
myElement1.appendChild(myInfo1);




let myElement2 = document.getElementById("burger2");
let myImage2 = document.createElement("img");
let myHeader2 = document.createElement("p");
let headerText2 = document.createTextNode("The Saucy Burger");
myHeader2.appendChild(headerText2);
myImage2.src = "https://assets.bonappetit.com/photos/57acae2d1b33404414975121/master/pass/ultimate-veggie-burger.jpg";
myImage2.width = 300;

let myInfo2 = document.createElement("ul");
let listElem11 = document.createElement("li")
let text11 = document.createTextNode("The meat is imported from the great madagascar");
listElem11.appendChild(text11);
let listElem22 = document.createElement("li")
let text22 = document.createTextNode("The sauce is a great mayo");
listElem22.appendChild(text22);
let listElem33 = document.createElement("li")
let text33 = document.createTextNode("Allergies: gluten, lactose");
listElem33.appendChild(text3);
myInfo2.appendChild(listElem11);
myInfo2.appendChild(listElem22);
myInfo2.appendChild(listElem33);

myElement2.appendChild(myHeader2);
myElement2.appendChild(myImage2);
myElement2.appendChild(myInfo2);

let myElement3 = document.getElementById("burger3");
let myImage3 = document.createElement("img");
let myHeader3 = document.createElement("p");
let headerText3 = document.createTextNode("The Saucy Burger");
myHeader3.appendChild(headerText3);
myImage3.src = "https://images.kitchenstories.io/recipeImages/RP04_24_05_halloumiBurger_TitlePicture.jpg";
myImage3.width = 300;

let myInfo3 = document.createElement("ul");
let listElem111 = document.createElement("li")
let text111 = document.createTextNode("The meat is imported from the great madagascar");
listElem111.appendChild(text111);
let listElem222 = document.createElement("li")
let text222 = document.createTextNode("The sauce is a great mayo");
listElem222.appendChild(text222);
let listElem333 = document.createElement("li")
let text333 = document.createTextNode("Allergies: gluten, lactose");
listElem333.appendChild(text333);
myInfo3.appendChild(listElem111);
myInfo3.appendChild(listElem222);
myInfo3.appendChild(listElem333);

myElement3.appendChild(myHeader3);
myElement3.appendChild(myImage3);
myElement3.appendChild(myInfo3);*/



/*let menu = [theSaucyBurger, theGoodBurger, theTTTBurger, livsSpecialBurger, theStrangeBurger]

let myElement = document.getElementById("myID");
for (let i = 0 ; i< menu.length ; i++)
{
        let listItem = document.createElement("li");
        let listValue = document.createTextNode(menu[i].name);
        listItem.appendChild(listValue);
        myElement.appendChild(listItem);

     if (menu[i].allergies != false){
      let listItem = document.createElement("span");
        let listValue = document.createTextNode(menu[i].allergies);
        listItem.appendChild(listValue);
        myElement.appendChild(listItem);
     }
}*/
