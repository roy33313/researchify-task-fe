import { Typography } from "@mui/material";
import "../styles/Home.css";
import ProjectCard from "../components/home/ProjectCard.component";
import TaskItemComponent from "../components/taskCalendar/TaskItemComponent";
import leftImage1 from "../assets/leftImage1.png";
import account_circle from "../assets/account_circle.png";
import "swiper/css";
import "swiper/css/pagination";
import {
  ProjectsContainer,
  StyledChip,
  StyledChipBox,
  StyledChipOther,
  StyledDayWish,
  StyledGreeting,
  StyledHeaderBox,
  StyledHeaderMenu,
  StyledHomeContainer,
} from "../styles/Home.style";
import Navbar from "../components/Navbar.component";

function Home() {
  return (
    <StyledHomeContainer>
      <StyledHeaderBox>
        <StyledHeaderMenu src={leftImage1} alt="top-left" />
        <StyledHeaderMenu src={account_circle} alt="account-image" />
      </StyledHeaderBox>

      <StyledGreeting variant="h1">Hello User!</StyledGreeting>
      <StyledDayWish variant="h4">Have a nice day</StyledDayWish>

      <StyledChipBox>
        <StyledChip label="My Task" />
        <StyledChipOther label="Chip Filled" />
        <StyledChipOther label="Chip Filled" />
      </StyledChipBox>

      <ProjectsContainer>
        <ProjectCard
          projectName="Project 1"
          projectDescription="Front-End Development"
          projectDate="October 20, 2020"
        />

        <ProjectCard
          projectName="Project 2"
          projectDescription="Back-End Development"
          projectDate="October 24, 2020"
        />

        <ProjectCard
          projectName="Project 3"
          projectDescription="MERN Development"
          projectDate="October 28, 2020"
        />

        <ProjectCard
          projectName="Project 4"
          projectDescription="Full-Stack Development"
          projectDate="October 30, 2020"
        />
      </ProjectsContainer>

      <Typography
        style={{
          color: "#2E3A59",
          fontWeight: "600",
          fontSize: "20px",
          marginTop: "28px",
        }}
      >
        Progress
      </Typography>
      <div style={{ marginTop: "22px" }}>
        <TaskItemComponent
          task={{ id: "12345", completed: false, text: "My tasks" }}
        />
        <TaskItemComponent
          task={{ id: "1234", completed: false, text: "Team tasks" }}
        />
      </div>
      <Navbar />
    </StyledHomeContainer>
  );
}

export default Home;
