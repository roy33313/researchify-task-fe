import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import projectImage from "../../assets/punk.png";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function ProjectCard({
  projectName,
  projectDescription,
  projectDate,
}) {
  const typoStyle = { color: "white", display: "inline", marginLeft: "20px" };
  return (
    <SwiperSlide>
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          background: "linear-gradient(90deg, #9C2CF3 0%, #3A49F9 100%)",
          width: "220px",
          height: "220px",
          gap: "0px",
          borderRadius: "15px",
          paddingTop: "60px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "-32px",
            marginLeft: "-50px",
          }}
        >
          <Box
            component="img"
            src={projectImage}
            alt="Descriptive Alt Text"
            sx={{
              width: "30px",
              height: "30px",
              display: "inline",
            }}
          />
          <Typography style={typoStyle}>{projectName}</Typography>
        </div>
        <Typography
          style={{
            color: "white",
            fontWeight: "600",
            marginTop: "25px",
            fontSize: "22px",
          }}
        >
          {projectDescription}
        </Typography>
        <Typography
          style={{
            width: "167px",
            height: "30px",
            color: "white",
            marginTop: "30px",
          }}
        >
          {projectDate}
        </Typography>
      </Paper>
    </SwiperSlide>
  );
}
