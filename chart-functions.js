/*
* ================
* Charts Js
*/
//Product Sales
(function($) {
  "use strict";
  Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Titre du Graph'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Sales'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: seriesTEST
});

//Sales Overview
Highcharts.chart('container1', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Sales Overview'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Product'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: seriesTEST1
});
	

//Waterfall
Highcharts.chart('water', {
    chart: {
      type: 'waterfall'
    },
  
    title: {
      text: 'Highcharts Waterfall'
    },
  
    xAxis: {
      type: 'category'
    },
  
    yAxis: {
      title: {
        text: 'USD'
      }
    },
  
    legend: {
      enabled: false
    },
  
    tooltip: {
      pointFormat: '<b>${point.y:,.2f}</b> USD'
    },

    series: [{
        upColor: Highcharts.getOptions().colors[2],
        color: '#FF0000',
        data: [{
          name: 'Start',
          y: 120000
        }, {
          name: 'Product Revenue',
          y: 569000
        }, {
          name: 'Service Revenue',
          y: 231000
        }, {
          name: 'Positive Balance',
          isIntermediateSum: true,
          color: Highcharts.getOptions().colors[1]
        }, {
          name: 'Fixed Costs',
          y: -342000
        }, {
          name: 'Variable Costs',
          y: -233000
        }, {
          name: 'Balance',
          isSum: true,
          color: Highcharts.getOptions().colors[1]
        }],
        dataLabels: {
          enabled: true,
          formatter: function () {
            return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
          },
          style: {
            fontWeight: 'bold'
          }
        },
        pointPadding: 0
      }]
    });
	
	
    
    
    
	
	
	
	
	
})(jQuery);