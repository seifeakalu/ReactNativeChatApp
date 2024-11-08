<?php

$link=mysqli_connect("localhost","root","","circlenet");
if(!$link){

echo json_encode('db error');
}
else {
}
$json=file_get_contents('php://input');
$obj=json_decode($json,true);


$message_id=mysqli_real_escape_string($link,$obj['message_id']);
$message_from=mysqli_real_escape_string($link,$obj['message_from']);
$messageToBeUpdated=mysqli_real_escape_string($link,$obj['message_to_be_updated']);
$my_id=mysqli_real_escape_string($link,$obj['my_id']);
$receiver_id=mysqli_real_escape_string($link,$obj['receiver_id']);
$oldMessage=mysqli_real_escape_string($link,$obj['oldMessage']);

if($message_from=="API"){
    $update="UPDATE chat_messages SET chat_messages='$messageToBeUpdated' WHERE id='$message_id'";
    $result2=mysqli_query($link,$update);
    if($result2){
    // output data of each row
     echo json_encode('message deleted');
      }
}
if($message_from=="Socket"){
    $update_socket="UPDATE chat_messages SET chat_messages='$messageToBeUpdated' WHERE id>='$message_id' AND sender_id='$my_id' AND reciver_id='$receiver_id' AND chat_messages='$oldMessage'";
    $result3=mysqli_query($link,$update_socket);
    if($result3){
    // output data of each row
     echo json_encode('message deleted');
         }
}
mysqli_close($link); 
?>