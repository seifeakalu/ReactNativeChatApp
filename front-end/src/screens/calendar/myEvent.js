import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Image, Dimensions 
  
} from 'react-native';
import Util from '../util/Util'
import {AsyncStorage} from 'react-native';
const delete_icon = require("../../assets/delete.png");
import {
  
  Button,

  Card,

  ListItem,
  Thumbnail,
  
  Body,
  Right
} from "native-base";
const img = require("../../assets/default_profile.png");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const dataArray = [
  {
    title: "Discription",
    content:
global.selected_id=''  },
  
];


 class Event extends React.Component {
  
constructor(props){
    super(props);
    utilities = new Util();
    this.state = {
    event: [],
   
    loading: true,
    loadingimage: true,
    page: 1,
    initial_id: 0,
    load_more_advert: 0,

    render_id:0,
    refreshing:false,
    myLocalID:0,  
    
  };
  global.event_id=''
  }
  

  setUserID=async() => {

    if(await AsyncStorage.getItem('myUser')){
    let myArray=await AsyncStorage.getItem('myUser');
    let d=JSON.parse(myArray);
    this.setState({myLocalID:d.userID},()=>{
      this.getEvent();
      
    });
    

    }}


    componentDidMount=async()=> {
    this.setUserID();
   
 
 
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

 
  updateEvent=async(e) => {


  event_id=e;
  this.props.navigation.navigate('UpdateEvent');


  }
  deleteEvent=async(e) => {
    fetch(`http://192.168.56.1/CircleNet/delete_event.php`,{
      method: 'post',
      header:{
      'Accept': 'application/json',
      'Content-type': 'application/json'
      
      },
      body:JSON.stringify({
  
  
      event_id: e,
      my_id:this.state.myLocalID,
        })
      
      })
      .then(res => res.json())
      .then(res => {
        if(res.includes("deleted")){
       this.deleteEventFromLocalArray(e)
        }
    
      }) .catch((error)=>{
          alert(error)
          });
   alert(e);

   // this.props.navigation.navigate('Chat');
  
  }
  handleRefresh=()=>{

    this.setState({
      render_id:0,
  initial_id:0,
   refreshing:true,
   load_more_advert: 0,
   event: [],

    },()=>{
      this.getEvent();
    })
  };
  deleteEventFromLocalArray = (id: int) => {

    let event = [...this.state.event];
    let index = event.findIndex(el => el.id === id);
    //chatMessagesOld[index] = {...chatMessagesOld[index], messages: "james bond"};
    event.splice(index, 1);
    this.setState({ event });
    this.setState(state => ({
      event: [...state.event],

    }));
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

  fetch(`http://192.168.56.1/CircleNet/fetch_event.php`,{
    method: 'post',
    header:{
    'Accept': 'application/json',
    'Content-type': 'application/json'
    
    },
    body:JSON.stringify({


    load_more_id: initial_id,
    my_id:d.userID,
      })
    
    })
    .then(res => res.json())
    .then(res => {
      this.setState({refreshing: false});
      this.setState({ initial_id:res.results[res.results.length-1].load_more },()=>{
  
      this.setState(state => ({
        event: [...state.event, ...res.results], 
        loading: false,
      }));
      const {people}=this.state;

      });
  
    }) .catch((error)=>{

      this.setState({refreshing: false});
           this.setState({loading: false});
        });
      


},150);


  };

  render() {
    return (

       

      <SafeAreaView style={{ flex: 1 }}  >
       
       
        <FlatList
          data={this.state.event}
             
          renderItem={({ item }) => (

                    
          <Card onPress={() => this.startChat(item.id)} > 

              <ListItem avatar>
                
                <Body>
                  <Text>
                  {item.event}
                  </Text>
                  <Text numberOfLines={1} note onPress={() => this.startChat(item.id)}>
                  {item.on_date}
                  <Text note onPress={() => this.startChat(item.id)}>
                 
                  <Text >{item.created_by}  </Text>
                  <Text>{"   "}</Text>
    
                    <Text onPress={() => this.updateEvent(item.id)}>{"Update"}</Text>
                  </Text>
                  </Text>  
        
                </Body>
                <Right>
             
                  <Text note onPress={() => this.startChat(item.id)}>
                  {item.posted_on}
                  </Text>
               </Right>  
               <Right>
                 <Button transparent  onPress={() => this.deleteEvent(item.id)}>
               <Thumbnail small source={delete_icon}  />
        </Button>
               </Right>
              </ListItem>              
                        
          </Card>

         )}
          ListFooterComponent={
            this.state.loading ? (
              <ActivityIndicator />
            ) : (
              

              <Button
             title="Network or End of post/Refresh"
             color="#026928"
              onPress={() => {
                this.setState(
                  state => ({ page: state.page + 1 }),
                  this.getEvent
                );
          

              }}
            />
              
            )
          }
          keyExtractor={ item => item.id} 
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh} 
          onEndReached={()=>{
            
              console.log('on end reached');
              if(!this.state.loading){
                this.getEvent();
                console.log('on momuntum scroll start'); 
                }
      
          }

          
          }

          onMomentumScrollBegin={()=>{

  
          }}


          onMomentumScrollEnd={()=>{

            console.log('on momuntum scroll end'); 
          }}
          onEndThreshold={0}
        />
      </SafeAreaView>
    );
  }
}
export default Event;