import React from "react";
import Icon from "../icon";
import Input from "../input";
import styled from "styled-components";
import PropTypes from "prop-types";

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
  position: relative;
  width: 25%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchIcon = styled(Icon)`
  ${Icon};
  position: absolute;
  padding: 5px;
  cursor: pointer;
`;

const SearchInput = styled(Input)`
  ${Input};
  width: 100%;
  border-radius: 58px;
  border-color: #2d2d2d;
  cursor: pointer;
`;

const Search = ({ value, onClick, onChange }) => (
  <Div>
    <SearchInput data-testid="search-input" onChange={onChange} value={value} />
    <SearchIcon data-testid="search-icon" onClick={onClick}>
      search
    </SearchIcon>
  </Div>
);

Search.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

export default Search;
