import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${"#1d242c"}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#d9d9d9" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#16191e",
  color: "#d9d9d9",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
    color: "#d9d9d9",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  backgroundColor: "#16191e",
  color: "#d9d9d9",
  padding: theme.spacing(2),
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="max-w-2xl w-full mx-auto mt-14 rounded-2xl">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What is Beatstreet?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Beatstreet is a free music streaming website that allows you to
            listen to your favorite music anytime, anywhere. The website is
            developed using the MERN stack, which stands for MongoDB, Express,
            React, and Node.js.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>How do I use Beatstreet?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To use Beatstreet, simply visit the website and sign up to create
            playlists, download songs, and save your favorite songs. Once you've
            signed up, start searching for your favorite artists, albums, and
            songs. You can create and manage playlists, download songs, save
            your favorite songs, share songs and playlists with friends, and
            view other users' playlists. Happy listening!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Can I download songs from Beatstreet?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can download songs, albums, and playlists from Beatstreet
            with just one click. However, it is important to note that
            downloading copyrighted material without permission is illegal and
            can result in legal consequences.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            What should I do if I encounter any issues or have feature requests?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you encounter any issues or have feature requests, please submit
            them on the GitHub repository. We're always looking to improve the
            user experience and welcome any feedback you may have. Additionally,
            if you need any further assistance, you can contact me on my Twitter
            handle{"    "}
            <a
              className="text-blue-700 text-xl hover:text-skyBlue"
              href="https://twitter.com/immdipu"
            >
              @immdipu
            </a>
            {"     "}
            or Instagram handle {"     "}
            <a
              className="text-blue-700 text-xl hover:text-skyBlue"
              href="https://instagram.com/immdipu"
            >
              @immdipu
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
