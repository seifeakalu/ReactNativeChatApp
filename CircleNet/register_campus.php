<?php

$link=mysqli_connect("localhost","root","","circlenet");
if(!$link){

echo json_encode('db error');

}

else {
 
}
$json=file_get_contents('php://input');
$obj=json_decode($json,true);
$idNo=mysqli_real_escape_string($link,$obj['idNo']);
$campusName=mysqli_real_escape_string($link,$obj['campusName']);
$department=mysqli_real_escape_string($link,$obj['department']);
$section=mysqli_real_escape_string($link,$obj['section']);

if($obj['idNo']!=""){
    $add="INSERT INTO campus(id_number,name ,department, section ) VALUES('$idNo','$campusName','$department','$section') ";
    $result2=mysqli_query($link,$add);
if($result2){
echo json_encode('User Registered Successfully');  
}
else {echo json_encode('Check your internet connection');  
}
}

else{echo json_encode('try again');}

mysqli_close($link); 
?>