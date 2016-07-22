var state = {
  beers: [],
  beer: 0,
  basket: [],
  malts: [],
  hops: [],
  yeast: []
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
    displayRecipe( state.beer )
    state.malts = []
    state.hops = []
    state.yeast = []
  }

}

var updateDisplay = function ( beer ) {
  var tags = document.querySelectorAll('#info p');
  tags[0].innerText = "Blurb: " + beer.tagline;
  tags[1].innerText = "Description: " + beer.description;
  tags[2].innerText = "ABV: " + beer.abv + "%";
}

var displayRecipe = function( beer ) {
  var recipe = document.getElementById( 'recipe' )
  recipe.style.display = 'block'
  var malts = document.getElementById( 'malts' );
  malts.innerHTML = ""
  state.beer.ingredients.malt.forEach( function( malt, index ) {
    var p = document.createElement( 'p' );
    p.id = "malt";
    p.innerHTML = malt.name + ": " + malt.amount.value + "kg";
    malts.appendChild( p );
    state.hops.push( { name: malt.name, amount: malt.amount.value } )
  })

  var maltMap = state.beer.ingredients.malt.map( function( malt ) {
    return { name: malt.name, y: malt.amount.value, sliced: true }
  })
  new MaltChart( maltMap )
  console.log( maltMap )


  var hops = document.getElementById( 'hops' );
  hops.innerHTML = ""
  state.beer.ingredients.hops.forEach( function( hop, index ) {
    var p = document.createElement( 'p' );
    p.id = "hops";
    p.innerHTML = hop.name + ": "+ hop.amount.value + "g" + "<br>" + "Add at: " + hop.add;
    hops.appendChild( p );
    state.hops.push( { name: hop.name, amount: hop.amount.value } )
  });


  var yeast = document.getElementById( 'yeast' )
  yeast.innerHTML = ""
  var p = document.createElement( 'p' );
  p.id = "yeast";
  p.innerHTML = beer.ingredients.yeast
  yeast.appendChild( p )
  state.yeast.push( { name: beer.ingredients.yeast } )


}










