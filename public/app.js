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
  console.log( 'app started' );
  var url = "https://punkapi.com/api/v1/beers";

  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.setRequestHeader( 'Authorization','Basic ' + btoa('99fda1f72f51428aa5ab92b80c6e3878' ) );

  request.onload = function() {
    if (request.status === 200) {
      var jsonString = request.responseText;
      state.beers = JSON.parse(jsonString);
      main();
    }
    console.log( state.beers );
  }
  request.send(null);
}

var main = function() {

  state.beer = JSON.parse( localStorage.getItem( "saved_beer" ) ) || [];
  updateDisplay( state.beer );
  displayRecipe( state.beer );

  var beerSelect = document.getElementById( "beerSelect" );
  state.beers.forEach( function( beer, index ) {
    var option = document.createElement( 'option' );
    option.innerText = beer.name;
    option.value = index;
    beerSelect.appendChild( option );
    if( beer.name === state.beer.name ){
      state.index = index;
    };
  }) ;

  beerSelect.value = state.index;

  beerSelect.onchange = function( event ) {

    var index = event.target.value; 
    state.beer = state.beers[index];
    updateDisplay( state.beer );
    displayRecipe( state.beer );
    state.malts = [];
    state.hops = [];
    state.yeast = [];
  };
};

var updateDisplay = function ( beer ) {
  var tags = document.querySelectorAll('#info p');
  tags[0].innerHTML = "<b>Blurb: </b>" + beer.tagline;
  tags[1].innerHTML = "<b>Description: </b>" + beer.description;
  tags[2].innerHTML = "<b>ABV: </b>" + beer.abv + "%";
  localStorage.setItem( "saved_beer" , JSON.stringify( beer ) );
}

var displayRecipe = function( beer ) {
  var recipe = document.getElementById( 'recipe' );
  recipe.style.display = 'block';
  var malts = document.getElementById( 'malts' );
  malts.innerHTML = "";
  state.beer.ingredients.malt.forEach( function( malt, index ) {
    var p = document.createElement( 'p' );
    p.id = "malt";
    p.innerHTML = malt.name + ": " + malt.amount.value + "kg";
    malts.appendChild( p );
    state.hops.push( { name: malt.name, amount: malt.amount.value } );
  });

  var maltMap = state.beer.ingredients.malt.map( function( malt ) {
    return { name: malt.name, y: malt.amount.value, sliced: true };
  });
  new MaltChart( maltMap );


  var hops = document.getElementById( 'hops' );
  hops.innerHTML = "";
  state.beer.ingredients.hops.forEach( function( hop, index ) {
    var p = document.createElement( 'p' );
    p.id = "hops";
    p.innerHTML = capitalize( hop.add ) + ": " + hop.amount.value + "g " + hop.name
    // h.innerHTML = hop.amount.value + "g";
    hops.appendChild( p );
    state.hops.push( { name: hop.name, amount: hop.amount.value } );
  });

  var hopMap = state.beer.ingredients.hops.map( function( hop ) {
    return { name: hop.name + ": " + capitalize( hop.add ), y: hop.amount.value, sliced: true };
  })

  new HopChart( hopMap );

  var yeast = document.getElementById( 'yeast' );
  yeast.innerHTML = "";
  var p = document.createElement( 'p' );
  p.id = "yeast";
  p.innerHTML = beer.ingredients.yeast;
  yeast.appendChild( p );
  state.yeast.push( { name: beer.ingredients.yeast } );

  var mashTemp = document.getElementById( 'mash-temp');
  mashTemp.innerHTML = "";
  var p = document.createElement( 'p' );
  p.id = "mashTemp";
  p.innerHTML = beer.method.mash_temp[0].temp.value + "&#x2103";
  mashTemp.appendChild( p );

  var mashTime = document.getElementById( 'mash-time');
  mashTime.innerHTML = "";
  var p = document.createElement( 'p' );
  p.id = "mashTime";

  if(beer.method.mash_temp[0].duration != null){
    p.innerHTML =  beer.method.mash_temp[0].duration + " Minutes";
  }else{
    p.innerHTML = "90 Minutes";
  }
  mashTime.appendChild( p );

  var oG = document.getElementById( 'oG' );
  oG.innerHTML = "";
  var p = document.createElement( 'p' );
  p.id = "oG";
  p.innerHTML = beer.target_og;
  oG.appendChild( p );

  var notes = document.getElementById( 'notes' );
  notes.innerHTML = "";
  var p = document.createElement( 'p' );
  p.id = "notes";
  p.innerHTML = beer.brewers_tips;
  notes.appendChild( p );

  if( beer.method.twist ) {
    var h = document.createElement( 'h4' );
    h.id = "twist-title";
    h.innerHTML = "Extra Twist";
    notes.appendChild( h );

    var p = document.createElement( 'p' );
    p.id = "twist";
    p.innerHTML = beer.method.twist;
    notes.appendChild( p );
  }




}










