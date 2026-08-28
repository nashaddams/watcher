/**
 * Object for show and movie search result objects
 */
class SearchResultItem {
  constructor({
    id = undefined,
    image = './img/placeholder.svg',
    name = undefined,
    releaseDate = undefined,
  }) {
    this.id = id,
    this.image = image;
    this.name = name;
    this.releaseDate = releaseDate;
  }
}

/**
 * Object for saved show and movie objects
 */
class SavedItem {
  constructor({
    id = undefined,
    image = './img/placeholder.svg',
    name = undefined,
    releaseDate = undefined,
    details = undefined,
    status = undefined,
    genres = [],
    episodes = [],
    imdbUrl = undefined,
  }) {
    this.id = id,
    this.image = image;
    this.name = name;
    this.releaseDate = releaseDate;
    this.details = details;
    this.status = status;
    this.genres = genres;
    this.episodes = episodes;
    this.imdbUrl = imdbUrl;
  }
}

class RecentUpcomingItem {
  constructor({
    id = undefined,
    image = './img/placeholder.svg',
    name = undefined,
    releaseDate = undefined,
    episodeNumber = 0,
    seasonNumber = 0,
    showName = undefined,
  }) {
    this.id = id,
    this.image = image;
    this.name = name;
    this.releaseDate = releaseDate;
    this.episodeNumber = episodeNumber;
    this.seasonNumber = seasonNumber;
    this.showName = showName;
  }
}

class Api {
  apiKey = undefined;
  baseUrl = 'https://api.themoviedb.org/3';
  baseImgUrl = 'https://image.tmdb.org/t/p/w500';
  baseImdbUrl = 'https://www.imdb.com/title';

  constructor(apiKey) {
    if (apiKey) {
      this.apiKey = apiKey;
    }
  }

  initializeApiKey(apiKey) {
    this.apiKey = apiKey;
  }

  async fetchShows(searchText) {
    const res = await fetch(
      `${this.baseUrl}/search/tv?api_key=${this.apiKey}&query=${searchText}`
    );
    const { results: shows } = await res.json();

    return shows.map((s) => new SearchResultItem({
      id: s.id,
      image: s.poster_path ? `${this.baseImgUrl}/${s.poster_path}` : './img/placeholder.svg', // or backdrop_path
      name: s.name, // or original_name
      releaseDate: s.first_air_date ? new Date(s.first_air_date) : undefined,
    }));
  }

  async fetchShowDetails(showId) {
    const res = await fetch(
      `${this.baseUrl}/tv/${showId}?api_key=${this.apiKey}`
    );
    const show = await res.json();
    const seasonPaths = [...Array(show.number_of_seasons).keys()].map(k => `season/${k + 1}`);
    const showWithDetailsRes = await fetch(
      `${this.baseUrl}/tv/${show.id}?api_key=${this.apiKey}&append_to_response=external_ids,${seasonPaths.join()}`
    );
    const showWithDetails = await showWithDetailsRes.json();
    const episodes = seasonPaths.flatMap((sp) => {
      if (showWithDetails[sp]) {
        return showWithDetails[sp].episodes;
      }
    });

    return new SavedItem({
      id: showWithDetails.id,
      image: showWithDetails.poster_path
        ? `${this.baseImgUrl}/${showWithDetails.poster_path}`
        : './img/placeholder.svg', // or backdrop_path
      name: showWithDetails.name, // or original_name
      details: showWithDetails.overview,
      releaseDate: showWithDetails.first_air_date
        ? new Date(showWithDetails.first_air_date)
        : undefined,
      status: showWithDetails.status,
      genres: showWithDetails.genres.map((g) => g.name),
      episodes: episodes.map((e) => new RecentUpcomingItem({
        id: e.id,
        image: `${this.baseImgUrl}/${showWithDetails.poster_path}`, // or e.still_path
        name: e.name,
        releaseDate: e.air_date ? new Date(e.air_date) : undefined,
        episodeNumber: e.episode_number,
        seasonNumber: e.season_number,
        showName: showWithDetails.name,
      })),
      imdbUrl: showWithDetails.external_ids && showWithDetails.external_ids.imdb_id
        ? `${this.baseImdbUrl}/${showWithDetails.external_ids.imdb_id}`
        : undefined,
    });
  }

  async fetchMovies(searchText) {
    const res = await fetch(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${searchText}`
    );
    const { results: movies } = await res.json();

    return movies.map((m) => new SearchResultItem({
      id: m.id,
      image: m.poster_path ? `${this.baseImgUrl}/${m.poster_path}` : './img/placeholder.svg', // or backdrop_path
      name: m.title, // or original_title
      releaseDate: m.release_date ? new Date(m.release_date) : 'In Production',
    }));
  }

  async fetchMovieDetails(movieId) {
    const res = await fetch(
      `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}&append_to_response=external_ids`
    );
    const movie = await res.json();

    return new SavedItem({
      id: movie.id,
      image: movie.poster_path
        ? `${this.baseImgUrl}/${movie.poster_path}`
        : './img/placeholder.svg', // or backdrop_path
      name: movie.title, // or original_title
      details: movie.overview,
      releaseDate: movie.release_date
        ? new Date(movie.release_date)
        : undefined,
      status: movie.status,
      genres: movie.genres.map((g) => g.name),
      imdbUrl: movie.external_ids && movie.external_ids.imdb_id
        ? `${this.baseImdbUrl}/${movie.external_ids.imdb_id}`
        : undefined,
    });
  }
}
