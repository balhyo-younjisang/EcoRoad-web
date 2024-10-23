import { Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const MotionButton = motion(
  forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
    function MotionButton(props, ref) {
      return <Button ref={ref} {...props} />;
    }
  )
);

const HomePage = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    navigate("/main");
  };

  return (
    <Container
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#596535",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography
        variant="h1"
        color="#FCFBDF"
        fontWeight={700}
        fontFamily={"revert-layer"}
        alignSelf={"center"}
        sx={{ textAlign: "center", marginTop: "20vh" }}
      >
        Eco Road
      </Typography>
      <motion.div
        style={{ position: "absolute", bottom: "10vh" }}
        animate={isAnimating && { top: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleAnimationComplete}
      >
        <MotionButton
          whileTap={{ scale: 0.9 }}
          animate={
            isAnimating && {
              width: "100vw",
              height: "20vh",
            }
          }
          exit={{
            borderRadius: "0 0 20px 20px",
          }}
          transition={{ duration: 1, ease: "easeIn" }}
          style={{
            backgroundColor: "#FCFBDF",
            width: "80vw",
            borderRadius: "10px",
            fontWeight: 700,
            fontSize: "1rem",
          }}
          onClick={handleClick}
        >
          {!isAnimating && "START"}
        </MotionButton>
      </motion.div>
    </Container>
  );
};

export default HomePage;
