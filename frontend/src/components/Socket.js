import {useState} from "react";
import { io } from "socket.io-client";

const Socket = () => {
  const socket = io.connect("http://127.0.0.1:3000/");

  const [messageAuthor, setMessageAuthor] = useState("");
  const [messageBody, setMessageBody] = useState("");

  const chatMessage = document.getElementById("message");
  const chatHandle = document.getElementById("handle");
  const chatBtn = document.getElementById("send");
  const chatOutput = document.getElementById("output");
  const chatFeedback = document.getElementById("feedback");

  const handleSubmit = () => {
    setMessageAuthor(chatHandle.value);
    setMessageBody(chatMessage.value);
    socket.emit("chatGOING", {
      message: messageBody,
      handle: messageAuthor
    })
  }


  socket.on("chatCOMING", function(data){
    chatFeedback.innerHTML = "";
    chatOutput.innerHTML +="<p><strong>"+ data.handle + ": </strong>"+ data.message +"</p>";
    chatMessage.value = "";
  });



  return(
    <div>
      <div id="chatBox1">
        <div id="chat-window">
          <div id="output"></div>
          <div id="feedback"></div>
        </div>
        <input className="socketInput" type="text" id="handle" placeholder="Handle"/>
        <input className="socketInput" type="text" id="message" placeholder="Message"/>
        <button className="socketBtn" id="send" onClick={handleSubmit}>Send</button>
      </div>
      <p>fasdfasdf</p>
    </div>
  )
}
export default Socket;
