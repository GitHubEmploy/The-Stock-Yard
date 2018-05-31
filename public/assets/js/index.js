console.log('index.js file loded')

$(".submit").on("click", function(event){
    event.preventDefault();
    window.location = "userInputs.html";
    
    //Grabbing user input
     var userInfo = {
       username: $("#username").val().trim(),
       password: $("#password").val().trim()
     };
     console.log(userInfo);
  
  $.post("....", userInfo, function(data){
    if(data) {
      console.log("user added")
    }
    else {
        if (errors) {
            var message = "You must provide a username and password";
            $('#alertModal').find('.modal-body p').text(message);
            $('#alertModal').modal('show')
        }
    }
  
    //clears fields
    $("#username").val("");
    $("#password").val();
  });
  
  });