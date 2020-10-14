import styled from "styled-components";

const Select = styled.select`
  background: #ffffff;
  border-radius: 8px;
  font-weight: 700;
  margin-right: 20px;
  padding: 5px;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 5px 0;
    margin: 5px 0;
    width: 100%;
  }
`;

export default Select;
