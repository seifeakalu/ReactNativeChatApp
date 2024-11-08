import React, { Component } from "react";
import { WebView } from "react-native";

export default class FileUploader extends React.Component {
  render() {
    return (
      <WebView
        source={{
          uri: "http://192.168.43.121/CircleNet/file_uploader/file_upload.php",
        }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
