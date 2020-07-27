/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

export const { Types, Creators } = createActions({
  findPokemons: ['filter'],
  addIntoRecents: ['pokemon'],
});

const INITIAL_STATE = {
  recents: [],
};

function addIntoRecents(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    if (action.pokemon) {
      const alreadyIn = draft.recents.find(
        (item) => item.id === action.pokemon.id
      );
      if (alreadyIn) {
        const listOfRecents = draft.recents;
        const index = listOfRecents.findIndex(
          (pokemon) => pokemon.id === action.pokemon.id
        );
        listOfRecents.splice(index, 1);
        listOfRecents.unshift(action.pokemon);
        draft.recents = listOfRecents;
      } else {
        const listOfRecents = draft.recents.slice(0, 5);
        listOfRecents.unshift(action.pokemon);
        draft.recents = listOfRecents;
      }
    }
  });
}

export default createReducer(INITIAL_STATE, {
  [Types.ADD_INTO_RECENTS]: addIntoRecents,
});
