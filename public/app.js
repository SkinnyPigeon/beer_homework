var state = {
  beers: [],
  beer: 0,
  basket: [],
  malts: [],
  hops: [],
  yeast: [],
  index: 0
}


var capitalize = function( string ) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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
    console.log( state.beers )
  }
  request.send(null);
}

var main = function() {

  state.beer = JSON.parse( localStorage.getItem( "saved_beer" ) ) || [];
  updateDisplay( state.beer )
  displayRecipe( state.beer )

  var beerSelect = document.getElementById( "beerSelect" );
  state.beers.forEach( function( beer, index ) {
    var option = document.createElement( 'option' );
    option.innerText = beer.name;
    option.value = index;
    beerSelect.appendChild( option )
    if( beer.name === state.beer.name ){
      state.index = index
    }
  }) 

  beerSelect.value = state.index 

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
  localStorage.setItem( "saved_beer" , JSON.stringify( beer ) );
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


  var hops = document.getElementById( 'hops' );
  hops.innerHTML = ""
  state.beer.ingredients.hops.forEach( function( hop, index ) {
    var p = document.createElement( 'p' );
    p.id = "hops";
    p.innerHTML = hop.name + ": "+ hop.amount.value + "g" + "<br>" + "To be added at: " + capitalize( hop.add );
    hops.appendChild( p );
    state.hops.push( { name: hop.name, amount: hop.amount.value } )
  });

  var hopMap = state.beer.ingredients.hops.map( function( hop ) {
    return { name: hop.name + ": " + capitalize( hop.add ), y: hop.amount.value, sliced: true }
  })

  new HopChart( hopMap )

  var yeast = document.getElementById( 'yeast' )
  yeast.innerHTML = ""
  var p = document.createElement( 'p' );
  p.id = "yeast";
  p.innerHTML = beer.ingredients.yeast
  yeast.appendChild( p )
  state.yeast.push( { name: beer.ingredients.yeast } )

}










