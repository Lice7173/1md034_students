  window.onload = function (){

  const burger1 = new Vue({
    el: '#burger1',
    data: {
      name1: "The Saucy Burger",
      image1: "https://media-cdn.tripadvisor.com/media/photo-s/0b/32/be/36/saucy-burger.jpg",
      info1: food[0] /*["The meat is imported from the great madagascar", "The sauce is great Mayo", "Allergies: Gluten, lactose"]*/
    }
  })


  const burger2 = new Vue({
    el: '#burger2',
    data: {
      name2: "The Good Burger",
      image2: "https://assets.bonappetit.com/photos/57acae2d1b33404414975121/master/pass/ultimate-veggie-burger.jpg",
      info2: food[1] /*["It's really tasty!", "The bun is pretty dry...", "Allergies: gluten"]*/
    }
  })

  const burger3 = new Vue({
    el: '#burger3',
    data: {
      name3: "The TTT Burger",
      image3: "https://images.kitchenstories.io/recipeImages/RP04_24_05_halloumiBurger_TitlePicture.jpg",
      info3: food[2] /*["Quality halloumi!", "Good for vegetarians", "Allergies: lactose"]*/
    }
  })

  const button = new Vue({
      el: '#orders',
      methods: {
          markDone: function() {
                      console.log("Button clicked!");
                      button.fullName = "Full name: " + document.getElementById("fullName").value;
                      button.email = "Email: " + document.getElementById("email").value;
                      button.street = "Street: " + document.getElementById("street").value;
                      button.houseNumber = "Housenumber: " + document.getElementById("houseNumber").value;
                      button.pay = "Payment: " + document.getElementById("recipient").value;

                      if (document.getElementById("female").checked){
                        button.gender = document.getElementById("female").value;
                      }
                      if (document.getElementById("male").checked){
                        button.gender = document.getElementById("male").value;
                      }
                      if (document.getElementById("other").checked){
                        button.gender = document.getElementById("other").value;
                      }

                      if (document.getElementById("fstBurgerCheck").checked){
                        button.fstBurger = "The Saucy Burger: " + document.getElementById("fstBurgerCheck").value;
                      }
                      else {
                        button.fstBurger = "The Saucy Burger: " + document.getElementById("fstBurgerCheck").name;
                      }

                      if (document.getElementById("sndBurgerCheck").checked){
                        button.sndBurger = "The Good Burger: " + document.getElementById("sndBurgerCheck").value;
                      }
                      else {
                        button.sndBurger = "The Good Burger: " + document.getElementById("sndBurgerCheck").name;;
                      }

                      if (document.getElementById("thrdBurgerCheck").checked){
                        button.trdBurger = "The TTT Burger: " + document.getElementById("thrdBurgerCheck").value;
                      }
                      else {
                        button.trdBurger = "The Good Burger: " + document.getElementById("sndBurgerCheck").name;
                      }


          }
      },
      data: {
        fullName: "",
        email: "",
        street: "",
        houseNumber: "",
        gender: "",
        pay: "",
        fstBurger: "",
        sndBurger: "",
        trdBurger: "",

      }
  });

  /*const customerINFO = new Vue({
      el: '#customerinfo',
      data: {
          fullName: "",
          email: "",
          street: "",
          houseNumber: ""
      }
  });*/


  const gender = new Vue({
      el: '#gender',
      data: {
          gender: ""
      }
  });
}

const pay = new Vue({
    el: '#recipient',
    data: {
        pay: ""
    }
});



  /*const email = new Vue({
      el: '#customerinfo',
      data: {
          email: email
      }
  });

  const street = new Vue({
      el: '#customerinfo',
      data: {
          street: street
      }
  });

  const housenr = new Vue({
      el: '#customerinfo',
      data: {
          housenr: housenr
      }
  });*/


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
