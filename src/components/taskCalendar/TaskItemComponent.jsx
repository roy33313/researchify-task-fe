import {
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Box,
  Checkbox,
  styled,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

const TaskItem = styled(ListItem)({
  backgroundColor: "white",
  borderRadius: "12px",
  marginBottom: "12px",
  padding: "16px",
  boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
});

const TaskIcon = styled(Box)({
  width: "40px",
  height: "40px",
  borderRadius: "8px",
  background: "linear-gradient(to bottom, #8433F4, #5541F7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "16px",
});

const StyledCheckbox = styled(Checkbox)({
  color: "white",
  "&.Mui-checked": {
    color: "white",
  },
});

const MenuDots = styled(MoreVert)({
  color: "#D8DEF3",
});

const TaskItemComponent = ({ task, onToggle }) => {
  return (
    <TaskItem>
      <TaskIcon>
        <StyledCheckbox
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
      </TaskIcon>
      <ListItemText
        primary={
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
          </Typography>
        }
        secondary={
          <Typography variant="body2" color="#8F9BB3">
            2 Days ago
          </Typography>
        }
      />
      <IconButton edge="end">
        <MenuDots />
      </IconButton>
    </TaskItem>
  );
};

export default TaskItemComponent;
