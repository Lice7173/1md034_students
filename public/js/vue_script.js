let burgers = [theSaucyBurger.name, theGoodBurger.name, theTTTBurger.name, livsSpecialBurger.name, theStrangeBurger.name]

/*const vm = new Vue({
  el: '#myID',
  data: {
    arbitraryVariableName: 'Välj en burgare:' + ' ' + new Date()
  }
})*/

const vm = new Vue({
  el: '#myID',
  data: {
    burgers: burgers
  }
})
