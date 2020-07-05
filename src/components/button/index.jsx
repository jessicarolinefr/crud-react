import styled from "styled-components";

export default styled.button`
  align-items: center;
  display: flex;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  justify-content: center;
  text-align: center;
  text-decoration: none;

  &[disabled] {
    opacity: 0.2;
    cursor: default;
  }
`;
