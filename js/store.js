class Store {
  constructor() {
    if (!localStorage.getItem('watcher')) {
      localStorage.setItem('watcher', JSON.stringify({
        tmdbApiKey: undefined,
        shows: [],
        movies: [],
        f1: [],
      }))
    }
  }

  #getStore() {
    return JSON.parse(localStorage.getItem('watcher'));
  }

  createBackup() {
    return JSON.parse(localStorage.getItem('watcher'));
  }

  applyBackup(store) {
    if (store) {
      localStorage.setItem('watcher', JSON.stringify(store));
    }
  }

  getTmdbApiKey() {
    return this.#getStore().tmdbApiKey;
  }

  saveTmdbApiKey(apiKey) {
    if (apiKey) {
      localStorage.setItem('watcher', JSON.stringify({
        ...this.#getStore(),
        tmdbApiKey: apiKey,
      }));
    }
  }

  getShows() {
    return this.#getStore().shows;
  }

  saveShow(show) {
    if (this.getShows().find((s) => s.id === show.id)) {
      // Replace existing show
      localStorage.setItem('watcher', JSON.stringify({
        ...this.#getStore(),
        shows: [...this.getShows().filter((s) => s.id !== show.id), show],
      }));
    } else {
      // Add new show
      localStorage.setItem('watcher', JSON.stringify({
        ...this.#getStore(),
        shows: [...this.getShows(), show],
      }));
    }
  }

  removeShow(showId) {
    if (this.getShows().find((s) => s.id === showId)) {
      localStorage.setItem('watcher', JSON.stringify({
        ...this.#getStore(),
        shows: this.getShows().filter((s) => s.id !== showId),
      }));
    }
  }

  getMovies() {
    return this.#getStore().movies;
  }

  saveMovie(movie) {
    if (!this.getMovies().find((m) => m.id === movie.id)) {
      localStorage.setItem('watcher', JSON.stringify({
        ...this.#getStore(),
        movies: [...this.getMovies(), movie],
      }));
    }
  }

  removeMovie(movieId) {
    if (this.getMovies().find((m) => m.id === movieId)) {
      localStorage.setItem('watcher', JSON.stringify({
        ...this.#getStore(),
        movies: this.getMovies().filter((m) => m.id !== movieId),
      }));
    }
  }

  getF1() {
    return this.#getStore().f1;
  }

  saveF1(f1Schedule) {
    localStorage.setItem('watcher', JSON.stringify({
      ...this.#getStore(),
      f1: f1Schedule.races.map((r) => new ResultItem({
        id: r.round,
        image: './img/f1.svg',
        name: `${r.name}, ${r.location}`,
        releaseDate: new Date(r.sessions.gp),
      })),
    }));
  }

  removeF1() {
    localStorage.setItem('watcher', JSON.stringify({
      ...this.#getStore(),
      f1: [],
    }));
  }
}
