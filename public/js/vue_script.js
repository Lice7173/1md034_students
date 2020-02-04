window.onload = function (){

const burger1 = new Vue({
  el: '#burger1',
  data: {
    name1: "The Saucy Burger",
    image1: "https://media-cdn.tripadvisor.com/media/photo-s/0b/32/be/36/saucy-burger.jpg",
    info1: ["The meat is imported from the great madagascar", "The sauce is great Mayo", "Allergies: Gluten, lactose"]
  }
})


const burger2 = new Vue({
  el: '#burger2',
  data: {
    name2: "The Good Burger",
    image2: "https://assets.bonappetit.com/photos/57acae2d1b33404414975121/master/pass/ultimate-veggie-burger.jpg",
    info2: ["It's really tasty!", "The bun is pretty dry...", "Allergies: gluten"]
  }
})

const burger3 = new Vue({
  el: '#burger3',
  data: {
    name3: "The TTT Burger",
    image3: "https://images.kitchenstories.io/recipeImages/RP04_24_05_halloumiBurger_TitlePicture.jpg",
    info3: ["Quality halloumi!", "Good for vegetarians", "Allergies: lactose"]
  }
})





//let burgers = [theSaucyBurger.name, theGoodBurger.name, theTTTBurger.name, livsSpecialBurger.name, theStrangeBurger.name]

/*const vm = new Vue({
  el: '#myID',
  data: {
    arbitraryVariableName: 'Välj en burgare:' + ' ' + new Date()
  }
})*/

/*const vm = new Vue({
  el: '#myID',
  data: {
    burgers: burgers
  }
})*/

//I WROTE THE VUE PART IN HTML LIKE THIS:S
/*
<div id="myID">
    <h1>Välj en burgare</h1>
  <ul>
     <li v-for="burger in burgers">
      {{ burger.name }}
      <p v-if="burger.allergies != false">
      {{burger.allergies}}
      </p>
     </li>
   </ul>
</div>
*/

}
