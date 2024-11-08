import React, { Component } from "react";
import { Image,AsyncStorage,View,ActivityIndicator} from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
 Text,
  Left,
  Right,
  Item,
  Input,
  Picker,
  DatePicker,
  Thumbnail,
  Form
} from "native-base";
const menu = require("../../assets/Menu.png");
import styles from "./styles";
export default class Home extends Component {
    constructor(props){
super(props);
 
this.state={
 selectedGender: "key0",
name:'',
email:'',
username:'',
Password:'',
CPassword:'',
newDate:'',
loading: false,
userID: 0,
responseSuccess:'',
chosenDate: new Date()
}
  
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
	
	onValueChange(value: string) {
    this.setState({
      selectedGender: value
    });
  }

  async  componentDidMount(){

      this.showdata();
      if(await AsyncStorage.getItem('myUser')){

      this.props.navigation.navigate('CampusInfo');
      }

    }

showdata=async()=>{

  let myArray=await AsyncStorage.getItem('myUser');
  let d=JSON.parse(myArray);
  alert(d.name+''+ d.userID);
}

userregister=async()=>{


  

  
const {name}=this.state;
const {email}=this.state;
const {username}=this.state;
const {Password}=this.state;
const {CPassword}=this.state;
const {chosenDate}=this.state;
const {newDate}=this.state;
const {selectedGender}=this.state;
const {responseSuccess}=this.state;
//this.state.chosenDate.toString().substr(4, 12)
let reg =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
console.log(name);
alert(selectedGender);
if(name==""){

alert("Provide your name please");
}

else if(selectedGender==""){

  alert("Provide your gender please");
}

else if(email==""){
  alert("Provide your password please");

}

else if(username==""){
  alert("Provide your username please");

}

else if(Password==""){
  alert("Provide your password please");

}

else if(this.state.chosenDate.toString().substr(4, 12)==""){
  alert("Provide your Birthdate please");

}
else if(!reg.test(email) && email!=""){

 alert("please provide a valid email");
}
else if(Password!=CPassword){

  alert("Please confirm your password");
}
else{

  this.setState({
    
    loading: true
});

fetch('http://192.168.56.1/CircleNet/register.php',{
method: 'post',
header:{
'Accept': 'application/json',
'Content-type': 'application/json'

},
body:JSON.stringify({
    name:name,
    email:email,
    username:username,
    password:Password,
	 gender:selectedGender,
	 birthDate:this.state.chosenDate.toString().substr(4, 12)
})

})

.then((res)=> res.json())
.then((res)=>{

 
  this.setState({ responseSuccess:res.results[res.results.length-1].success },()=>{
 
    if(res.results[res.results.length-1].success.includes("true")){
      alert(res.results[res.results.length-1].userID);
      this.setState({ userID:res.results[res.results.length-1].userID });
     let myArray={
    userID:res.results[res.results.length-1].userID,
    name:name,
    email:email,
    username:username,
    password:Password,
	  gender:selectedGender,
	  birthDate:this.state.chosenDate.toString().substr(4, 12)
}
    AsyncStorage.setItem('myUser',JSON.stringify(myArray));

    alert(res.results[res.results.length-1].userID);
    this.setState({    
      loading: false
  });
    this.props.navigation.navigate('CampusInfo');
    } 

    else{     alert(res.results[res.results.length-1].message); 
    
      this.setState({
    
        loading: false
    });
    }
  });
}) 
.catch((error)=>{

  alert(error);
  this.setState({
    
    loading: false
});
});

  }
 
  
}

    
  render() {

   
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
            <Thumbnail small source={menu}  />
            </Button>
          </Left>
          <Body>
            <Title>Create Account</Title>
          </Body>
          <Right />
        </Header>
      
        <Content padder>

       
        <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
       </View>
          <Form>      
            <Item rounded style={{  marginTop: 5}}>
              <Input placeholder="Full Name" onChangeText={name=>this.setState({name})} />
           
        </Item>
            <Item rounded style={{  marginTop: 20}}>
             <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              style={{ width: undefined }}
              selectedValue={this.state.selectedGender}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Item label="Male" value="key0" />
              <Item label="Female" value="key1" />
             
            </Picker>
                
          <DatePicker
            minimumDate={new Date(1900, 1, 1)}
            maximumDate={new Date(3018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
          />
          <Text>
            Date: {this.state.chosenDate.toString().substr(4, 12)}
          </Text>
     

            </Item>
           
		    <Item rounded style={{  marginTop: 5}}>
              <Input placeholder="Email" onChangeText={email=>this.setState({email})} />
           
        </Item>
		  <Item rounded style={{  marginTop: 5}}>
              <Input placeholder="Username" onChangeText={username=>this.setState({username})} />
           
        </Item>
            <Item rounded  style={{  marginTop: 20}}>
              <Input  placeholder="Password" secureTextEntry={true} onChangeText={Password=>this.setState({Password})}/>
              <Input placeholder="Conifirm Password" secureTextEntry={true} onChangeText={CPassword=>this.setState({CPassword})}/>

            </Item>
           
            <Button   onPress={this.userregister} block primary style={styles.mb15} style={{  marginTop: 20}}>
            <Text>Register</Text>
          </Button>
          
          </Form>
          { this.state.loading ? 
              <ActivityIndicator size='large' />
              :null } 
        </Content>
      
      </Container>
    );
  }
}


