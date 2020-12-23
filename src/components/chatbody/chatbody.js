import React, { Component } from "react";
import "./chatbody.css";
import ChatContent from '../content/content'
import ChatList from "../chatlist/chatlist";

export default class ChatBody extends Component {
  render() {
    return (
      <div className="mainchatbody">
        <ChatList />
       <ChatContent />
      </div>
    );
  }
}