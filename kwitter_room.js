

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAvK3IgV0c539FKXT7mqnmoBxgjhCDHvso",
    authDomain: "kwitter-25b95.firebaseapp.com",
    databaseURL: "https://kwitter-25b95-default-rtdb.firebaseio.com",
    projectId: "kwitter-25b95",
    storageBucket: "kwitter-25b95.appspot.com",
    messagingSenderId: "373797833334",
    appId: "1:373797833334:web:f7afa8637d62b781f82d57"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name+"!";

    function add_room(){
      room_name=document.getElementById("room_name").value;
       
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("Room Name", room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row="<div id="+Room_names+" class='room_name' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(room){
      console.log(room);
      localStorage.setItem("Room Name", room);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user name");
      localStorage.removeItem("Room Name");
      window.location="index.html";
}