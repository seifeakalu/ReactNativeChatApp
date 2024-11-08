import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Tabs,
  Tab,
  Right,
Thumbnail,
  Footer,
  FooterTab,
  Left,
  Body
} from "native-base";
const menu = require("../../assets/Menu.png");
import MyEvent from "./myEvent";
import ViewEvent from "./viewEvent";

import {

  
  Icon,
  Text,

    Item,
    Input
   
  } from "native-base";
class BasicTab extends Component {
  constructor(props) {
    super(props);
    global.serachInput=0;
    this.state = {
      myEvent: false,
      viewEvent: false,
     
      value:''
    };

  }
  
  toggleTab1() {
    this.setState({
      myEvent: true,
      viewEvent: false,
    
    });
  }



  render() {
    return (
      <Container>
        <Header hasTabs>
        <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Thumbnail small source={menu}  />
            </Button>
          </Left>
          <Body>
            <Title>Calendar</Title>
          </Body>
          <Right />
        </Header>
     
        <Tabs>
          
          <Tab heading="View Event">
            <ViewEvent navigation={this.props.navigation}/>
          </Tab>
          <Tab heading="Events">
            <MyEvent  navigation={this.props.navigation}/>
          </Tab>
          
        </Tabs>
        <Footer>
          <FooterTab>
            <Button active={this.state.tab1}  onPress={() => this.props.navigation.navigate('PostEvent')}>
              <Text>Post Event</Text>
            </Button>
           
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default BasicTab;
