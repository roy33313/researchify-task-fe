import {
  Box,
  Typography,
  IconButton,
  Button,
  List,
  styled,
} from "@mui/material";
import { ArrowBack, Search, Add } from "@mui/icons-material";
import { useState } from "react";
import HorizontalDateRange from "../components/taskCalendar/HorizontalDateRange";
import Footer from "../components/Navbar.component";
import TaskItemComponent from "../components/taskCalendar/TaskItemComponent";
import SelectDropdown from "../components/taskCalendar/SelectDropdown";
import { INITIAL_TASKS, STATUS_OPTIONS } from "../constants/common.constant";
import Navbar from "../components/Navbar.component";

const StyledBox = styled(Box)(({ theme }) => ({
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

const HeaderCalendarBox = styled(Box)({
  borderBottomLeftRadius: "20px",
  borderBottomRightRadius: "20px",
  backgroundColor: "white",
  padding: "16px",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
});

const HeaderBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
});

const TaskList = styled(List)({
  flexGrow: 1,
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
});

const AddTaskButton = styled(Button)({
  background: "linear-gradient(to bottom, #8433F4, #5541F7)",
  borderRadius: "20px",
  padding: "8px 16px",
  color: "white",
  "&:hover": {
    background: "linear-gradient(to bottom, #7023E4, #4531E7)",
  },
});

const TaskSection = styled(Box)({
  flex: 1, // Take up remaining space
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  backgroundColor: "#F2F5FF",
  overflowY: "auto",
});

const TaskHeader = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  color: "#2E3A59",
});

const StatusText = styled(Typography)({
  fontSize: "16px",
  color: "#2E3A59",
});

const TaskCalendar = () => {
  const [status, setStatus] = useState("");
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [currentDate, setCurrentDate] = useState(new Date());
  const formattedDate = currentDate.toLocaleString("default", {
    month: "short",
    year: "numeric",
  });

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleTaskToggle = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const selectedDay = (val) => {
    console.log(val);
  };

  return (
    <StyledBox>
      <HeaderCalendarBox>
        <HeaderBox>
          <IconButton>
            <ArrowBack sx={{ color: "#2E3A59" }} />
          </IconButton>
          <IconButton>
            <Search sx={{ color: "#2E3A59" }} />
          </IconButton>
        </HeaderBox>

        <HeaderBox>
          <Typography variant="h3" fontWeight="bold" color="#2E3A59">
            {formattedDate}
          </Typography>
          <AddTaskButton startIcon={<Add />}>Add Task</AddTaskButton>
        </HeaderBox>
        <HorizontalDateRange onChange={selectedDay} />
      </HeaderCalendarBox>

      <TaskSection>
        <TaskHeader>Tasks</TaskHeader>
        <StatusText>Status</StatusText>
        <SelectDropdown
          value={status}
          onChange={handleStatusChange}
          options={STATUS_OPTIONS}
        />

        <TaskList>
          {tasks.map((task) => (
            <TaskItemComponent
              key={task.id}
              task={task}
              onToggle={handleTaskToggle}
            />
          ))}
        </TaskList>
      </TaskSection>
      <Navbar />
    </StyledBox>
  );
};

export default TaskCalendar;
