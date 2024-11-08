import React, { Component } from "react";
import { AsyncStorage} from "react-native";

export default class Util extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id:''
      
    };
    global.myLocalID=''
  }

  messageSeen=(message,reciver_id,sender_id)=>{
   // alert("message to database"+ message+"reciver "+reciver_id,"sender "+sender_id);

    fetch('http://192.168.56.1/CircleNet/message_seen.php',{
    method: 'post',
    header:{
   'Accept': 'application/json',
   'Content-type': 'application/json'

   },
    body:JSON.stringify({
    message:message,
    reciverId:reciver_id,
    senderId:sender_id,
   })

})

.then((res)=> res.json())
.then((res)=>{
 return true;
 });

  } 
  
  
 
  
  editFromDataBase=(message_id)=>{
    //alert("message to database"+ message+"reciver "+reciver_id,"sender "+sender_id);

    fetch('http://192.168.56.1/CircleNet/register_chat_messages.php',{
    method: 'post',
    header:{
   'Accept': 'application/json',
   'Content-type': 'application/json'

    },
    body:JSON.stringify({
    message:message,
    reciverId:reciver_id,
    senderId:sender_id,
    })

   })

  .then((res)=> res.json())
  .then((res)=>{

 });

}
  
  
  
  storeMessageToDb=(message,reciver_id,sender_id)=>{
    //alert("message to database"+ message+"reciver "+reciver_id,"sender "+sender_id);

    fetch('http://192.168.56.1/CircleNet/register_chat_messages.php',{
    method: 'post',
    header:{
   'Accept': 'application/json',
   'Content-type': 'application/json'

    },
    body:JSON.stringify({
    message:message,
    reciverId:reciver_id,
    senderId:sender_id,
    })

   })

  .then((res)=> res.json())
  .then((res)=>{

 });

}

  setUserID=async() => {

    if(await AsyncStorage.getItem('myUser')){
    let myArray=await AsyncStorage.getItem('myUser');
    let d=JSON.parse(myArray);
    myLocalID= d.userID;

    }
    else{

        alert("can't find user please login with your account again");
    }
  
  }


 


}


