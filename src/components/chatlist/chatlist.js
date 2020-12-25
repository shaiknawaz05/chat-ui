import React, { Component } from "react";
import "./chatlist.css";
import ChatListItems from "./chatlistitems";

export default class ChatList extends Component {
  ChatUsers = [
    {
      image:
        "https://pbs.twimg.com/profile_images/1342165429419003904/QfM6Dm4g_400x400.jpg",
      id: 1,
      name: "Robert Downey Jr",
      active: true,
 
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 2,
      name: "Hill",
      active: true,
 
    },
   
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.ChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 5}
                active={item.active ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}