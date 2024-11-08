import React, { Component } from "react";
import {
 
    AsyncStorage,
    ActivityIndicator,
  } from "react-native";
import {
  Container,
  Input,
  Title,
  Content,
  Button,
  Textarea,
  Body,
  Left,
  Right,
  Icon,
  Item,
  Header,
  DatePicker,
  Text,

} from "native-base";
import styles from "./styles";
const img = require("../../assets/default_profile.png");


const dataArray = [
  {
    title: "Discription",
    
  },
  
];


export default class UpdateEvent extends React.Component {
  
constructor(props){
    super(props)
    
    this.state = {
    event: [],
    chosenStartDate:'' ,
    loading: true,
    loadingimage: true,
    page: 1,
    initial_id: 0,
  
    date:'',
    event:'',
    discription:'', 
    
  };
  global.result=''
  global.selected_id=''
  this.setStartDate = this.setStartDate.bind(this);
      
  }
  
  setStartDate(newDate) {
    this.setState({ chosenStartDate: newDate });
  }

    componentDidMount=async()=> {
  alert(event_id)
    this.getEvent();
    

 
  }


  updateEvent=async()=>{
    
  alert( this.state.chosenStartDate.toString().substr(4, 12))
      const {discription}=this.state;
      const {event}=this.state;
      if(event==""){
          alert("Provide event");
    
      }
      
      else if(discription==""){
      
          alert("Provide some discription");
      }
      
      else{
        this.setState({
          
          loading: true
      });
      
      fetch('http://192.168.56.1/CircleNet/update_event.php',{
      method: 'post',
      header:{
      'Accept': 'application/json',
      'Content-type': 'application/json'
      
      },
      body:JSON.stringify({
          
      event:event,
      discription:discription,
      date:this.state.chosenStartDate.toString().substr(4, 12),
      event_id:event_id
      
      })
      
      })
      
      .then((response)=> response.json())
      .then((responseJson)=>{
      alert(responseJson)
      
          this.setState({
          
              loading: false
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

  
  
  _onLoadEnd = () => {
    this.setState({
      loadingimage: false
    })
  }
  _onLoadBegin = () => {
    this.setState({
      loadingimage: true
    })
  }



  getEvent =async() => {
    let d=0;
    if(this.state.refreshing){

      this.setState({ loading: false });
     }
     else
      this.setState({ loading: true });
    const {initial_id}=this.state;
    const {myLocalID}=this.state;
  //  alert(initial_id);
    if(await AsyncStorage.getItem('myUser')){
    let myArray=await AsyncStorage.getItem('myUser');
     d=JSON.parse(myArray);
   

    }

     setTimeout(()=>{

  fetch(`http://192.168.56.1/CircleNet/fetch_event_update.php`,{
    method: 'post',
    header:{
    'Accept': 'application/json',
    'Content-type': 'application/json'
    
    },
    body:JSON.stringify({


    load_more_id: initial_id,
    my_id:d.userID,
    event_id:event_id
      })
    
    })
    .then(res => res.json())
    .then(res => {

      this.setState({ initial_id:res.results[res.results.length-1].load_more,
       event: res.results[res.results.length-1].event,
    date:res.results[res.results.length-1].on_date,
discription:res.results[res.results.length-1].discription },()=>{
    
  
  this.setState({loading: false});

      });
  
    }) .catch((error)=>{

     
           this.setState({loading: false});
        });
      


},150);


  };

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
            <Title>Update Event</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
            <Item regular>
              <Input onChangeText={event=>this.setState({event})} value={this.state.event} placeholder="Event"  />
            </Item>
            <Item regular style={{  marginTop: 20}}>
              <Input placeholder="Say some thing about this event ..." numberOfLines={8} multiline={true}  value={this.state.discription} maxLength={160}  onChangeText={discription=>this.setState({discription})}/>
            </Item>
          <Content padder/><Item regular>
         <Content padder style={{ backgroundColor: "#fff" }}>
         <DatePicker
      
            minimumDate={new Date(1900, 1, 1)}
            maximumDate={new Date(3018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Pick new date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setStartDate}
          />
       </Content></Item>
           <Item regular>
      </Item><Content padder/><Button onPress={this.updateEvent} block primary style={styles.mb15}>
            <Text>Update Event</Text>
          </Button>
          { this.state.loading ? 
              <ActivityIndicator size='large' />
              :null } 
        </Content>
        
      </Container>
    );
  }
}