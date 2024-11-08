const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

io.on("connection", (socket) => {
  console.log("a user connected :D.");

  /*io.socket.on('connection',function(socket){
socket.on('event_name', function(data){
  io.sockets.emit('eventToClient', {id: userid, name: username})
});
socket.broadcast.emit('eventToClient', {id: userid, name: username});
socket.emit('eventToClient', {id: userid, name: username});
})
*/
  socket.on("chat message", ({ id, message, reciver_id, sender_id }) => {
    console.log(message);
    console.log("reciver id" + reciver_id);
    console.log("mm id" + id);
    console.log("sender id" + sender_id);

    io.emit("chat message", {
      messages: message,
      ids: reciver_id,
      message_id: id,
    });
  });

  socket.on(
    "delete message",
    ({ id, message_from, value, requester_id, selected_user_id }) => {
      console.log(message_from);
      console.log(" id" + id);
      console.log("valuu" + value);
      console.log("requester " + requester_id);
      console.log("selected id " + selected_user_id);

      io.emit("delete message", {
        id: id,
        requester_id: requester_id,
        selected_user_id: selected_user_id,
      });
    }
  );

  socket.on(
    "update message",
    ({
      id,
      message_from,
      message_to_be_updated,
      value,
      requester_id,
      selected_user_id,
    }) => {
      console.log(message_from);
      console.log(" id" + id);
      console.log("to be updated" + message_to_be_updated);
      console.log("requester " + requester_id);
      console.log("selected id " + selected_user_id);

      io.emit("update message", {
        id: id,
        requester_id: requester_id,
        selected_user_id: selected_user_id,
        updatedMessage: message_to_be_updated,
      });
    }
  );

  socket.on("typing indicator", ({ typer_id, typed_to }) => {
    console.log(" typer id" + typer_id);
    console.log("typed to" + typed_to);

    io.emit("indicate typing", { typer: typer_id, typed_to: typed_to });
  });
});

server.listen(port, () => console.log("server running on porty:" + port));
