$(document).ready(function() {
    var closePrice = [];
    var closeDate = [];
    var company = [];
    var barGraph = $('#myCanvas');
    var color = 'lightblue';

 $("#submit").on("click", function(event) {

    event.preventDefault();
    //Grabbing user input

    var newHoldings = {
      stock_name: $("#tickerSymbol").val() || "",
      qty: $("#qty").val() || ""
    };

    console.log(closeDate);
    console.log(closePrice);
    console.log(newHoldings);
    // console.log(newHoldings.stock_name);
    var stock = newHoldings.stock_name;

    var queryURL = "https://api.iextrading.com/1.0/stock/" + stock + "/chart/1m";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      console.log(response);
      for (var i = 0; i < response.length; i++) {
        closeDate.push(response[i].date);
        closePrice.push(response[i].close);
      }

      function createNewGraph() {
        var graphData= {
            labels: closeDate,
        datasets: [{
            label: stockName,
            backgroundColor: color,
            data: closePrice
        }]
    };
        var newGraph = new Chart(barGraph, {
            type: 'bar',
            data: graphData,
            options:{
                responsive: false,
                legend: {
                    labels: {
                        fontColor: 'white',
                        fontSize: 20
                    }
                },
                scales: {
                    xAxes:[{
                        scaleLabel: {
                            display: true,
                            labelString: 'Date(YYYY/MM/DD/)',
                            fontSize: 20,
                            fontColor: 'white'
                        },
                        gridLines: {
                            color: 'white'
                        },
                        ticks: {
                            fontColor: 'white'
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Close Price($)',
                            fontSize: 20,
                            fontColor: 'white'
                        },
                        gridLines: {
                            color: 'white',
                            
                        },
                        ticks: {
                            fontColor: 'white',
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

    }
    createNewGraph();
    });
    // URL
    $.post("/second", newHoldings, function(res) {
      // console.log(res);
    }).catch(function(err) {
      throw err;
    });

    //clears fields
    $("#tickerSymbol").val("");
    $("#qty").val("");

    var stockName = newHoldings.stock_name.toUpperCase();
    var worth = newHoldings.qty * closePrice;
    console.log(worth);
   
    function newCard () {
        $("#stockTable > tbody").append("<tr><td>" + stockName + "</td><td>" + newHoldings.qty + "</td><td>" + worth + "</td><tr>")
            console.log("this function ran");
        }
        newCard();
    
    function newBar () {
        $("#graphSection").append("<canvas>" + newGraph + "</canvas>");
    }
        newBar();
  });
  
});
