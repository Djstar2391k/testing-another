//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'> </h4> ";
message_with_tag = "<h4 class ='message_h4'>" + message + "</h4>"
like_button = "<button class = 'btn btn info' id = " + firebase_message_id + "value = " + like + "onclick = 'update_like(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up' >like: " + like + "</span></button><hr>"
row = name_with_tag + message_with_tag +  like_button + span_with_tag
document.getElementById("output").innerHTML += row;


//End code
      } });  }); }
getData();

function log_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      
}


function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name : user_name, 
      message : msg,
      like : 0
});

document.getElementById("msg").value = "";
  

}

function update_like(message_id){
      console.log(message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_like =  Number(likes)+1;
      console.log(updated_like);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_like
      })
};

