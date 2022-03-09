function addUser() {
    if(document.getElementById("player1_name_input").value==""){
        /*document.getElementById("username").placeholder= "Username Required";*/
        document.getElementById("player1_name_input").placeholder= "Player1 name is required";
        return;
    }
    else if(document.getElementById("player2_name_input").value==""){
       /*document.getElementById("password").placeholder= "Password Required";*/
       document.getElementById("player2_name_input").placeholder= "Player2 name is required";
        return;
    }
    else{
        player1_name = document.getElementById("player1_name_input").value;
        player2_name = document.getElementById("player2_name_input").value;
      
          localStorage.setItem("player1_name", player1_name);
          localStorage.setItem("player2_name", player2_name);
      
          window.location = "gamePage.html";
    }

  }