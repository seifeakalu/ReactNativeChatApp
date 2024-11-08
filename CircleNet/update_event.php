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
$event_id=mysqli_real_escape_string($link,$obj['event_id']);
if($obj['date']==""){
    $update="UPDATE calendar set event='$event', discription='$discription' WHERE id='$event_id'";
    $result2=mysqli_query($link,$update);
if($result2){
echo json_encode('Event Updated Successfully');  
}
else {echo json_encode('Check your internet connection');  
}
}


else if ($obj['date']!=""){
    $update="UPDATE calendar set event='$event', discription='$discription',on_date='$date' WHERE id='$event_id'";
    $result2=mysqli_query($link,$update);
if($result2){
echo json_encode('Event Updated Successfully');  
}
else {echo json_encode('Check your internet connection');  
}
}
else{echo json_encode('try again');}

mysqli_close($link); 
?>