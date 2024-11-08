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
$message_to_be_deleted=mysqli_real_escape_string($link,$obj['message_to_be_deleted']);
$my_id=mysqli_real_escape_string($link,$obj['my_id']);
$receiver_id=mysqli_real_escape_string($link,$obj['receiver_id']);
	

if($message_from=="API"){

    $delete="DELETE FROM chat_messages WHERE id='$message_id'";
    $result2=mysqli_query($link,$delete);
if($result2){
    // output data of each row
echo json_encode('message deleted');
}
}

if($message_from=="Socket"){

    $delete_socket="DELETE FROM chat_messages WHERE id>='$message_id' AND sender_id='$my_id' AND reciver_id='$receiver_id' AND chat_messages='$message_to_be_deleted'";
    $result3=mysqli_query($link,$delete_socket);
if($result3){

    // output data of each row

echo json_encode('message deleted');
 
}



}





mysqli_close($link); 
?>