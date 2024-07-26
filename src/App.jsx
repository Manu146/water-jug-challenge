import { createGlobalStyle } from "styled-components";
import MainContainer from "./components/layout/MainContainer";
import FlexWrapper from "./components/layout/FlexWrapper";
import Slider from "./components/ui/Slider";
import Jug from "./components/Jug";
import JugsContainer from "./components/layout/JugsContainer";
import Button from "./components/ui/Button";
import Paragraph from "./components/ui/Paragraph";
import getSolution from "./utils";
import Solution from "./components/Solution";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    background-color: #222831;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;

function App() {
  const [xCapacity, setXCapacity] = useState(0);
  const [yCapacity, setYCapacity] = useState(0);
  const [zCapacity, setZCapacity] = useState(0);
  const [solution, setSolution] = useState(null);
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <h1>Water Jug Challenge</h1>
        <FlexWrapper>
          <div>
            <Paragraph>
              The challenge involves using two jugs with different capacities (X
              liters and Y liters) to measure exactly Z liters of water. Try
              different capacities to see if there is a solution!
            </Paragraph>
            <JugsContainer>
              <div>
                <h3>Jug X</h3>
                <Jug capacity={xCapacity} />
                <Slider value={xCapacity} setValue={setXCapacity} max={100} />
              </div>
              <div>
                <h3>Jug Y</h3>
                <Jug capacity={yCapacity} />
                <Slider value={yCapacity} setValue={setYCapacity} max={100} />
              </div>
              <div>
                <h3>Jug Z</h3>
                <Jug capacity={zCapacity} />
                <Slider value={zCapacity} setValue={setZCapacity} max={100} />
              </div>
            </JugsContainer>
          </div>
          <div>
            <Button
              onClick={() =>
                setSolution(
                  getSolution(
                    parseInt(xCapacity),
                    parseInt(yCapacity),
                    parseInt(zCapacity)
                  )
                )
              }
            >
              Find a solution!
            </Button>
            {solution !== null && <Solution sol={solution} />}
          </div>
        </FlexWrapper>
      </MainContainer>
    </>
  );
}

export default App;
