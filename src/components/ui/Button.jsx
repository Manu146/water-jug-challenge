import styled from "styled-components";

const Button = styled.button`
  background-color: #76abae;
  padding: 0.75rem 1rem;
  color: #eeeeee;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 6px;
  border: none;
  transition: background 0.2s ease-in;
  &:hover {
    background-color: #669294;
  }
`;

export default Button;
