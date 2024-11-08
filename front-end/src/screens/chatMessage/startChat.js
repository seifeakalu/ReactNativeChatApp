import React, { Component } from "react";
import { TypingAnimation } from "react-native-typing-animation";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import io from "socket.io-client";
import {
  Header,
  Title,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
  Picker,
  Item,
} from "native-base";
const img = require("../../assets/default_profile.png");
import Util from "../util/Util";
export default class Messages extends Component {
  constructor(props) {
    super(props);
    utilities = new Util();
    this.state = {
      chatMessage: "",
      chatMessages: [],
      chatMessagesOld: [],
      reiver_id: "",
      sender_id: "",
      render_id: 0,
      initial_id: 5,
      loading: true,
      refreshing: true,
      updateMessageId: 0,
      messageToBeUpdated: "",
      messageToBeUpdatedFrom: "",
      page: 1,
      myLocalID: 0,
      image: null,
      local_chat_id: 0,
      Socket_message: "",
      api_message: "",
      selectedItem: undefined,
      selected1: "key1",
      message_for_delete: "null",
      typing: 0,
      results: {
        items: [],
      },
    };
  }

  updateMessageFromDataBase = (id: int) => {
    fetch("http://192.168.56.1/CircleNet/update_chat_messages.php", {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        message_id: id,
        message_from: this.state.messageToBeUpdatedFrom,
        message_to_be_updated: this.state.chatMessage,
        oldMessage: this.state.messageToBeUpdated,
        my_id: this.state.myLocalID,
        receiver_id: selected_id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.updateMessageLocalArray(id);
        this.setState({ updateMessageId: 0 }, () => {
          this.setState({ chatMessage: "" });
        });
      })
      .catch((error) => {
        this.setState({ updateMessageId: 0 }, () => {
          this.setState({ chatMessage: "" });
        });
      });
  };

  deleteMessageFromDataBase = (
    id: int,
    message_from: string,
    value: string
  ) => {
    fetch("http://192.168.56.1/CircleNet/delete_chat_messages.php", {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        message_id: id,
        message_from: message_from,
        message_to_be_deleted: this.state.message_for_delete,
        my_id: this.state.myLocalID,
        receiver_id: selected_id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.deleteMessageFromLocalArray(id);
      });
  };

  updateMessageSocketLocalArray = (id: int, updatedMessage: String) => {
    let chatMessagesOld = [...this.state.chatMessagesOld];
    let index = chatMessagesOld.findIndex((el) => el.id === id);
    chatMessagesOld[index] = {
      ...chatMessagesOld[index],
      messages: updatedMessage,
    };
    this.setState({ chatMessagesOld });
  };
  updateMessageLocalArray = (id: int) => {
    let chatMessagesOld = [...this.state.chatMessagesOld];
    let index = chatMessagesOld.findIndex((el) => el.id === id);
    chatMessagesOld[index] = {
      ...chatMessagesOld[index],
      messages: this.state.chatMessage,
    };
    this.setState({ chatMessagesOld });
  };
  typingIndicator = () => {
    this.socket.emit("typing indicator", {
      typer_id: this.state.myLocalID,
      typed_to: selected_id,
    });
  };

  deleteMessageFromLocalArray = (id: int) => {
    let chatMessagesOld = [...this.state.chatMessagesOld];
    let index = chatMessagesOld.findIndex((el) => el.id === id);
    //chatMessagesOld[index] = {...chatMessagesOld[index], messages: "james bond"};
    chatMessagesOld.splice(index, 1);
    this.setState({ chatMessagesOld });
    this.setState((state) => ({
      chatMessagesOld: [...state.chatMessagesOld],
    }));
  };

