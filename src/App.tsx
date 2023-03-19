import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 350px;
  height: 200px;
  background-color: #e98fd8;
  border-radius: 8px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  background-color: #ffffff;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  margin-bottom: 50px;
  gap: 10px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
`;

const Btn = styled(motion.button)`
  width: 80px;
  height: 50px;
  :hover {
    color: rgb(241, 196, 15);
    background-color: black;
  }
`;

const hoverVar = {
  hover: (i: string) => ({
    scale: 1.2,
    x: i === "1" || i === "3" ? -30 : i === "2" || i === "4" ? 30 : 0,
    y: i === "1" || i === "2" ? -15 : i === "3" || i === "4" ? 15 : 0,
  }),
};

function App() {
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState<null | string>(null);
  const toggle = () => setClicked((prev) => !prev);

  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((i) =>
          i === "1" ? (
            <Box
              key={i}
              layoutId={i}
              onClick={() => setId(i)}
              variants={hoverVar}
              whileHover="hover"
              custom={i}
              transition={{ type: "linear", duration: 0.15 }}
            />
          ) : i === "2" ? (
            <Box
              key={i}
              layoutId={i}
              onClick={() => setId(i)}
              variants={hoverVar}
              whileHover="hover"
              custom={i}
              transition={{ type: "linear", duration: 0.15 }}
            >
              <AnimatePresence>
                {!clicked ? <Circle layoutId="circle" /> : null}
              </AnimatePresence>
            </Box>
          ) : i === "3" ? (
            <Box
              key={i}
              layoutId={i}
              onClick={() => setId(i)}
              variants={hoverVar}
              whileHover="hover"
              custom={i}
              transition={{ type: "linear", duration: 0.15 }}
            >
              <AnimatePresence>
                {clicked ? <Circle layoutId="circle" /> : null}
              </AnimatePresence>
            </Box>
          ) : (
            <Box
              key={i}
              layoutId={i}
              onClick={() => setId(i)}
              variants={hoverVar}
              whileHover="hover"
              custom={i}
              transition={{ type: "linear", duration: 0.15 }}
            />
          )
        )}
      </Grid>
      <Btn onClick={toggle}>Switch</Btn>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
          >
            <Box layoutId={id} style={{ backgroundColor: "white" }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
