import styled from "styled-components";

export default styled.button`
  align-items: center;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  justify-content: center;
  text-align: center;
  text-decoration: none;

  &[disabled] {
    cursor: default;
    opacity: 0.2;
  }
`;
