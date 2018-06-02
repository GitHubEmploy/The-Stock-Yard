$(document).ready(function() {

        // import Chart from '/chart.js'

        var color = Chart.helpers.color
        var barGraphData = {
            labels: ['Janurary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                backgroundColor: color(window.chartColors),
                label: [],
                data: [],   
            }]
        }
        var ctx = $('#myCanvas');
        var newChart = new Chart(ctx, {
            type: 'bar',
            data: barGraphData,
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart'
                }
            }
        })


    $("#submit").on("click", function(event){

        event.preventDefault();
        
        //Grabbing user input
         var newHoldings = {
           positon: $("#tickerSymbol").val().trim(),
           qty: $("#qty").val().trim()
         };
         console.log(newHoldings);
      
         // URL
       $.post("api/second", newHoldings, function(data){
    //     // if(data) {
    //     //   alert("added");
    //     // }
    //     // else {
    //     //   alert("something went wrong");
    //     // }
      


    //     //clears fields
         $("#tickerSymbol").val("");
         $("#qty").val();
       });

      }); 

});
