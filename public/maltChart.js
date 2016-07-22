var MaltChart = function ( maltMap ) {

  var container = document.getElementById( "maltChart" );

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
      text: "Malts"
    },

    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },

    series: [
      {
        name: "Weight (kg)",
        data: maltMap
      }
    ]
  })
} 
