import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, useState,lazy} from "react";
import { black, orange, white } from "../constants/color";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { Group as GroupIcon,  } from "@mui/icons-material";
import { Logout as LogoutIcon } from "@mui/icons-material";
import { Notifications as NotificationIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";










const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroups, setIsNewGroups] = useState(false);
  const [isNotifications, setIsNotifications] = useState(false);

  const navigate = useNavigate();
  
  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };
  const openSearchDialog = () => {
    setIsSearch((prev) => !prev);
  };
  const openNewGroup = () => {
    setIsNewGroups((prev) => !prev);
  };

  const openNotification = () => {
    setIsNotifications((prev) => !prev);
  };
  const navigateToGroups = () => navigate("/groups");
  const logoutHandler = () => {};

const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notification"));
const NewGroupsDialog = lazy(() => import("../dialog/NewGroups"));

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: black,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              Chat App
            </Typography>
            <Box
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                },
              }}
            >
              <Tooltip title="Menu">
                <IconButton color="inherit " onClick={handleMobile}>
                  <MenuIcon
                    sx={{
                      color: white,
                    }}
                  />
                </IconButton>
              </Tooltip>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
              }}
            />
            <Box>
              <IconBtn
                icon={
                  <SearchIcon
                    sx={{
                      color: white,
                    }}
                  />
                }
                title="Search"
                onClick={openSearchDialog}
              />
              <IconBtn
                icon={
                  <AddIcon
                    sx={{
                      color: white,
                    }}
                  />
                }
                title="Create Group"
                onClick={openNewGroup}
              />

              <IconBtn
                icon={
                  <GroupIcon
                    sx={{
                      color: white,
                    }}
                  />
                }
                title="Groups"
                onClick={navigateToGroups}
              />

              <IconBtn
                icon={
                  <NotificationIcon
                    sx={{
                      color: white,
                    }}
                  />
                }
                title="Notification Group"
                onClick={openNotification}
              />

              <IconBtn
                icon={
                  <LogoutIcon
                    sx={{
                      color: white,
                    }}
                  />
                }
                title="Logout"
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {
        isSearch && <Suspense fallback={<Backdrop open/>}>
          <SearchDialog open={isSearch} onClose={openSearchDialog} />
        </Suspense>
      }

{
        isNotifications && <Suspense fallback={<Backdrop open/>}>
          <NotificationDialog open={isSearch} onClose={openSearchDialog} />
        </Suspense>
      }

{
        isNewGroups && <Suspense fallback={<Backdrop open/>}>
          <NewGroupsDialog open={isSearch} onClose={openSearchDialog} />
        </Suspense>
      }
    </>
  );
};

const IconBtn = ({ icon, title, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit " size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
