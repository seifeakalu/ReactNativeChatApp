<?php

$link=mysqli_connect("localhost","root","","circlenet");
if(!$link){

echo json_encode('db error');

}

else {

  
}

$json=file_get_contents('php://input');
$obj=json_decode($json,true);



$message=mysqli_real_escape_string($link,$obj['message']);
$reciver=mysqli_real_escape_string($link,$obj['reciverId']);
$sender=mysqli_real_escape_string($link,$obj['senderId']);


if($obj['message']!=""){

   

    $update="UPDATE chat_messages set seen='Yes' WHERE sender_id='$sender' AND reciver_id='$reciver'";
    $result2=mysqli_query($link,$update);
    if($result2){

    // output data of each row


 
    }



}

else{echo json_encode('try again');}

mysqli_close($link); 
?>