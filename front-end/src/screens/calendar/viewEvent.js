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
import ViewMoreText from 'react-native-view-more-text';
import Util from '../util/Util'
import {AsyncStorage} from 'react-native';

import io from "socket.io-client";
import {
  Container,
  Header,
  Title,
  Accordion,
  Tabs,
  Tab,
  Button,
  Content,
  Badge,
  Icon,
  Card,
  CardItem,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";
const img = require("../../assets/default_profile.png");


const dataArray = [
  {
    title: "Discription",
    content:
global.selected_id=''  },
  
];


export default class ViewEvent extends React.Component {
  renderViewMore(onPress){
    return(
      <Text onPress={onPress}>Show more</Text>
    )
  }
  renderViewLess(onPress){
    return(
      <Text onPress={onPress}>Show less</Text>
    )
  }
constructor(props){
    super(props)
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
  global.result=''
  }
  

  setUserID=async() => {

    if(await AsyncStorage.getItem('myUser')){
    let myArray=await AsyncStorage.getItem('myUser');
    let d=JSON.parse(myArray);
    this.setState({myLocalID:d.userID});
   

    }}


    componentDidMount=async()=> {
    this.setUserID();
    this.getEvent();
   
 
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

  startChat=async(e) => {

    console.log(e);
    selected_id=e;
    this.props.navigation.navigate('Chat');
  
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
                 
                  
                  </Text>
                  </Text>
             
                </Body>
                <Right>
             
                  <Text note onPress={() => this.startChat(item.id)}>
                  {item.posted_on}
                  </Text>
               </Right>  
               <Right>
                 
        
               </Right>
              </ListItem>              

              <ViewMoreText
          numberOfLines={1}
          renderViewMore={this.renderViewMore}
          renderViewLess={this.renderViewLess}
          textStyle={{textAlign: 'center'}}
        >
          <Text style={styles.text}>

            {item.discription}
          </Text>
        </ViewMoreText>

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
const styles = StyleSheet.create({

  text: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize: 16,
    color: "#DAA520",
  },
  
});
