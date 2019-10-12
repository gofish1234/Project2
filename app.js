/* data route */
var url = "/data";

function buildPlot() {
  d3.json(url).then(function(response) {

    console.log(response);
    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "Crime data",
      x: response.map(data => data.year),
      y: response.map(data => data.counts),
      line: {
        color: "#17BECF"
      }
    };
    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: "Crime data",
        x: response.map(data => data.year),
        y: response.map(data => data.counts),
        line: {
          color: "#17CFBE"
        }
      };
      var trace3 = {
        type: "scatter",
        mode: "lines",
        name: "Crime data",
        x: response.map(data => data.year),
        y: response.map(data => data.counts),
        line: {
          color: "#BE17CF"
        }
      };
      var trace4 = {
        type: "scatter",
        mode: "lines",
        name: "Crime data",
        x: response.map(data => data.year),
        y: response.map(data => data.counts),
        line: {
          color: "#BECF17"
        }
      };
      var trace5 = {
        type: "scatter",
        mode: "lines",
        name: "Crime data",
        x: response.map(data => data.year),
        y: response.map(data => data.counts),
        line: {
          color: "#CF17BE"
        }
      };


    var data = [trace1,trace2,trace3,trace4,trace5];

    var layout = {
      title: "Hatecrime ",
      xaxis: {
        type: "date"
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
