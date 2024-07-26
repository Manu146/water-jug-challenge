import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin-top: 1rem;
`;

const Input = styled.input.attrs((props) => ({
  type: "range",
  style: {
    background: `linear-gradient(to right, #62898b ${props.$progress}%, #4e5665 ${props.$progress}%)`,
  },
}))`
  -webkit-appearance: none;
  appearance: none;
  border-radius: 0.5rem;
  height: 0.5rem;
  cursor: pointer;
  width: 6rem;
  background: linear-gradient(to right, #62898b 20%, #4e5665 20%);

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: -4px;
    background-color: #76abae;
    border-radius: 6rem;
    height: 1rem;
    width: 1rem;
    transition: 0.2s ease-in-out;
  }

  &:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 13px rgba(106, 154, 156, 0.2);
  }

  &:active::-webkit-slider-thumb {
    box-shadow: 0 0 0 13px rgba(106, 154, 156, 0.2);
  }

  &::-webkit-slider-thumb:hover {
    box-shadow: 0 0 0 13px rgba(106, 154, 156, 0.1);
  }

  &::-moz-range-thumb {
    background-color: #76abae;
    border: none;
    border-radius: 6rem;
    height: 1rem;
    width: 1rem;
    transition: 0.2s ease-in-out;
  }

  &:focus::-moz-range-thumb {
    box-shadow: 0 0 0 13px rgba(106, 154, 156, 0.2);
  }

  &::-moz-range-thumb:hover {
    box-shadow: 0 0 0 13px rgba(106, 154, 156, 0.1);
  }

  &:focus::-moz-range-thumb {
    box-shadow: 0 0 0 13px rgba(106, 154, 156, 0.2);
  }
`;

export default function Slider({ value, setValue, max }) {
  let progress = (value / max) * 100;
  return (
    <Container>
      <Input
        $progress={progress}
        value={value}
        max={max}
        min={0}
        onInput={(e) => {
          setValue(e.target.value);
        }}
      />
    </Container>
  );
}
