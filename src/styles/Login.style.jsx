import {
  Avatar,
  Box,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Button } from "bootstrap";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: "40%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  background: "linear-gradient(to bottom, #8433F4, #5541F7)",
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "orange",
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 500,
  color: "#fff",
}));

export const StyledForm = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(1),
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1.5, 0),
  fontSize: "1rem",
  backgroundColor: "orange",
}));

export const RegisterText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: "white", // Changed to white
}));

export const RegisterLink = styled(Typography)(({ theme }) => ({
  display: "inline",
  textDecoration: "underline",
  fontWeight: 600,
  cursor: "pointer",
  color: "white", // Changed to white
}));
