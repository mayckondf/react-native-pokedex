import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Text } from './styles';

const SimpleInfo = ({ info }) => {
  return (
    <Container>
      <Title>{`${info.title}: `}</Title>
      <Text>{info.description}</Text>
    </Container>
  );
};

SimpleInfo.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default SimpleInfo;
