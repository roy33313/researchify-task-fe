import { useState } from "react";
import { Typography, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useRegister from "../hooks/useRegister.hook";
import useLogin from "../hooks/useLogin.hook";
import {
  RegisterLink,
  RegisterText,
  StyledAvatar,
  StyledButton,
  StyledForm,
  StyledPaper,
  StyledTextField,
  StyledTitle,
} from "../styles/Login.style";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {
    handleRegister,
    loading: registerLoading,
    error: registerError,
  } = useRegister();
  const { handleLogin, loading: loginLoading, error: loginError } = useLogin();

  const handleRegisterHere = () => {
    setIsLogin(false);
  };

  const handleLoginNow = () => {
    setIsLogin(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      try {
        const result = await handleLogin(username, password);
        console.log("Login successful:", result);
        setUsername("");
        setPassword("");
      } catch (err) {
        console.error("Login failed:", err);
      }
    } else {
      try {
        const result = await handleRegister(username, password);
        console.log("Registration successful:", result);
        setIsLogin(true);
        setUsername("");
        setPassword("");
      } catch (err) {
        console.error("Registration failed:", err);
      }
    }
  };

  const loading = isLogin ? loginLoading : registerLoading;
  const error = isLogin ? loginError : registerError;

  return (
    <Container component="main" maxWidth="xs">
      <StyledPaper elevation={10}>
        <StyledAvatar>
          <LockOutlinedIcon />
        </StyledAvatar>
        <StyledTitle component="h1" variant="h3">
          Hello User {isLogin ? "Login" : "Register"}!!
        </StyledTitle>
        <StyledForm component="form" noValidate onSubmit={handleSubmit}>
          <StyledTextField
            margin="normal"
            required
            fullWidth
            label="Username"
            autoFocus
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <StyledTextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <StyledButton
            fullWidth
            variant="contained"
            type="submit"
            disabled={loading}
          >
            {isLogin ? "Login" : "Register"}
          </StyledButton>

          {isLogin ? (
            <RegisterText variant="body2" align="center">
              New user?{" "}
              <RegisterLink variant="body2" onClick={handleRegisterHere}>
                Register here
              </RegisterLink>
            </RegisterText>
          ) : (
            <RegisterText variant="body2" align="center">
              Existing user?{" "}
              <RegisterLink variant="body2" onClick={handleLoginNow}>
                Login Now
              </RegisterLink>
            </RegisterText>
          )}

          {error && (
            <Typography
              color="error"
              align="center"
              style={{ marginTop: "1rem" }}
            >
              {error}
            </Typography>
          )}
        </StyledForm>
      </StyledPaper>
    </Container>
  );
}

export default Login;
