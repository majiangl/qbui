Highcharts.theme = {
    chart: {
        backgroundColor: '#161819'
    },
    colors: ['#ffc96c','#dc4444','#48764f','#58b96d','#b26ed0','#ce6432',
            '#7adc4e','#25ba93','#f04971','#fbff1e'],
    credits: {
        enabled: false,
        href: 'http://www.sumscope.com',
        style: {
            color: '#7b8082'
        },
        text: 'Sumscope.com'
    },
    legend: {
        itemStyle: {
            color: '#ffebc8'
        }
    },
    style: {
        fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Helvetica, "Microsoft Yahei", sans-serif'
    },
    title: {
        text: null,
        style: {
            color: '#ffebc8'
        }
    },
    xAxis: {
        gridLineColor: '#383a3b',
        gridLineWidth: 1,
        labels: {
            style: {
                color: '#7b8082'
            }
        },
        lineColor: '#383a3b',
        tickWidth: 0
    },
    yAxis: {
        gridLineColor: '#383a3b',
        labels: {
            style: {
                color: '#7b8082'
            }
        },
        lineColor: '#383a3b',
        lineWidth: 1,
        title: {
            align: 'low',
            margin: 5,
            style: {
                color: '#7b8082'
            }
        }
    }
};
// Apply the theme
Highcharts.setOptions(Highcharts.theme);