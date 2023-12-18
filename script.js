document.addEventListener('DOMContentLoaded', function () {

    // Данные для графика
    var dates = ['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05', '2023-01-06'];
    var depths = [10, 20, 30];
    var productionPlan = [8, 10, 15];
    var hourlyProduction = [2, 5, 10];

    //Даты для прогнозирования
    var forecastDates = [0, 0, 0, 0];
    forecastDates[0] = dates[dates.length - 4];
    forecastDates[1] = dates[dates.length - 3];
    forecastDates[2] = dates[dates.length - 2];
    forecastDates[3] = dates[dates.length - 1];

    //Прогнозирование
    var forecast = [0, 0, 0, 0];
    var change = hourlyProduction[hourlyProduction.length - 1] - hourlyProduction[hourlyProduction.length - 2];
    forecast[0] = hourlyProduction[hourlyProduction.length - 1];
    forecast[1] = hourlyProduction[hourlyProduction.length - 1] + change;
    forecast[2] = forecast[1] + change;
    forecast[3] = forecast[2] + change;

    //Сам график
    var trace1 = {
        x: dates,
        y: depths,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Глубина'
    };

    var trace2 = {
        x: dates,
        y: productionPlan,
        type: 'bar',
        name: 'План добычи'
    };

    var trace3 = {
        x: dates,
        y: hourlyProduction,
        type: 'scatter',
        name: 'Добыча за час'
    };

    var trace4 = {
        x: forecastDates,
        y: forecast,
        type: 'scatter',
        name: 'Прогноз'
    };


    var layout = {
        title: 'График добычи',
        xaxis: {
            title: 'Дата'
        },
        yaxis: {
            title: ''
        }
    };

    var data = [trace1, trace2, trace3, trace4];

    Plotly.newPlot('plot', data, layout);
});