import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import QuiltedImageList from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BasicModal from "../components/Modal";

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
      Explore the world in Vegas
    </Typography>
    <Box marginTop={3} sx={{ display: "flex" }}>
      <img
        src="https://media.timeout.com/images/105124791/750/422/image.jpg"
        alt=""
        height={325}
      />
      <QuiltedImageList />
    </Box>
    <Box>
      <Typography variant="h6" component="h4" marginTop={3}>
        About this ticket
      </Typography>
      <Typography variant="body1" marginTop={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        repellendus, accusantium aliquid magni necessitatibus voluptas repellat
        aut quos quia sed reiciendis vel inventore saepe mollitia a deleniti in
        reprehenderit eligendi minus. Quod ab facere alias earum necessitatibus
        nihil ullam magni.
      </Typography>
    </Box>
    <Box marginBottom={10}>
      <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
        Frequently Asked Questions
      </Typography>
      <CustomizedAccordions />
    </Box>

    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BasicModal />
      </BottomNavigation>
    </Paper>
  </Container>
);

export default Tour;
