<?php

 $link=mysqli_connect("localhost","root","","circlenet");
if(!$link){
$getPost=0;

echo json_encode('db error');

}

else {

 
}

$load_count=0;
$json=file_get_contents('php://input');
$obj=json_decode($json,true);



 $load_more_id=$obj['load_more_id'];
 $user_id=$obj['my_id']; 


$sql="SELECT * FROM users ORDER BY id DESC   LIMIT $load_more_id, 2";

// Mysql_num_row is counting table row


// If result matched $myusername and $mypassword, table row must be 1 row



$result = $link->query($sql);

if ($result->num_rows > 0) {
    // output data of each row

    while($row = $result->fetch_assoc()) {

 $load_more_id++;
 $id=$row['id'];  
 $full_name=$row['full_name'];
 $email=$row['email'];  
 
 
 $count_message=0;
 $sql2="SELECT * FROM chat_messages WHERE reciver_id='$user_id' AND sender_id='$id' AND seen='No'";

// Mysql_num_row is counting table row


// If result matched $myusername and $mypassword, table row must be 1 row



$result2 = $link->query($sql2);

if ($result2->num_rows > 0) {
    // output data of each row

while($row2 = $result2->fetch_assoc()) {
	 $count_message++;
	
}}
 
 
//$posted_on= to_time_ago( time('2019-09-25 23:53:38') - 5); 
$userArray[]=array( 'id' => $id, 'full_name' => $full_name, 'email' => $email, 'typing' => '', 'count_message' => $count_message,  'load_more' => $load_more_id);
//$post_data=array("id" => $id,"user_id" => $user_id, "title" => $title, "post_text" => $post_text, "file_name" => $file_name);

    }
  $post_datas=array("results"=>$userArray);
    echo json_encode($post_datas);
}
else echo json_encode('no recored');  












mysqli_close($link); 




?>