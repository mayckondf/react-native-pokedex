/* eslint-disable react/forbid-prop-types */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  IconSearch,
  LoadingIndicator,
  Input,
  InputWrapper,
} from './styles';

const AutoCompleteInput = ({ searchController }) => {
  const inputRef = useRef();
  const {
    searchWord,
    placeholder,
    changeSearchWord,
    submit,
    searching,
  } = searchController;

  function inputFocus() {
    inputRef.current.focus();
  }

  function onChangeWord(value) {
    changeSearchWord(value);
  }

  return (
    <Container>
      <InputWrapper onPress={inputFocus}>
        <IconSearch name="search" onPress={inputFocus} />
        <Input
          ref={inputRef}
          value={searchWord}
          multiline={false}
          placeholder={placeholder}
          autoCapitalize="sentences"
          onChangeText={onChangeWord}
          returnKeyType="search"
          maxLength={50}
          autoCorrect={false}
          onSubmitEditing={submit}
          autoCompleteType="off"
        />
        {searching && <LoadingIndicator color="#000" />}
      </InputWrapper>
    </Container>
  );
};

AutoCompleteInput.propTypes = {
  searchController: PropTypes.shape({
    searchWord: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    searching: PropTypes.bool.isRequired,
    changeSearchWord: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
  }).isRequired,
};

export default AutoCompleteInput;
