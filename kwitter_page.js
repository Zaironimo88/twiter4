
const firebaseConfig = {
    apiKey: "AIzaSyAEI6tJh52YNT-B3q3DYQgBW-iAvzl91q0",
    authDomain: "prueba-c18fe.firebaseapp.com",
    databaseURL: "https://prueba-c18fe-default-rtdb.firebaseio.com",
    projectId: "prueba-c18fe",
    storageBucket: "prueba-c18fe.appspot.com",
    messagingSenderId: "10581032031",
    appId: "1:10581032031:web:04bf94e26d18e63d7c2fea"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  user_name=localStorage.getItem("room_name").value;
  function send()
  {
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById("msg").value="";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Inicia código

//Termina código
 } });  }); }
getData();