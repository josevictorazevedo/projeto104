// Crie a função login aqui.
function login()
    {
player_name = document.getElementById("player_name").value;
localStorage.seItem("player_name", player_name);

window.location = "gamepage.html";
    }
