/* data route */
var url = "/data";

function buildPlot() {
  d3.json(url).then(function(response) {

    console.log(response);
    var trace = {
      type: "scatter",
      mode: "lines",
      name: "Crime Numbers Per Year",
      x: response.map(data => data.year),
      y: response.map(data => data.number_crimes),
      line: {
        color: "  #4169E1"
      }
    };

    var data = [trace];

    var layout = {
      title: "Hate Crime Numbers Per Year",
      xaxis: {
        type: "linear"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      }
    };

    Plotly.newPlot("plot", data, layout);
  });
}

buildPlot();