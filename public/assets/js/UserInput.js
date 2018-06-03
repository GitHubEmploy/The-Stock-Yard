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
  var closeDate = [];


        // import Chart from '/chart.js'

=======
  $("#submit").on("click", function(event) {
    event.preventDefault();


    //Grabbing user input
    var newHoldings = {
      stock_name: $("#tickerSymbol").val() || "",
      qty: $("#qty").val() || ""
    };
    console.log(newHoldings);
    // console.log(newHoldings.stock_name);
    var stock = newHoldings.stock_name;

    var queryURL =
      "https://api.iextrading.com/1.0/stock/" + stock + "/chart/3m";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      //   console.log(response);
      for (var i = 0; i < response.length; i++) {
        // console.log(response[i].close);
        closePrice.push(response[i].close);
      }
      for (var i = 0; i < response.length; i++) {
        //   console.log(response[i].date);
        closeDate.push(response[i].date);
      }
      //   console.log(closePrice);
      //   console.log(closeDate);
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


    var stockName = newHoldings.stock_name.toUpperCase();
    
//     function newCard() {
        
        
//         var stockCard = $("<div class='card mx-auto></div>");
//     //   stockCard.addClass("card mx-auto");
//       stockCard.attr("id", "stockSymbol");
//       // stockCard.attr("id", "stockTicker");
//       // stockCard.attr("id", "quantity");
//       $("#stockTicker").append(stockName);
//       console.log(stockCard);
//       console.log(stockName);
//       console.log("this function ran");
    
// };
//     newCard();

    // $("#stockTicker").append("Stock Name: " + stockName);
    //   $("#quantity").append("Qty: " + newHoldings.qty);

    // $("#ticker").append(stockName);
    // $("#quantity").append(newHoldings.qty);
    // console.log(newHoldings.stock_name);

    var currentPage = window.location.origin;
     
    
        $.ajax({
            url: currentPage + "api/stock",
            method: "GET",
            data: newHoldings
        }).then(function(){
            console.log("this is loaded");
        })
  });
});
