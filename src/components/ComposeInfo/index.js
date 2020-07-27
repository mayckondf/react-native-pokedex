/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  TitleLine,
  TextLine,
  Title,
  Text,
  MultiLineIcon,
} from './styles';

const ComposeInfo = ({ info }) => {
  return (
    <Container>
      <TitleLine>
        <Title>{`${info.title}: `}</Title>
      </TitleLine>
      {info.descriptions.map((description, index) => {
        return (
          <TextLine
            key={index}
            action={info.action}
            onPress={() => info.action(index)}
          >
            <MultiLineIcon name="caret-right" action={info.action} />
            <Text action={info.action}>{description.text}</Text>
          </TextLine>
        );
      })}
    </Container>
  );
};

ComposeInfo.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    descriptions: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
    action: PropTypes.func,
  }).isRequired,
};

export default ComposeInfo;
