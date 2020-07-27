import { combineReducers } from 'redux';
import pokedex from './pokedex';
import shared from './shared';

const reducers = combineReducers({
  pokedex,
  shared,
});

export default reducers;
