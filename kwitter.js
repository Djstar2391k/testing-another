function addUser(){
    username = document.getElementById("user_names").value
    localStorage.setItem("user_name", username);
    window.location = "kwitter_room.html";
    
}