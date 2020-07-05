import styled from "styled-components";
import Button from "../button";

export default styled(Button)`
  background-color: #298464;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 700;
  margin: 10px 5px;
  padding: 5px;
  width: 25%;

  @media (max-width: 768px) {
    margin-top: 5px;
    width: 100%;
  }
`;