  onValueChange(id: int, message_from: string, message: string, value: string) {
    this.setState({
      selected1: value,
    });
    if (value == "key0" && message_from == "API") {
      this.setState({ updateMessageId: id }, () => {
        this.setState({ messageToBeUpdatedFrom: message_from }, () => {});

        this.setState({ message: message_from }, () => {});

        this.setState({ chatMessage: message }, () => {
          alert(this.state.chatMessage);
        });
      });
    }
    if (value == "key0" && message_from == "Socket") {
      this.setState({ updateMessageId: id }, () => {
        this.setState({ messageToBeUpdatedFrom: message_from }, () => {});

        this.setState({ chatMessage: message }, () => {
          this.setState({ messageToBeUpdated: this.state.chatMessage }, () => {
            alert("should be updated " + this.state.messageToBeUpdated);
          });
        });
      });
    }
    if (value == "key1" && message_from == "API") {
      this.updateMessageFromDataBase(id);
    }
    if (value == "key1" && message_from == "Socket") {
      this.editSocketMessage(id);
      this.updateMessageFromDataBase(id);
    }
    if (value == "key2" && message_from == "API") {
      this.deleteMessageFromDataBase(id, message_from, message);
      this.deleteMessageSocket(id, message_from);
    }
    if (value == "key2" && message_from == "Socket") {
      this.setState({ message_for_delete: message }, () => {
        this.deleteMessageSocket(id, message_from);
        this.deleteMessageFromDataBase(id, message_from, message);
      });
    }
  }

  renderDate = (date) => {
    return <Text style={styles.time}>{date}</Text>;
  };
  renderDateSend = (date) => {
    return <Text style={styles.timeSend}>{date}</Text>;
  };

  setUserID = async () => {
    if (await AsyncStorage.getItem("myUser")) {
      let myArray = await AsyncStorage.getItem("myUser");
      let d = JSON.parse(myArray);
      this.setState({ myLocalID: d.userID }, () => {
        this.getPrevChatMessage();
      });
    }
  };
  editMessage = async (e) => {
    console.log(e);
    alert(e);
  };
  componentDidMount = async () => {
    this.setUserID();
    utilities.messageSeen("default", selected_id, this.state.myLocalID);
    this.socket = io("http://192.168.56.1:3000");

    this.socket.on("chat message", ({ messages, ids, message_id }) => {
      if (ids == this.state.myLocalID) {
        //this.setState({ chatMessages: [...this.state.chatMessages, messages] });
        const { chatMessagesOld } = this.state;

        let local_chat_id = this.state.local_chat_id;
        local_chat_id++;
        this.setState({ local_chat_id: local_chat_id });

        // alert(this.state.local_chat_id);
        chatMessagesOld.push({
          id: message_id,
          message_from: "Socket",
          sender_id: 0,
          messages: messages,
          load_more: 0,
        });
        utilities.messageSeen(messages, ids, this.state.myLocalID);
        this.setState({
          Socket_message: messages,
        });
      }
    });

    this.socket.on(
      "delete message",
      ({ id, requester_id, selected_user_id }) => {
        if (
          requester_id == selected_id &&
          selected_user_id == this.state.myLocalID
        ) {
          this.deleteMessageFromLocalArray(id);
        }
      }
    );

    this.socket.on(
      "update message",
      ({ id, requester_id, selected_user_id, updatedMessage }) => {
        if (
          requester_id == selected_id &&
          selected_user_id == this.state.myLocalID
        ) {
          this.updateMessageSocketLocalArray(id, updatedMessage);
        }
      }
    );

    this.socket.on("indicate typing", ({ typer, typed_to }) => {
      if (typer == selected_id && typed_to == this.state.myLocalID) {
        this.setState({ typing: 1 });
        setTimeout(() => {
          this.setState({ typing: 2 });
        }, 1000);
        setTimeout(() => {
          this.setState({ typing: 3 });
        }, 2000);
        setTimeout(() => {
          this.setState({ typing: 0 });
        }, 4000);
      }
    });
  };

  deleteMessageSocket(id: int, message_from: string, value: string) {
    this.socket.emit("delete message", {
      id: id,
      message_from: message_from,
      value: value,
      requester_id: this.state.myLocalID,
      selected_user_id: selected_id,
    });
  }

