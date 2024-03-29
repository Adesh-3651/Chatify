import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import Chatlist from "../specific/Chatlist";
import { sampleChats } from "../constants/sampleData";
import { useParams } from "react-router-dom";
const AppLayout = () => (WrapppedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("delete", _id, groupChat);
    };
    return (
      <>
        <Title />
        <Header />
        <Grid container style={{ height: "calc(100vh - 4rem)" }}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
            height={"100%"}
          >
            <Chatlist
              chats={sampleChats}
              chatId={chatId}
              newMessageAlert={[
                {
                  chatId,
                  count: 3,
                },
              ]}
              onlineUsers={["1", "2"]}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            {" "}
            <WrapppedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
              padding: "2rem",
              bgcolor: "#070707",
            }}
          >
            third
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
