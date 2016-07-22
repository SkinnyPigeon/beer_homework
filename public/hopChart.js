var HopChart = function ( hopMap ) {

  var container = document.getElementById( "hopChart" );

  var chart = new Highcharts.Chart({

    chart: {
      type: 'pie',
      renderTo: container,
      options3d: {
          enabled: true,
          alpha: 45
      }
    },

    title: {
      text: "Hops"
    },

    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },

    series: [
      {
        name: "Type",
        data: hopMap
      }
    ]

  })
console.log( chart )
} 
