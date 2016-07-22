var state = {
  beers: [],
  beer: 0
}


window.onload = function() {
  console.log( 'app started' )
  var url = "https://punkapi.com/api/v1/beers"

  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.setRequestHeader( 'Authorization','Basic ' + btoa('99fda1f72f51428aa5ab92b80c6e3878' ) );

  request.onload = function() {
    if (request.status === 200) {
      var jsonString = request.responseText;
      state.beers = JSON.parse(jsonString);
      main()
    }
  }

  request.send(null);

}

var main = function() {

  var beerSelect = document.getElementById( "beerSelect" );
  var recipeSelect = document.getElementById( "recipe-button" )
  state.beers.forEach( function( beer, index ) {
    var option = document.createElement( 'option' );
    option.innerText = beer.name;
    option.value = index;

    beerSelect.appendChild( option )
  }) 

  beerSelect.onchange = function( event ) {
    var index = event.target.value 
    state.beer = state.beers[index]
    updateDisplay( state.beer )
  }

  recipeSelect.onclick = function( beer, event ) {
    displayRecipe( state.beer )
  }

}

var updateDisplay = function ( beer ) {
  var tags = document.querySelectorAll('#info p');
  tags[0].innerText = "Blurb: " + beer.tagline;
  tags[1].innerText = "Description: " + beer.description;
  tags[2].innerText = "ABV: " + beer.abv + "%";
  console.log( beer )        
}

var displayRecipe = function( beer ) {
  var ingredients = document.getElementById('recipe');




  state.beer.ingredients.hops.forEach( function(hop, index) {
    var p = document.createElement( 'p' )
    p.id = "hops"
    p.innerHTML = hop.name + ": "+ hop.amount.value + "g" + "<br>" + "Add at: " + hop.add;
    ingredients.appendChild(p)
  });


}








