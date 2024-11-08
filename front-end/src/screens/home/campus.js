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
  Form
} from "native-base";

import styles from "./styles";
export default class CampusInfo extends Component {
    constructor(props){
super(props);
 
this.state={
idNo:'',
campusName:'',
department:'',
section:'',

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

   
      if(await AsyncStorage.getItem('myCampus')){

      this.props.navigation.navigate('SelectSubject');
      }

    }


campusRegister=async()=>{


  if(await AsyncStorage.getItem('myCampus')){

alert("you have account already you have to logout first");

  }
  else{

  
const {idNo}=this.state;
const {campusName}=this.state;
const {department}=this.state;
const {section}=this.state;
if(idNo==""){

alert("Provide your id number please");
}

else if(campusName==""){

  alert("Provide your campus please");
}

else if(department==""){
  alert("Provide your department please");

}

else if(section==""){
  alert("Provide your section please");
}
else{
  this.setState({
    
    loading: true
});

fetch('http://192.168.43.121/CircleNet/register_campus.php',{
method: 'post',
header:{
'Accept': 'application/json',
'Content-type': 'application/json'

},
body:JSON.stringify({
	
	idNo:idNo,
campusName:campusName,
department:department,
section:section

})

})

.then((response)=> response.json())
.then((responseJson)=>{


    if(responseJson.includes("Successfully")){
     let myArray={
  idNo:idNo,
campusName:campusName,
department:department,
section:section
}
AsyncStorage.setItem('myCampus',JSON.stringify(myArray));

    alert( responseJson);
  

    this.setState({
    
      loading: false
  });

    this.props.navigation.navigate('AddCampus');

    }

    else{     alert(responseJson); 
    
      this.setState({
    
        loading: false
    });
    }
})
.catch((error)=>{

  alert(error);
  this.setState({
    
    loading: false
});
});

  }
 
  }
}

    
  render() {

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Campus Information</Title>
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
              <Input placeholder="School Id" onChangeText={idNo=>this.setState({idNo})} />
           
        </Item>
            <Item rounded style={{  marginTop: 20}}>
             
       <Input placeholder="Campus Name" onChangeText={campusName=>this.setState({campusName})} />
     

            </Item>
           
		    <Item rounded style={{  marginTop: 5}}>
              <Input placeholder="Deparment" onChangeText={department=>this.setState({department})} />
           
        </Item>
		  <Item rounded style={{  marginTop: 5}}>
              <Input placeholder="section" onChangeText={section=>this.setState({section})} />
           
        </Item>
            
           
            <Button   onPress={this.campusRegister} block primary style={styles.mb15} style={{  marginTop: 20}}>
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


