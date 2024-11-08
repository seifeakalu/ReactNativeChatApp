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
 $reciver_id=$obj['my_id'];
 $sender_id=$obj['selected_id'];
 


$sql="SELECT * FROM chat_messages WHERE ((sender_id='$reciver_id' AND reciver_id='$sender_id') OR (sender_id='$sender_id' AND reciver_id='$reciver_id')) ORDER BY id DESC   LIMIT $load_more_id";

// Mysql_num_row is counting table row


// If result matched $myusername and $mypassword, table row must be 1 row



$result = $link->query($sql);

if ($result->num_rows > 0) {
    // output data of each row

    while($row = $result->fetch_assoc()) {

 $last_id=$row['id']; 

//$posted_on= to_time_ago( time('2019-09-25 23:53:38') - 5); 
	}
}
else echo json_encode('no recored');  

$sql2="SELECT * FROM chat_messages  WHERE  ((sender_id='$reciver_id' AND reciver_id='$sender_id') OR (sender_id='$sender_id' AND reciver_id='$reciver_id')) AND id>='$last_id'  LIMIT $load_more_id";

// Mysql_num_row is counting table row


// If result matched $myusername and $mypassword, table row must be 1 row

$result2 = $link->query($sql2);

if ($result2->num_rows > 0) {
    // output data of each row

    while($row2 = $result2->fetch_assoc()) {

 $load_more_id++;
 $id=$row2['id']; 
 $sender_id=$row2['sender_id'];
 $reciver_id=$row2['reciver_id'];
 $messages=$row2['chat_messages'];
 $date_time=$row2['date_time'];
//$posted_on= to_time_ago( time('2019-09-25 23:53:38') - 5); 
$userArray[]=array( 'id' => $id,   'sender_id' => $sender_id,'message_from' => 'API', 'reciver_id' => $reciver_id,   'date_time' => $date_time ,'messages' => $messages,  'load_more' => $load_more_id);
//$post_data=array("id" => $id,"user_id" => $user_id, "title" => $title, "post_text" => $post_text, "file_name" => $file_name);

    }
  $post_datas=array("results"=>$userArray);
    echo json_encode($post_datas);
}
else echo json_encode('no recored');  

mysqli_close($link);




?>