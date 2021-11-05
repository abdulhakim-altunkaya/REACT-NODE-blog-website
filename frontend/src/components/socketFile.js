const socket = io.connect("http://127.0.0.1:3000/");

const chatMessage = document.getElementById("message");
const chatHandle = document.getElementById("handle");
const chatBtn = document.getElementById("send");
const chatOutput = document.getElementById("output");
const chatFeedback = document.getElementById("feedback");

chatBtn.addEventListener("click", function(){
  socket.emit("chatGOING", {
    message: chatMessage.value,
    handle: chatHandle.value
  })
});

chatMessage.addEventListener("keypress", function(){
  socket.emit("someoneTyping", chatHandle.value)
})

socket.on("chatCOMING", function(data){
  chatFeedback.innerHTML = "";
  chatOutput.innerHTML +="<p><strong>"+ data.handle + ": </strong>"+ data.message +"</p>";
  chatMessage.value = "";
});

//Broadcast Part: Step 4
socket.on("someoneTyping2", function(data){
  chatFeedback.innerHTML = "<p><em>"+data+" is typing...</em></p>"
})
