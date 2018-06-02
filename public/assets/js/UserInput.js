$(document).ready(function() {
  // var color = Chart.helpers.color
  // var barGraphData = {
  //     labels: ['Janurary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  //     datasets: [{
  //         backgroundColor: color(window.chartColors),
  //         label: [],
  //         data: [
  //             randomScalingFactor(),
  //             randomScalingFactor(),
  //             randomScalingFactor(),
  //             randomScalingFactor(),
  //             randomScalingFactor(),
  //             randomScalingFactor(),
  //             randomScalingFactor(),
  //             randomScalingFactor(),
  //             randomScalingFactor(),
  //             randomScalingFactor()
  //         ],
  //     }]
  // }
  // var ctx = $('#myCanvas');
  // var newChart = new Chart(ctx, {
  //     type: 'bar',
  //     data: barGraphData,
  //     options: {
  //         responsive: true,
  //         title: {
  //             display: true,
  //             text: 'Chart.js Bar Chart'
  //         }
  //     }
  // })
  var closePrice = [];

  $("#submit").on("click", function(event) {
    event.preventDefault();

    //Grabbing user input
    var newHoldings = {
      stock_name: $("#tickerSymbol").val() || "",
      qty: $("#qty").val() || ""
    };
    console.log(newHoldings);

    var stock = newHoldings.stock_name;

    var queryURL =
      "https://api.iextrading.com/1.0/stock/" + stock + "/chart/3m";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      for (var i = 0; i < response.length; i++) {
        // console.log(response[i].close);
        closePrice.push(response[i].close);
      }
      console.log(closePrice);
    });
    // URL
    $.post("/second", newHoldings, function(res) {
      // console.log(res);
    }).catch(function(err) {
      throw err;
    });

    //     //clears fields
    $("#tickerSymbol").val("");
    $("#qty").val("");
  });
});
