import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  Thumbnail,
} from "native-base";
import styles from "./style";
const Home = require("../../assets/Home.png");
const Message = require("../../assets/Message.png");
const Calendar = require("../../assets/Calander.png");
const AskAnswer = require("../../assets/QA.png");
const Storage = require("../../assets/Storage.png");
const drawerCover = require("../../../assets/logo2.png");
const drawerImage = require("../../../assets/logo1.png");
const datas = [
  
  {
    name: "Home",
    route: "Home",
    icon: "Home"  ,
    bg: "#C5F442"
  },
  {
    name: "Messages",
    route: "Messages",
    icon: "Message"  ,
    bg: "#C5F442"
  },
  {
    name: "Calendar",
    route: "Calendar",
    icon: "Calendar"  ,
    bg: "#C5F442"
  },
  {
    name: "Ask/Answer",
    route: "AskAnswer",
    icon: "AskAnswer"  ,
    bg: "#C5F442"
  },
  {
    name: "Storage",
    route: "Storage",
    icon: "Storage"  ,
    bg: "#C5F442"
  },
 
  /*{
    name: "Header",
    route: "Header",
    icon: "arrow-up",
    bg: "#477EEA",
    types: "11"
  },
  {
    name: "Footer",
    route: "Footer",
    icon: "arrow-down",
    bg: "#DA4437",
    types: "4"
  },
  {
    name: "Accordion",
    route: "NHAccordion",
    icon: "repeat",
    bg: "#C5F442",
    types: "5"
  },
  {
    name: "Actionsheet",
    route: "Actionsheet",
    icon: "easel",
    bg: "#C5F442"
  },
  {
    name: "Badge",
    route: "NHBadge",
    icon: "notifications",
    bg: "#4DCAE0"
  },
  {
    name: "Button",
    route: "NHButton",
    icon: "radio-button-off",
    bg: "#1EBC7C",
    types: "9"
  },
  {
    name: "Card",
    route: "NHCard",
    icon: "keypad",
    bg: "#B89EF5",
    types: "8"
  },
  {
    name: "Check Box",
    route: "NHCheckbox",
    icon: "checkmark-circle",
    bg: "#EB6B23"
  },
  {
    name: "Date Picker",
    route: "NHDatePicker",
    icon: "calendar",
    bg: "#EB6B23"
  },
  {
    name: "Deck Swiper",
    route: "NHDeckSwiper",
    icon: "swap",
    bg: "#3591FA",
    types: "2"
  },
  {
    name: "Fab",
    route: "NHFab",
    icon: "help-buoy",
    bg: "#EF6092",
    types: "2"
  },
  {
    name: "Form & Inputs",
    route: "NHForm",
    icon: "call",
    bg: "#EFB406",
    types: "12"
  },
  {
    name: "Icon",
    route: "NHIcon",
    icon: "information-circle",
    bg: "#bfe9ea",
    types: "4"
  },
  {
    name: "Layout",
    route: "NHLayout",
    icon: "grid",
    bg: "#9F897C",
    types: "5"
  },
  {
    name: "List",
    route: "NHList",
    icon: "lock",
    bg: "#5DCEE2",
    types: "8"
  },
  {
    name: "ListSwipe",
    route: "ListSwipe",
    icon: "code-working",
    bg: "#C5F442",
    types: "3"
  },
  {
    name: "Picker",
    route: "NHPicker",
    icon: "arrow-dropdown",
    bg: "#F50C75"
  },
  {
    name: "Radio",
    route: "NHRadio",
    icon: "radio-button-on",
    bg: "#6FEA90"
  },
  {
    name: "SearchBar",
    route: "NHSearchbar",
    icon: "search",
    bg: "#29783B"
  },
  {
    name: "Segment",
    route: "Segment",
    icon: "menu",
    bg: "#0A2C6B",
    types: "3"
  },
  {
    name: "Spinner",
    route: "NHSpinner",
    icon: "navigate",
    bg: "#BE6F50"
  },
  {
    name: "Tabs",
    route: "NHTab",
    icon: "home",
    bg: "#AB6AED",
    types: "3"
  },
  {
    name: "Thumbnail",
    route: "NHThumbnail",
    icon: "image",
    bg: "#cc0000",
    types: "2"
  },
  {
    name: "Toast",
    route: "NHToast",
    icon: "albums",
    bg: "#C5F442",
    types: "6"
  },
  {
    name: "Typography",
    route: "NHTypography",
    icon: "paper",
    bg: "#48525D"
  }*/
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#000080", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
        

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                {data.icon == 'Home'?
            
                <Thumbnail square small source={Home}  />
            
                  :null } 
                  {data.icon == 'Message'?
            
            <Thumbnail square small source={Message}  width={10}/>
        
              :null } 
               {data.icon == 'Calendar'?
            
            <Thumbnail square small source={Calendar}  />
        
              :null } 
               {data.icon == 'AskAnswer'?
            
            <Thumbnail square small source={AskAnswer}  />
        
              :null } 
                {data.icon == 'Storage'?
            
            <Thumbnail square small source={Storage}  />
        
              :null } 
            
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
