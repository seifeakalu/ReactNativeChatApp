import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Image,
  Dimensions,
} from "react-native";
import Util from "../util/Util";
import { AsyncStorage } from "react-native";
import stylesnew from "./styles";
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
  Right,
} from "native-base";
const img = require("../../assets/default_profile.png");
const back = require("../../assets/Back.png");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const dataArray = [
  {
    title: "Discription",
  },
];

export default class Messages extends React.Component {
  constructor(props) {
    super(props);
    utilities = new Util();
    this.state = {
      people: [],

      loading: true,
      loadingimage: true,
      page: 1,
      initial_id: 0,
      load_more_advert: 0,

      render_id: 0,
      refreshing: false,
      myLocalID: 0,
    };
    global.result = "";
    global.selected_id = "";
  }

  setUserID = async () => {
    if (await AsyncStorage.getItem("myUser")) {
      let myArray = await AsyncStorage.getItem("myUser");
      let d = JSON.parse(myArray);
      this.setState({ myLocalID: d.userID }, () => {
        this.getUsers();
      });
    }
  };

  componentDidMount = async () => {
    this.setUserID();

    this.socket = io("http://192.168.56.1:3000");
    this.socket.on("indicate typing", ({ typer, typed_to }) => {
      if (typed_to == this.state.myLocalID) {
        let people = [...this.state.people];
        let index = people.findIndex((el) => el.id === typer);
        people[index] = { ...people[index], typing: "Typing..." };
        this.setState({ people });

        setTimeout(() => {
          let people = [...this.state.people];
          let index = people.findIndex((el) => el.id === typer);
          people[index] = { ...people[index], typing: "" };
          this.setState({ people });
        }, 4000);
      }
    });
  };

  _onLoadEnd = () => {
    this.setState({
      loadingimage: false,
    });
  };
  _onLoadBegin = () => {
    this.setState({
      loadingimage: true,
    });
  };

  likeCount = () => {
    this.setState({ loading: true });
    let people = [...this.state.people];
    let index = people.findIndex((el) => el.id === "1");
    people[index] = { ...people[index], full_name: "james bond" };
    this.setState({ people });
    this.setState((state) => ({
      people: [...state.people],
      loading: false,
    }));
  };

  startChat = async (e) => {
    console.log(e);
    selected_id = e;
    alert(selected_id);
    this.props.navigation.navigate("Chat");
  };

  handleRefresh = () => {
    this.setState(
      {
        render_id: 0,
        initial_id: 0,
        refreshing: true,
        load_more_advert: 0,
        people: [],
      },
      () => {
        this.getUsers();
      }
    );
  };

  getUsers = async () => {
    let d = 0;
    if (this.state.refreshing) {
      this.setState({ loading: false });
    } else this.setState({ loading: true });
    const { initial_id } = this.state;
    const { myLocalID } = this.state;
    //  alert(initial_id);
    if (await AsyncStorage.getItem("myUser")) {
      let myArray = await AsyncStorage.getItem("myUser");
      d = JSON.parse(myArray);
    }

    setTimeout(() => {
      fetch(`http://192.168.56.1/CircleNet/fetch_user.php`, {
        method: "post",
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          load_more_id: initial_id,
          my_id: d.userID,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({ refreshing: false });
          this.setState(
            { initial_id: res.results[res.results.length - 1].load_more },
            () => {
              this.setState((state) => ({
                people: [...state.people, ...res.results],
                loading: false,
              }));
              const { people } = this.state;
            }
          );
        })
        .catch((error) => {
          this.setState({ refreshing: false });
          this.setState({ loading: false });
        });
    }, 150);
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Thumbnail
                small
                source={back}
                onPress={() => this.startChat(item.id)}
              />
            </Button>
          </Left>
          <Body>
            <Title>Messages</Title>
          </Body>
          <Right />
        </Header>

        <FlatList
          data={this.state.people}
          renderItem={({ item }) => (
            <Card onPress={() => this.startChat(item.id)}>
              <ListItem avatar>
                <Left>
                  <Thumbnail
                    small
                    source={img}
                    onPress={() => this.startChat(item.id)}
                  />
                </Left>
                <Body>
                  <Text>{item.full_name}</Text>
                  <Text
                    numberOfLines={1}
                    note
                    onPress={() => this.startChat(item.id)}
                  >
                    {item.email}
                    <Text note onPress={() => this.startChat(item.id)}>
                      {item.typing != "" ? (
                        <Text>{"  Typing... "} </Text>
                      ) : null}
                    </Text>
                  </Text>
                </Body>
                <Right>
                  <Text note onPress={() => this.startChat(item.id)}>
                    {"Last Online 2 Min Ago"}
                  </Text>
                </Right>
                <Right>
                  {item.count_message != 0 ? (
                    <Badge success style={stylesnew.mb}>
                      <Text>{item.count_message}</Text>
                    </Badge>
                  ) : null}
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
                    (state) => ({ page: state.page + 1 }),
                    this.getUsers
                  );
                }}
              />
            )
          }
          keyExtractor={(item) => item.id}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          onEndReached={() => {
            console.log("on end reached");
            if (!this.state.loading) {
              this.getUsers();
              console.log("on momuntum scroll start");
            }
          }}
          onMomentumScrollBegin={() => {}}
          onMomentumScrollEnd={() => {
            console.log("on momuntum scroll end");
          }}
          onEndThreshold={0}
        />
      </SafeAreaView>
    );
  }
}
