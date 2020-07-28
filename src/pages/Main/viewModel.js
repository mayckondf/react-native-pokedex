/* eslint-disable class-methods-use-this */

class MainViewModel {
  constructor(store) {
    this.store = store;
  }

  getRecentPokemons() {
    return this.store?.pokedex?.recents;
  }
}

export default MainViewModel;
