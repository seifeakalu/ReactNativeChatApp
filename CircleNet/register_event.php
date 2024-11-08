<?php

$link=mysqli_connect("localhost","root","","circlenet");
if(!$link){

echo json_encode('db error');

}

else {
 
}
$json=file_get_contents('php://input');
$obj=json_decode($json,true);
$event=mysqli_real_escape_string($link,$obj['event']);
$discription=mysqli_real_escape_string($link,$obj['discription']);
$date=mysqli_real_escape_string($link,$obj['date']);
$user_id=mysqli_real_escape_string($link,$obj['user_id']);

if($obj['event']!=""){
    $add="INSERT INTO calendar(user_id,on_date ,event, discription ) VALUES('$user_id','$date','$event','$discription') ";
    $result2=mysqli_query($link,$add);
if($result2){
echo json_encode('Event Registered Successfully');  
}
else {echo json_encode('Check your internet connection');  
}
}

else{echo json_encode('try again');}

mysqli_close($link); 
?>