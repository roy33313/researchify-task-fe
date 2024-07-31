import { Box, Chip, styled, Typography } from "@mui/material";

export const StyledHomeContainer = styled(Box)(({ theme }) => ({
  padding: "38px",
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  backgroundColor: "#F2F5FF",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "390px",
    margin: "0 auto",
  },
}));

export const StyledGreeting = styled(Typography)(() => ({
  fontWeight: "600",
  textAlign: "left",
  color: "#2E3A59",
  marginTop: "30px",
}));

export const StyledDayWish = styled(Typography)(() => ({
  color: "#9e9e9e",
  marginTop: "5px",
  marginLeft: "2px",
}));

export const ProjectsContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-start", // Align items to the start to have consistent small gaps
  overflowX: "auto",
  gap: "-19px", // Adjust the gap value to your preference
  padding: "16px", // Optional: Add padding for some space around the container
  marginTop: "12px",
}));

export const StyledHeaderBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

export const StyledHeaderMenu = styled("img")(() => ({
  width: "31px",
  height: "28.9px",
  border: "4.53px",
  opacity: "0px",
  color: "#2E3A59",
}));

export const StyledChipBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  marginTop: "32px",
  justifyContent: "space-between",
}));

export const StyledChip = styled(Chip)(() => ({
  width: "100px",
  height: "52px",
  borderRadius: "25px",
  backgroundColor: "#FFFFFF",
  fontWeight: "600",
}));

export const StyledChipOther = styled(Chip)(() => ({
  width: "100px",
  height: "52px",
  borderRadius: "25px",
  backgroundColor: "#E5EAFC",
  fontWeight: "400",
}));
