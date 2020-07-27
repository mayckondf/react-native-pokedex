import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import SearchInput from '../SearchInput';

const Header = ({ searchController }) => {
  return (
    <Container>
      <SearchInput searchController={searchController} />
    </Container>
  );
};

Header.propTypes = {
  searchController: PropTypes.shape({
    searchWord: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    changeSearchWord: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
  }).isRequired,
};

export default Header;
