import styled from "styled-components";

const ListItem = styled.li`
  align-items: center;
  border-bottom: 1px solid #2d2d2d;
  font-weight: 700;
  margin-top: 10px;
  padding: 5px;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 780px) {
    width: 90%;
  }
`;

export default ListItem;
