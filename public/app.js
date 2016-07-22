window.onload = function() {
  console.log( 'app started' )
  var url = "https://punkapi.com/api/v1/beers"

  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.setRequestHeader( 'Authorization','Basic ' + btoa('99fda1f72f51428aa5ab92b80c6e3878' ) );

  request.onload = function() {
    if (request.status === 200) {
      var jsonString = request.responseText;
      var beers = JSON.parse(jsonString);
      console.log(beers);
      main( beers )
    }
  }

  request.send(null);

}

var main = function( beers ) {

  var beerSelect = document.getElementById( "beerSelect" );
  beers.forEach( function( beer, index ) {
    var option = document.createElement( 'option' );
    option.innerText = beer.name;
    option.value = index;

    beerSelect.appendChild( option )
  }) 

  beerSelect.onchange = function( event ) {
    console.log( event.target.value )
  }

}