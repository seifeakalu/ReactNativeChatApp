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

class PostEvent extends Component {
    constructor(props){
        super(props);
        this.state = {
            discription:'',
            event:'',
            myLocalID:0,
            loading: false,
            chosenStartDate: new Date() 
            }
       
    
        this.setStartDate = this.setStartDate.bind(this);
      
      }
    
      setStartDate(newDate) {
        this.setState({ chosenStartDate: newDate });
      }


      componentDidMount = async () => {
     
        this.setUserID();
        
        
      }
      setUserID = async () => {

        if (await AsyncStorage.getItem('myUser')) {
          let myArray = await AsyncStorage.getItem('myUser');
          let d = JSON.parse(myArray);
          this.setState({ myLocalID: d.userID });
    
        }
      }

      submitEvent=async()=>{
  
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
        
        fetch('http://192.168.56.1/CircleNet/register_event.php',{
        method: 'post',
        header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
        
        },
        body:JSON.stringify({
            
        event:event,
        discription:discription,
        date:this.state.chosenStartDate.toString().substr(4, 12),
        user_id:this.state.myLocalID,
        
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
            <Title>Post Event</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
            <Item regular>
              <Input onChangeText={event=>this.setState({event})} placeholder="Event"  />
            </Item>
            <Item regular style={{  marginTop: 20}}>
              <Input placeholder="Say some thing about this event ..." numberOfLines={8} multiline={true}   maxLength={160}  onChangeText={discription=>this.setState({discription})}/>
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
            placeHolderText="Pick date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setStartDate}
          />
          <Text>
            Date: {this.state.chosenStartDate.toString().substr(4, 12)}
          </Text> 
       </Content></Item>
           <Item regular>
      </Item><Content padder/><Button onPress={this.submitEvent} block primary style={styles.mb15}>
            <Text>Submit Event</Text>
          </Button>
          { this.state.loading ? 
              <ActivityIndicator size='large' />
              :null } 
        </Content>
        
      </Container>
    );
  }
}

export default PostEvent;
