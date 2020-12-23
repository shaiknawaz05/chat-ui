import React, { Component } from "react";
import Avatar from "../chatlist/avatar";

export default class ChatItem extends Component {

  render() {
    return (
      <div
        style={{ animationDelay: `0.5s` }}
        className={`chat__item ${this.props.user ? this.props.user : ""}`}
      >
        <div className="chat__item__content">
          <div className="chat__msg">{this.props.msg}</div>
          
        </div>
        <Avatar isOnline="active" image={this.props.image} />
      </div>
    );
  }
}