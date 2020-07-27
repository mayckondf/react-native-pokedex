/* eslint-disable class-methods-use-this */

import { GetPokemons } from '~/services/GetPokemons';

class PokedexViewModel {
  constructor(store) {
    this.store = store;
  }

  async searchPokemon({ name }) {
    const filter = {};
    filter.name = name;
    const pokemons = await GetPokemons(filter);
    return pokemons;
  }
}

export default PokedexViewModel;
