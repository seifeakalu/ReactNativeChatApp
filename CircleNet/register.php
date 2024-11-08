<?php

$link=mysqli_connect("localhost","root","","circlenet");
if(!$link){

echo json_encode('db error');

}

else {

  
}

$json=file_get_contents('php://input');
$obj=json_decode($json,true);



$name=mysqli_real_escape_string($link,$obj['name']);
$email=mysqli_real_escape_string($link,$obj['email']);
$gender=mysqli_real_escape_string($link,$obj['gender']);
$username=mysqli_real_escape_string($link,$obj['username']);
$password=mysqli_real_escape_string($link,$obj['password']);
$birthDate=mysqli_real_escape_string($link,$obj['birthDate']);

if($obj['email']!=""){

$sql="SELECT * FROM users WHERE username='$username'";
$result=mysqli_query($link,$sql);
if($result->num_rows>0){
  $userArray[]=array( 'success' => 'false', 'message'=>'this user already exist', 'userID' => 0 );
//$post_data=array("id" => $id,"user_id" => $user_id, "title" => $title, "post_text" => $post_text, "file_name" => $file_name);
$post_datas=array("results"=>$userArray);
    echo json_encode($post_datas);

}

else {
   

    $add="INSERT INTO users(full_name,birthdate,gender,email,username,password) VALUES('$name','$birthDate','$gender','$email','$username','$password') ";
    $result2=mysqli_query($link,$add);
if($result2){


$sql="SELECT * FROM users WHERE username='$username'";

// Mysql_num_row is counting table row


// If result matched $myusername and $mypassword, table row must be 1 row



$result = $link->query($sql);

if ($result->num_rows > 0) {
    // output data of each row

    while($row = $result->fetch_assoc()) {

 $userID=$row['id'];  
   }
//$posted_on= to_time_ago( time('2019-09-25 23:53:38') - 5); 
$userArray[]=array( 'success' => 'true', 'message'=>'this user registered successfully', 'userID' => $userID );
//$post_data=array("id" => $id,"user_id" => $user_id, "title" => $title, "post_text" => $post_text, "file_name" => $file_name);
$post_datas=array("results"=>$userArray);
    echo json_encode($post_datas);
  
  


}
 
}

}

}

else{echo json_encode('try again');}

mysqli_close($link); 
?>