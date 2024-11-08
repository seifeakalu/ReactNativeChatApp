<?php

$link=mysqli_connect("localhost","root","","circlenet");
if(!$link){

echo json_encode('db error');

}

else {

  
}

$json=file_get_contents('php://input');
$obj=json_decode($json,true);


$event_id=mysqli_real_escape_string($link,$obj['event_id']);


    $delete="DELETE FROM calendar WHERE id='$event_id'";
    $result2=mysqli_query($link,$delete);
if($result2){
	
	
    $delete2="DELETE FROM event WHERE calendar_id ='$event_id'";
    $result3=mysqli_query($link,$delete2);
if($result3){
	echo json_encode('event deleted');
}
    // output data of each row

}




mysqli_close($link); 
?>