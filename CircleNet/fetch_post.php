<?php

 $link=mysqli_connect("localhost","root","","meme");
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
 $load_more_advert=$obj['load_more_advert'];
 
if($load_more_id % 4==0 && $load_more_id >=4 ){
//geting advertisment in every 4th post



$sql2="SELECT * FROM  advertisment LIMIT $load_more_advert, 1";

// Mysql_num_row is counting table row


// If result matched $myusername and $mypassword, table row must be 1 row



$result2 = $link->query($sql2);

if ($result2->num_rows > 0) {
    // output data of each row



    while($row2 = $result2->fetch_assoc()) {

        $load_more_advert++;

$id=$row2['file_name'];
 $advert_text=$row2['advert_text'];  
 $file_name=$row2['file_name'];
 $title='advertisment';  
 

 $dateTime=date('y-m-d H:i:s');
//$posted_on= to_time_ago( time('2019-09-25 23:53:38') - 5); 
$userArray[]=array( 'id' => $dateTime,'user_id' => 'advertisment', 'title' => $title, 'post_text' => $advert_text, 'file_name' => $file_name, 'posted_on' => 'null', 'like' => 'null', 'load_more' => $load_more_id,'name'=>'null','email'=>'null','load_more_advert'=>$load_more_advert);
//$post_data=array("id" => $id,"user_id" => $user_id, "title" => $title, "post_text" => $post_text, "file_name" => $file_name);

    } 
 
    $getPost=1;
   
}
else{  
    
    $load_more_advert=0; 
    $getPost=1;
}






}
else {
    $getPost=1;
}



if ($getPost==1){


$sql="SELECT * FROM posts ORDER BY like_count DESC   LIMIT $load_more_id, 2";

// Mysql_num_row is counting table row


// If result matched $myusername and $mypassword, table row must be 1 row



$result = $link->query($sql);

if ($result->num_rows > 0) {
    // output data of each row

    while($row = $result->fetch_assoc()) {

 $load_more_id++;

 $id=$row['id'];  
 $user_id=$row['user_id'];
 $title=$row['tittle'];  
 $post_text=$row['post_text'];
 $file_name=$row['file_name'];


 $sql2="SELECT * FROM account WHERE username='$user_id' ";

 // Mysql_num_row is counting table row
 
 
 // If result matched $myusername and $mypassword, table row must be 1 row
 
 
 
 $result2 = $link->query($sql2);
 
 if ($result2->num_rows > 0) {
     // output data of each row
 
     while($row2 = $result2->fetch_assoc()) {

        $name=$row2['name'];
        $email=$row2['email'];

     }}






 if($row['like_count']==''){
  $like=0;

 }
 else {
 $like=$row['like_count'];
 }

 $time_ago = strtotime( $row['date_time']);  
$posted_on=to_time_ago($time_ago - 5);

//$posted_on= to_time_ago( time('2019-09-25 23:53:38') - 5); 
$userArray[]=array( 'id' => $id,'user_id' => $user_id, 'title' => $title, 'post_text' => $post_text, 'file_name' => $file_name, 'posted_on' => $posted_on, 'like' => $like, 'load_more' => $load_more_id,'name'=>$name,'email'=>$email,'load_more_advert'=>$load_more_advert);
//$post_data=array("id" => $id,"user_id" => $user_id, "title" => $title, "post_text" => $post_text, "file_name" => $file_name);

    }
  $post_datas=array("results"=>$userArray);
    echo json_encode($post_datas);
}
else echo json_encode('no recored');  

}


function to_time_ago( $time ) { 
      
  // Calculate difference between current 
  // time and given timestamp in seconds 
  $diff = time() - $time; 
    
  if( $diff < 1 ) {  
      return 'less than 1 second ago';  
  } 
    
  $time_rules = array (  
              12 * 30 * 24 * 60 * 60 => 'year', 
              30 * 24 * 60 * 60       => 'month', 
              24 * 60 * 60           => 'day', 
              60 * 60                   => 'hour', 
              60                       => 'minute', 
              1                       => 'second'
  ); 

  foreach( $time_rules as $secs => $str ) { 
        
      $div = $diff / $secs; 

      if( $div >= 1 ) { 
            
          $t = round( $div ); 
            
          return $t . ' ' . $str .  
              ( $t > 1 ? 's' : '' ) . ' ago'; 
      } 
  } 
}







mysqli_close($link); 




?>