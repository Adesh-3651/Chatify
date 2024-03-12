import React from 'react'
import { Stack } from '@mui/material'
import ChatItem from '../shared/ChatItem';

const Chatlist = ({
    w = "100%",
    chats = [],
    chatId,
    onlineUsers = [],
    newMessageAlert = [
      {
        chatId: "",
        count: "",
      },
    ],
    handleDeleteChat,
  }) => {
    return (<Stack width={w} direction={"column"}>
  
      {chats?.map((data,index) =>{
        const {avatar,name,_Id,groupChat,members} = data;
        console.log(data);
        const newMessageAlertData = newMessageAlert.find(
            ({ chatId }) => chatId === _Id
            );
            const IsOnline = members?.some((member) =>onlineUsers.includes(_Id));
          return <ChatItem
          key={index}
          index={index}
            avatar={avatar}
            name={name}
            _Id={_Id}
            groupChat={groupChat}
            newMessageAlert={newMessageAlertData}
            IsOnline={IsOnline}
            handleDeleteChat={handleDeleteChat}
            sameSender={chatId === _Id}
            
          />;
      })}
  
    </Stack>
    );   
  };

export default Chatlist