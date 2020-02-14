  window.onload = function (){

    /* jslint es6:true, indent: 2 */
    /* global Vue, io */
    /* exported vm */
    'use strict';
    const socket = io();

    /* eslint-disable-next-line no-unused-vars */
    const vm = new Vue({
      el: '#dots',
      data: {
        orders: {},
        orderObject: {x:0, y:0},

      },

      methods: {
        displayOrder: function(event) {
          /* When you click in the map, a click event object is sent as parameter
           * to the function designated in v-on:click (i.e. this one).
           * The click event object contains among other things different
           * coordinates that we need when calculating where in the map the click
           * actually happened. */
          let offset = {
            x: event.currentTarget.getBoundingClientRect().left,
            y: event.currentTarget.getBoundingClientRect().top,
          };
          vm.orderObject =
          {x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y
        };
      },
      },
    });


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
      data: {
        fullName: "",
        email: "",
        gender: "",
        pay: "",
        fstBurger: "",
        sndBurger: "",
        thrdBurger: "",
        count: 0,

      },
      methods: {
          markDone: function() {
                      console.log("Button clicked!");
                      button.fullName = "Full name: " + document.getElementById("fullName").value;
                      button.email = "Email: " + document.getElementById("email").value;
                      //button.street = "Street: " + document.getElementById("street").value;
                      //button.houseNumber = "Housenumber: " + document.getElementById("houseNumber").value;
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
                        button.fstBurger = document.getElementById("fstBurgerCheck").value;
                      }
                      else {
                        button.fstBurger = "";
                      }

                      if (document.getElementById("sndBurgerCheck").checked){
                        button.sndBurger = document.getElementById("sndBurgerCheck").value;
                      }
                      else {
                        button.sndBurger = "";
                      }

                      if (document.getElementById("thrdBurgerCheck").checked){
                        button.thrdBurger = document.getElementById("thrdBurgerCheck").value;
                      }
                      else {
                        button.thrdBurger = "";
                      }
          },
          /*getNext: function() {
            this.count++;
            return count;
          },*/
          addOrder: function() {
            /* When you click in the map, a click event object is sent as parameter
             * to the function designated in v-on:click (i.e. this one).
             * The click event object contains among other things different
             * coordinates that we need when calculating where in the map the click
             * actually happened. */

            socket.emit('addOrder', {
              orderId: this.count++, //this.getNext(),
              details: {
                x: vm.orderObject.x,
                y: vm.orderObject.y,
              },
              orderItems: [button.fstBurger, button.sndBurger, button.thrdBurger],
              custInfo: [button.fullName, button.email, button.pay, button.gender],
            });
          },
      },
  });

  const gender = new Vue({
      el: '#gender',
      data: {
          gender: ""
      }
  });

const pay = new Vue({
    el: '#recipient',
    data: {
        pay: ""
    }
});
}
