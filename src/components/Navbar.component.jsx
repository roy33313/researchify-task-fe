import {
  BottomNavigation,
  BottomNavigationAction,
  styled,
} from "@mui/material";
import {
  Home,
  CalendarToday,
  Notifications,
  Person,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledBottomNavigation = styled(BottomNavigation)({
  width: "100%",
  position: "fixed",
  bottom: 0,
  borderTop: "1px solid #F0F0F0",
  backgroundColor: "#F2F5FF",
});

const StyledBottomNavigationAction = styled(BottomNavigationAction)(
  ({ theme, selected }) => ({
    color: "#D8DEF3",
    "&.Mui-selected": {
      color: "#5541F7",
    },
    "& .MuiSvgIcon-root": {
      fontSize: 28,
      transition: "all 0.3s",
    },
    "& .MuiBottomNavigationAction-label": {
      color: selected ? "#5541F7" : "#D8DEF3",
    },
    ...(selected && {
      "& .MuiSvgIcon-root": {
        background: "linear-gradient(to bottom, #8433F4, #5541F7)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    }),
  })
);

const Navbar = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname.includes("/tasks")) {
      setValue(1);
    } else {
      setValue(0);
    }
  }, []);
  return (
    <StyledBottomNavigation value={value} showLabels>
      <StyledBottomNavigationAction
        icon={<Home />}
        selected={value === 0}
        onClick={() => navigate("/home")}
      />
      <StyledBottomNavigationAction
        icon={<CalendarToday />}
        selected={value === 1}
        onClick={() => navigate("/tasks")}
      />
      <StyledBottomNavigationAction
        icon={<Notifications />}
        selected={value === 2}
      />
      <StyledBottomNavigationAction icon={<Person />} selected={value === 3} />
    </StyledBottomNavigation>
  );
};

export default Navbar;
