import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export default Div;
