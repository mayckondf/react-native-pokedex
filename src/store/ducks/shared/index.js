/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

export const { Types, Creators } = createActions({
  setSearchWord: ['word'],
});

const INITIAL_STATE = {
  searchWord: '',
};

function setSearchWord(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    draft.searchWord = action.word;
  });
}

export default createReducer(INITIAL_STATE, {
  [Types.SET_SEARCH_WORD]: setSearchWord,
});
