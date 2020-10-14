import styled from "styled-components";

const ListItem = styled.li`
  align-items: center;
  border-bottom: 1px solid #2d2d2d;
  cursor: pointer;
  font-weight: 700;
  margin-top: 10px;
  padding: 5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default ListItem;
