/**
 * Object for show and movie search result (and F1 import) items
 */
class ResultItem {
  constructor({
    id = undefined,
    image = './img/placeholder.svg',
    name = undefined,
    releaseDate = undefined,
  }) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.releaseDate = releaseDate;
  }
}

/**
 * Object for saved show and movie items
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
    cast = [],
    imdbUrl = undefined,
  }) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.releaseDate = releaseDate;
    this.details = details;
    this.status = status;
    this.genres = genres;
    this.episodes = episodes;
    this.cast = cast;
    this.imdbUrl = imdbUrl;
  }
}

/**
 * Object for show episodes, movies, and F1 items
 */
class RecentUpcomingItem {
  constructor({
    id = undefined,
    image = './img/placeholder.svg',
    name = undefined,
    releaseDate = undefined,
    episodeNumber = undefined,
    seasonNumber = undefined,
    showName = undefined,
  }) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.releaseDate = releaseDate;
    this.episodeNumber = episodeNumber;
    this.seasonNumber = seasonNumber;
    this.showName = showName;
  }
}