  updateMessageFromSocket(id: int, message_from: string, value: string) {
    this.socket.emit("update message", {
      id: id,
      message_from: message_from,
      message_to_be_updated: this.state.chatMessage,
      value: value,
      requester_id: this.state.myLocalID,
      selected_user_id: selected_id,
    });
  }

  submitChatMessage() {
    if (this.state.updateMessageId == 0) {
      const { chatMessagesOld } = this.state;
      let local_chat_id = this.state.local_chat_id;
      local_chat_id++;
      this.setState({ local_chat_id: local_chat_id }, () => {
        // alert(this.state.local_chat_id);
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var time = new Date().getTime();
        // alert("date is"+date +year+month);
        this.socket.emit("chat message", {
          id: local_chat_id,
          message: this.state.chatMessage,
          reciver_id: selected_id,
          sender_id: this.state.myLocalID,
        });
        chatMessagesOld.push({
          id: local_chat_id,
          sender_id: this.state.myLocalID,
          message_from: "Socket",
          messages: this.state.chatMessage,
          load_more: 0,
          date_time: year + "-" + month + "-" + date,
        });
        utilities.storeMessageToDb(
          this.state.chatMessage,
          selected_id,
          this.state.myLocalID
        );
        this.setState({ chatMessage: "" });
      });
    } else {
      //this.updateMessageFromSocket(this.state.updateMessageId);

      this.updateMessageFromDataBase(this.state.updateMessageId);
      this.updateMessageFromSocket(this.state.updateMessageId);
      alert(
        "message wil be update  " +
          this.state.chatMessage +
          " id " +
          this.state.updateMessageId
      );
    }
  }
  handleRefresh = () => {
    this.setState(
      {
        render_id: 0,
        initial_id: this.state.initial_id + 5,
        refreshing: true,
        load_more_advert: 0,
        chatMessagesOld: [],
      },
      () => {
        this.getPrevChatMessage();
      }
    );
  };

