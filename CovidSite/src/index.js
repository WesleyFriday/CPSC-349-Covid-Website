
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    // FAKE DATA
    var data = google.visualization.arrayToDataTable([
        ['Day', 'Active', 'Closed', 'Recovered', 'Died',    'Cumulative'],
        ['05/08',  100,      600,           600,         300,          700,],
        ['05/09',  200,      850,           800,         350,          850,],
        ['05/10',  300,      1000,           900,         400,          1100,],
        ['05/11',  400,      1310,          1100,        500,          1510,],
        ['05/12',  500,      1700,          1500,         600,          2000,]
    ]);

    var options = {
        title : 'Cases Over the Past Five Days',
        vAxis: {title: 'Cases'},
        hAxis: {title: 'Day'},
        seriesType: 'bars',
        series: {4: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
