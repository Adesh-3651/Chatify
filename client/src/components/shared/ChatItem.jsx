import React, { memo } from 'react'
import {Link} from '../styles/StyledComponents'
import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'



const ChatItem = ({
    avatar=[],
    name,
    _Id,
    groupChat,
    sameSender,
    IsOnline,
    newMessageAlert,
    index=0,
    handleDeleteChat,

}) => {
  return (
  <Link to={`/chat/${_Id}`} 
  onContextMenu={(e)=>handleDeleteChat(e,_Id,groupChat)}>
    <div style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: sameSender ? "black": "unset",
        color:sameSender ? "white" : "unset",
        justifyContent: "space-between",
        position: "relative",
    }}>
        {avatar}
        <Stack>
            <Typography variant="h6">{name}</Typography>
            {
                newMessageAlert &&(
                    <Typography>{newMessageAlert.count}New Message</Typography>
                )
            }
        </Stack>
{
    IsOnline && <Box sx={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "green",
        position: "absolute",
        top:"50%",
        right: "1rem",
        transform: "translateY(-50%)",
    }}/>
}


    </div>
  </Link>
  )
}

export default memo(ChatItem)