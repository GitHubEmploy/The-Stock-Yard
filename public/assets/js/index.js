

$("#submit").on("click", function(event){
    // event.preventDefault();
   

    //Grabbing user input
     var userInfo = {
       user_name: $("#username").val().trim(),
       password: $("#password").val().trim()
     };
     
  
  $.post("/user", userInfo).then(function(res){
        console.log(res);
        
  }).catch(function(err){
      throw err
  })
  
  });
  
