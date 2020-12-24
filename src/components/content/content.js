import React, { useEffect, useRef, useState } from "react";
import Avatar from "../chatlist/avatar";
import ChatItem from "./ChatItem";
import "./content.css";

function ChatContent() {
    const messagesEndRef = useRef();
    const [msg, setMsg] = useState("");
    const data = [
        {
            key: 1,
            image:
                "https://pbs.twimg.com/profile_images/1342167159544299521/SU8IjfGy_400x400.jpg",
            type: "",
            msg: "Hi Robert, How are you?",
        },
        {
            key: 2,
            image:
                "https://pbs.twimg.com/profile_images/1342165429419003904/QfM6Dm4g_400x400.jpg",
            type: "other",
            msg: "I am fine.",
        },
        {
            key: 3,
            image:
                "https://pbs.twimg.com/profile_images/1342165429419003904/QfM6Dm4g_400x400.jpg",
            type: "other",
            msg: "What about you?",
        },
        {
            key: 4,
            image:
                "https://pbs.twimg.com/profile_images/1342167159544299521/SU8IjfGy_400x400.jpg",
            type: "",
            msg: "Awesome these days.",
        },
        {
            key: 5,
            image:
                "https://pbs.twimg.com/profile_images/1342165429419003904/QfM6Dm4g_400x400.jpg",
            type: "other",
            msg: "Finally. What's the plan this weekend?",
        },
        {
            key: 6,
            image:
                "https://pbs.twimg.com/profile_images/1342167159544299521/SU8IjfGy_400x400.jpg",
            type: "",
            msg: "what plan mate?",
        },
        {
            key: 7,
            image:
                "https://pbs.twimg.com/profile_images/1342165429419003904/QfM6Dm4g_400x400.jpg",
            type: "other",
            msg: "lets go to ooty",
        },
        {
          key: 8,
          image:
              "https://pbs.twimg.com/profile_images/1342167159544299521/SU8IjfGy_400x400.jpg",
          type: "",
          msg: "okay sure..",
      },
    ];
    const [chatItms, setChatItems] = useState([]);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(() => {
        scrollToBottom();
        let i = 0;
        setInterval(() => {
            setChatItems(data.slice(0, i));
            i = i + 1;
            scrollToBottom();
            if (i - 2 === data.length) i = 0;
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ ]);
    return (
        <div className="main__chatcontent">
            <div className="content__header">
                <div className="blocks">
                    <div className="current-chatting-user">
                        <Avatar
                            image="https://pbs.twimg.com/profile_images/1342165429419003904/QfM6Dm4g_400x400.jpg"
                        />
                       <strong> <p>Robert Downey Jr</p>
                       </strong>
                    </div>
                </div>

                <div className="blocks">
                    <div className="settings">
                        <button className="btn-nobg">
                            <i className="fa fa-cog"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="content__body">
                <div className="chat__items">
                    {chatItms.map((itm, index) => {
                        return (
                            <ChatItem
                                key={index}
                                user={itm.type ? itm.type : "me"}
                                msg={itm.msg}
                                image={itm.image}
                            />
                        );
                    })}
                    <div ref={messagesEndRef} />
                </div>
            </div>
            <div className="content__footer">
                <div className="sendNewMessage">
                    <button className="addFiles">
                        <i className="fa fa-plus"></i>
                    </button>
                    <input
                        type="text"
                        placeholder="Type a message here"
                        onChange={(e) => setMsg(e.target.value)}
                        value={msg}
                    />
                    <button className="btnSendMsg" id="sendMsgBtn">
                        <i className="fa fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChatContent;
