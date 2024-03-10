import {
  Button,
  TextField,
  Container,
  Paper,
  Typography,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import useInputValidation from '6pp'
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const name=useInputValidation("");
  const Bio=useInputValidation("");
  const username =useInputValidation("");
  const Password=useInputValidation("");

  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                maxWidth: "100%",
                marginTop: "1rem",
              }}
            >
              <TextField
                required
                fullWidth
                margin="normal"
                label="Username"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                margin="normal"
                label="Password"
                type="password"
                variant="outlined"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
              <Typography textAlign={"center"}>OR</Typography>
              <Button
                fullWidth
                variant="text"
                color="secondary"
                type="button"
                onClick={toggleLogin}
              >
                Register
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">SignUp</Typography>
            <form
              style={{
                maxWidth: "100%",
                marginTop: "1rem",
              }}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                ></Avatar>
                <IconButton
                  sx={{
                    position: "absolute",
                  }}
                >
                  <>
                    <label htmlFor="icon-button-file">
                      <CameraAltIcon />
                      <VisuallyHiddenInput
                        type="file"
                        accept="image/*"
                        id="icon-button-file"
                      />
                    </label>
                  </>
                </IconButton>
              </Stack>

              <TextField
                required
                fullWidth
                margin="normal"
                label="Name"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                margin="normal"
                label="Bio"
                type="text"
                variant="outlined"
                value={Bio.value}
                onChange={Bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                margin="normal"
                label="Username"
                type="text"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                required
                fullWidth
                margin="normal"
                label="Password"
                type="password"
                variant="outlined"
                value={Password.value}
                onChange={Password.changeHandler}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                SignUp
              </Button>
              <Typography textAlign={"center"}>OR</Typography>
              <Button
                fullWidth
                variant="text"
                color="secondary"
                type="button"
                onClick={toggleLogin}
              >
                Login
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
