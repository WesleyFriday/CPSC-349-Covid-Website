
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

//this is for the gerographical location chart
google.charts.setOnLoadCallback(drawRegionsMap);

//this is for the graph under "Graph" 
google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

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

//"cases" is not using real data
google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Cases'],
        ['Afghanistan', 35644],
        ['Albania', 324569],
        ['Algeria', 136827],
        ['AndorrA', 12414],
        ['Angola', 5841129],
        ['Anguilla', 413439],
        ['Argentina', 455444],
        ['Armenia', 235235],
        ['Aruba', 34634],
        ['Australia', 46735],
        ['Austria', 23232],
        ['Azerbaijan', 234234],
        ['Bahamas', 346346],
        ['Bahrain', 432462],
        ['Bangladesh', 34621214],
        ['Barbados', 54675],
        ['Belarus', 146635437],
        ['Belgium', 43553],
        ['Canada', 234234],
        ['United States', 33345345],
        ['Mexico', 1212312],
        ['Russia', 232453],
    ]);

    var options = {};
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}

// "Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia",
// "Zimbabwe"]

function drawChart() {

    var data = new google.visualization.DataTable();

    data.addColumn('number', 'Current Status');
    data.addColumn('number', 'Active');
    data.addColumn('number', 'Recovered');
    data.addColumn('number', 'Deaths');

    data.addRows([
        [1,  37.8, 80.8, 41.8],
        [2,  30.9, 69.5, 32.4],
        [3,  25.4,   57, 25.7],
        [4,  11.7, 18.8, 10.5],
        [5,  11.9, 17.6, 10.4],
        [6,   8.8, 13.6,  7.7],
        [7,   7.6, 12.3,  9.6],
        [8,  12.3, 29.2, 10.6],
        [9,  16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
        [11,  5.3,  7.9,  4.7],
        [12,  6.6,  8.4,  5.2],
        [13,  4.8,  6.3,  3.6],
        [14,  4.2,  6.2,  3.4]
    ]);

    var options = {
        chart: {
            title: 'Box Office Earnings in First Two Weeks of Opening',
            subtitle: 'in millions of dollars (USD)'
        },
        width: 900,
        height: 500,
        axes: {
            x: {
            0: {side: 'top'}
            }
        }
    };

    var chart = new google.charts.Line(document.getElementById('line_top_x'));

    chart.draw(data, google.charts.Line.convertOptions(options));
}