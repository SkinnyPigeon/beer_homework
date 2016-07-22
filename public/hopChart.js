var HopChart = function ( hops ) {

  var container = document.getElementById( "hopChart" );

  var chart = new Highcharts.Chart({

    chart: {
      type: 'pie',
      renderTo: container,
    },

    title: {
      text: "Pokemon Types I've Caught. Kill Kill Kill"
    },

    series: [
      {
        name: "Type",
        data: [
          {
            name: "Fire",
            y: 74,
            color: "#ffac33"
          },

          {
            name: "Water",
            y: 25,
            color: "#73b7ff",
            sliced: true

          },
          {
            name: "Grass",
            y: 1,
            color: "#00ba2f"
          },
          {
            name: "Fairy",
            y: 25,
            color: "#000"
          }

        ]
      }
    ]

  })
console.log( chart )
} 
