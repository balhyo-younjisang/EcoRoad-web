import { Box, Container } from "@mui/material";

const HomePage = () => {
  return (
    <Container
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#596535",
        alignItems: "center",
      }}
    >
      <Box
        width={"100vw"}
        height={"20vh"}
        borderRadius={"0px 0px 20px 20px"}
        style={{
          backgroundColor: "#FCFBDF",
        }}
      ></Box>
    </Container>
  );
};

export default HomePage;
