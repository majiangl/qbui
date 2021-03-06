Highcharts.theme = {
    chart: {
        backgroundColor: '#161819',
        plotBorderColor: '#383a3b',
        spacing: [10,10,10,10]
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
    labels: {
        style: {
            color: '#ffebc8'
        }
    },
    legend: {
        itemStyle: {
            color: '#ffebc8'
        },
        itemHoverStyle: {
            color: '#f9c66e'
        },
        itemHiddenStyle: {
            color: '#7b8082'
        }
    },
    tooltip: {
        borderColor: '#000',
        backgroundColor: '#34393c',
        style: {
            color: '#ffebc8'
        }
    },
    plotOptions: {
        column: {
            borderWidth: 0,
            borderColor: '#161819',
            dataLabels: {
                color: '#ffebc8'
            }
        },
        pie: {
            allowPointSelect: true,
            borderColor: '#161819',
            showInLegend: true,
            dataLabels: {
                enabled: false,
                style: {
                    color: '#ffebc8'
                }
            }
        },
        candlestick: {
            color: '#78E54E',
            lineColor: '#78E54E',
            upColor: 'transparent',
            upLineColor: '#C1242C'
        },
        series: {
            marker: {
                lineColor: '#000',
                lineWidth: 1,
                states: {
                    hover: {
                        lineColor: '#000'
                    }
                }
            }
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
        endOnTick: true,
        minPadding: 0,
        maxPadding: 0,
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
    },
    navigator: {
        outlineColor: '#454545',
        maskFill: 'rgba(255,255,255,0.1)',
        handles: {
            backgroundColor: '#252727',
            borderColor: '#454545'
        },
        series: {
            color: '#7798BF',
            lineColor: '#A6C7ED'
        },
        xAxis: {
            gridLineColor: '#222'
        },
        yAxis: {
            lineWidth: 0
        }
    },
    
    scrollbar: {
        barBackgroundColor: '#454545',
        barBorderColor: '#454545',
        buttonArrowColor: '#777',
        buttonBackgroundColor: '#000',
        buttonBorderColor: '#000',
        rifleColor: '#777',
        trackBackgroundColor: '#000',
        trackBorderColor: '#000'
    }
};
// Apply the theme
Highcharts.setOptions(Highcharts.theme);