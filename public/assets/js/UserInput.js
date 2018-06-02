
$(document).ready(function() {

    var barGraphData = {
        // Empty ticker symbols array where symbols will be pushed to when "#submit" is clicked
        tickerSymbols: [],
        // Empty array for symbols quantities where quantities will be pushed to when "#submit" is clicked
        quantities: []
    }

    // Creating the bar graph by getting the element by id "#myCanvas"
    var ctx = $("#myCanvas");
    // Creating a "graph object" to store the data that is being put in by a user
    var graph = new Graph(ctx, {
        // The type of graph being created is a bar graph
        type: 'bar',
        // data attribute that contains the "barGraphData"
        data: barGraphData,
        //Options that can be added into the bar graph
        options: {
            responsive: true,
            title: {
                display: true,
                text: "Chart.js Bar Graph"
            }
        }
    });

    $("#enter").on("click", function(event){
        event.preventDefault();
        
        //Grabbing user input
         var newHoldings = {
           positon: $("#tickerSymbol").val().trim(),
           qty: $("#qty").val().trim()
         };
         console.log(newHoldings);
      
         // URL
      $.post("....", newHoldings, function(data){
        if(data) {
          alert("added");
        }
        else {
          alert("something went wrong");
        }
      
        //clears fields
        $("#tickerSymbol").val("");
        $("#qty").val();
      });

      }); 
});
