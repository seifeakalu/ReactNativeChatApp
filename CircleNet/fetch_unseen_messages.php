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
  $to=$obj['target_user_id'];

 $my_id=$obj['my_id'];

$sql2="SELECT * FROM chat_messages  WHERE  reciver_id='$my_id' AND sender_id='$to' AND seen='No'";

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
$userArray[]=array( 'id' => $id,   'sender_id' => $sender_id, 'reciver_id' => $reciver_id,   'date_time' => $date_time ,'messages' => $messages,  'load_more' => $load_more_id);
//$post_data=array("id" => $id,"user_id" => $user_id, "title" => $title, "post_text" => $post_text, "file_name" => $file_name);



    }
  $post_datas=array("results"=>$userArray);
    echo json_encode($post_datas);
	
	 $sql91 = "UPDATE chat_messages SET seen='Yes' WHERE reciver_id='$my_id' AND sender_id='$to' AND seen='No'";
         
          if (mysqli_query($link, $sql91)) {
           
           
            } else {
                echo "ERROR: Could not able to execute $sql91. " . mysqli_error($link);
              }
	
}
else echo json_encode('no recored');  

mysqli_close($link);




?>