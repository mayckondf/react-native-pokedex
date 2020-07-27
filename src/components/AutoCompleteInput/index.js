/* eslint-disable react/forbid-prop-types */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  IconSearch,
  LoadingIndicator,
  Input,
  ResultWrapper,
  InputWrapper,
} from './styles';
import ResultLine from '../ResultLine';

const AutoCompleteInput = ({ loading, results, searchController }) => {
  const inputRef = useRef();
  const {
    searchWord,
    placeholder,
    changeSearchWord,
    submit,
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
        {loading && <LoadingIndicator />}
      </InputWrapper>
      {results.length >= 1 && (
        <ResultWrapper>
          {results.map((result) => (
            <ResultLine data={result} />
          ))}
        </ResultWrapper>
      )}
    </Container>
  );
};

AutoCompleteInput.propTypes = {
  loading: PropTypes.bool,
  results: PropTypes.array,
  searchController: PropTypes.shape({
    searchWord: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    changeSearchWord: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
  }).isRequired,
};

AutoCompleteInput.defaultProps = {
  loading: false,
  results: [],
};

export default AutoCompleteInput;
