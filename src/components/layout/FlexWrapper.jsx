import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default FlexWrapper;
