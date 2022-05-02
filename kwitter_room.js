
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDX0FskAr5xUkKxRgK-nkbJY0jxtUt2yOY",
      authDomain: "kwitter-b4ef1.firebaseapp.com",
      databaseURL: "https://kwitter-b4ef1-default-rtdb.firebaseio.com",
      projectId: "kwitter-b4ef1",
      storageBucket: "kwitter-b4ef1.appspot.com",
      messagingSenderId: "30646909672",
      appId: "1:30646909672:web:24b5dfe4d56d227a4a675d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("welcome_user_name").innerHTML = "Welcome " + user_name;

function add_room(){
      room_name = document.getElementById("room_name").value;
      
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name =" + Room_names);
row = "<div class ='room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML +=  row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function log_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      
}