  getUnseenMessages = () => {
    if (this.state.refreshing) {
      this.setState({ loading: false });
    } else this.setState({ loading: true });
    const { initial_id } = this.state;
    //  alert(initial_id);

    setTimeout(() => {
      fetch(`http://192.168.56.1/CircleNet/fetch_unseen_messages.php`, {
        method: "post",
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          target_user_id: selected_id,
          my_id: this.state.myLocalID,
          load_more_id: initial_id,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({ refreshing: false });

          this.setState(
            { initial_id: res.results[res.results.length - 1].load_more },
            () => {
              if (
                this.state.Socket_message !=
                res.results[res.results.length - 1].messages
              ) {
                this.setState((state) => ({
                  chatMessagesOld: [...state.chatMessagesOld, ...res.results],
                  loading: false,
                }));
                this.setState({ Socket_message: "" });
              } else {
                this.setState({ Socket_message: "" });

                this.setState({ loading: false });
              }
              const { people } = this.state;
            }
          );
        })
        .catch((error) => {
          this.setState({ refreshing: false });
          this.setState({ loading: false });
        });
    }, 10);
  };
  getPrevChatMessage = () => {
    if (this.state.refreshing) {
      this.setState({ loading: false });
    } else this.setState({ loading: true });
    const { initial_id } = this.state;
    //  alert(initial_id);

    setTimeout(() => {
      fetch(`http://192.168.56.1/CircleNet/fetch_messages.php`, {
        method: "post",
        header: {
          Accept: "application/json",
          "Content-type": "application/json",
        },

        body: JSON.stringify({
          load_more_id: initial_id,
          my_id: this.state.myLocalID,
          selected_id: selected_id,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({ refreshing: false });
          this.setState({
            local_chat_id: res.results[res.results.length - 1].id,
          });
          this.setState(
            { initial_id: res.results[res.results.length - 1].load_more },
            () => {
              utilities.messageSeen(
                "default",
                selected_id,
                this.state.myLocalID
              );
              this.setState((state) => ({
                chatMessagesOld: [...state.chatMessagesOld, ...res.results],
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
    }, 50);
  };

  render() {
    let { image } = this.state;
    const chatMessages = this.state.chatMessages.map((chatMessage) => (
      <Text key={chatMessage}>{chatMessage}</Text>
    ));

    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Thumbnail
                  small
                  source={img}
                  onPress={() => this.startChat(item.id)}
                />
              </Button>
            </Left>

            <Body>
              <Title>Messages</Title>

              {this.state.typing == 1 ? (
                <Right>
                  <Text>Typing.</Text>
                </Right>
              ) : null}
              {this.state.typing == 2 ? (
                <Right>
                  <Text>Typing..</Text>
                </Right>
              ) : null}
              {this.state.typing == 3 ? (
                <Right>
                  <Text>Typing...</Text>
                </Right>
              ) : null}
            </Body>

            <Right />
          </Header>

          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}

          <FlatList
            data={this.state.chatMessagesOld}
            renderItem={({ item }) => (
              <View>
                {item.sender_id != this.state.myLocalID ? (
                  <View style={[styles.item]}>
                    <Thumbnail
                      small
                      source={img}
                      onPress={() => this.startChat(item.id)}
                    />
                    <View
                      style={[styles.balloon]}
                      onPress={() => this.editMessage(item.id)}
                    >
                      <Text onPress={() => this.editMessage(item.id)}>
                        {item.messages}
                      </Text>
                    </View>
                  </View>
                ) : null}
                {item.sender_id == this.state.myLocalID ? (
                  <View style={[styles.itemRecive, styles.itemOut]}>
                    <Picker
                      note
                      mode="dropdown"
                      style={{ width: 30 }}
                      onValueChange={this.onValueChange.bind(
                        this,
                        item.id,
                        item.message_from,
                        item.messages
                      )}
                    >
                      <Item label="Cancel " value="key4" />
                      <Item label="Edit" value="key0" />
                      <Item label="Share" value="key1" />
                      <Item label="Delete" value="key2" />
                    </Picker>
                    <View
                      style={[styles.balloon]}
                      onPress={() => this.editMessage(item.id)}
                    >
                      <Text onPress={() => this.editMessage(item.id)}>
                        {item.messages +
                          "                                                                 "}
                      </Text>
                    </View>
                    <View></View>

                    <Thumbnail
                      small
                      source={img}
                      onPress={() => this.startChat(item.id)}
                    />
                  </View>
                ) : null}
                {item.sender_id == this.state.myLocalID ? (
                  <Text>{this.renderDateSend(item.date_time)} </Text>
                ) : null}
                {item.sender_id != this.state.myLocalID ? (
                  <Text>{this.renderDate(item.date_time)} </Text>
                ) : null}
              </View>
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
                      this.getPrevChatMessage
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
                this.getUnseenMessages();
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

        <TextInput
          style={styles.inputs}
          style={{ height: 40, borderWidth: 2 }}
          onChange={this.typingIndicator}
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={(chatMessage) => {
            this.setState({ chatMessage });
          }}
        />

        {chatMessages}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 17,
  },
  footer: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#eeeeee",
    paddingHorizontal: 10,
    padding: 5,
  },
  btnSend: {
    backgroundColor: "#00BFFF",
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: "center",
    justifyContent: "center",
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
    alignSelf: "flex-end",
  },
  itemIn: {
    alignSelf: "flex-start",
  },
  itemOut: {
    alignSelf: "flex-end",
  },
  time: {
    alignSelf: "flex-end",
    margin: 15,
    fontSize: 12,
    color: "#808080",
  },
  timeSend: {
    alignSelf: "flex-end",
    margin: 15,
    fontSize: 12,
    color: "#808080",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#eeeeee",
    borderRadius: 50,
    padding: 5,
    width: 300,
  },
  itemRecive: {
    marginVertical: 14,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#DAA520",
    borderRadius: 50,
    padding: 5,
    width: 300,
  },
});
