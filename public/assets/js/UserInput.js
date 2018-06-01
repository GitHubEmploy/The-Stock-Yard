$(".submit").on("click", function(event){
    event.preventDefault();
    
    //Grabbing user input
     var newHoldings = {
       positon: $("#tickerSymbol").val().trim(),
       qty: $("#qty").val().trim()
     };
     console.log(newHoldings);
  
  $.post("./models/stock.js", newHoldings, function(data){
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