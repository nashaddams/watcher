function showLoadingIndicator() {
  document.getElementById('load-container').style.display = 'block';
}

function hideLoadingIndicator() {
  document.getElementById('load-container').style.display = 'none';
}

function handleImgLoadError(e) {
  e.target.src = './img/placeholder.svg';
  e.onerror = null;
}

/**
 * Create details overlay for saved shows and movies
 * @param {Object} item show or movie
 */
function createDetailsOverviewElement(item) {
  const { name, image, details, releaseDate, status, genres, cast, imdbUrl } = item;

  const fragment = document.createDocumentFragment();

  const imgElement = document.createElement('img');
  imgElement.className = 'detail-background';
  imgElement.src = image;
  imgElement.addEventListener('error', handleImgLoadError);

  const headerElement = document.createElement('h1');
  headerElement.textContent = name;

  const subHeaderElement = document.createElement('h2');
  subHeaderElement.textContent = releaseDate ? dayjs(releaseDate).format('YYYY') : status;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = details;

  const genreListElement = document.createElement('p');
  genreListElement.textContent = genres.join(', ');

  const castHeaderElement = document.createElement('h2');
  castHeaderElement.textContent = 'Cast';
  const castListElement = document.createElement('p');
  castListElement.textContent = cast.map((c) => c.name).join(', ');

  const imdbImgElement = document.createElement('img');
  imdbImgElement.className = 'detail-imdb';
  imdbImgElement.src = './img/imdb.svg';
  imdbImgElement.addEventListener('click', () => open(imdbUrl, '_blank'));

  fragment.appendChild(imgElement);
  fragment.appendChild(headerElement);
  fragment.appendChild(subHeaderElement);
  fragment.appendChild(descriptionElement);
  fragment.appendChild(genreListElement);
  fragment.appendChild(castHeaderElement);
  fragment.appendChild(castListElement);
  fragment.appendChild(imdbImgElement);

  return fragment;
}

/**
 * @param {Object} item show or movie item
 * @param {string} action add or remove
 * @param {Function} actionFn click function for action
 */
function createListItemElement(item, action, actionFn) {
  const { id, name, image, releaseDate, status } = item;

  const imgElement = document.createElement('img');
  imgElement.src = image ? image : './img/placeholder.svg';
  imgElement.addEventListener('error', handleImgLoadError);

  // Show details only for added items
  if (action === 'remove') {
    imgElement.addEventListener('click', () => {
      const detailContainer = document.getElementById('detail-container');
      const detailInfo = document.getElementById('detail-info');
      detailInfo.replaceChildren();

      const detailsElement = createDetailsOverviewElement(item);

      detailInfo.appendChild(detailsElement);
      detailContainer.style.display = 'block';
    });
  }

  const infoElement = document.createElement('div');
  infoElement.className = 'item-info';

  const showName = document.createElement('div');
  showName.textContent = name;

  const showRelease = document.createElement('div');
  showRelease.textContent = releaseDate ? dayjs(releaseDate).format('YYYY') : status;

  infoElement.appendChild(showName);
  infoElement.appendChild(showRelease);

  let actionElement = document.createElement('img');
  actionElement.className = 'action';

  if (action === 'add') {
    actionElement.src = './img/add.svg';
    actionElement.addEventListener('click', actionFn.bind(this, id));
  } else if (action === 'remove') {
    actionElement.src = './img/remove.svg';
    actionElement.addEventListener('click', actionFn.bind(this, id));
  }

  const itemElement = document.createElement('div');
  itemElement.className = 'item';
  itemElement.appendChild(imgElement);
  itemElement.appendChild(infoElement);
  itemElement.appendChild(actionElement);

  return itemElement;
}

/**
 * Create list element for search results and saved items list view
 * @param {Object} items shows or movies
 * @param {string} headerText list section header
 * @param {string, Function} { action, actionFn } to add or remove show or movie
 */
function createListElement(items = [], headerText, { action, actionFn }) {
  const listElement = document.createElement('div');
  listElement.className = 'list';

  if (items.length) {
    const listElementHeader = document.createElement('div');
    listElementHeader.className = 'media-type-header';
    listElementHeader.textContent = headerText;
    listElement.appendChild(listElementHeader);
  }

  const sortedItems = items.sort((s1, s2) => s1.name.localeCompare(s2.name));
  for (const item of sortedItems) {
    listElement.appendChild(createListItemElement(item, action, actionFn));
  }

  return listElement;
}

/**
 * @param {Object} item show or movie item
 */
function createRecentUpcomingElement(item) {
  const itemElement = document.createElement('div');
  itemElement.className = 'item';

  const imgElement = document.createElement('img');
  imgElement.src = item.image;
  imgElement.addEventListener('error', handleImgLoadError);

  const infoElement = document.createElement('div');
  infoElement.className = 'item-info';

  const nameElement = document.createElement('div');
  nameElement.textContent = item.showName || item.name;

  const episodeNumber = document.createElement('div');
  episodeNumber.textContent =
    item.episodeNumber && item.seasonNumber && item.name
      ? `${item.episodeNumber}x${item.seasonNumber.toString().padStart(2, '0')} ${item.name}`
      : ''; // No episode info for movies

  const releaseDateDelta = document.createElement('div');
  releaseDateDelta.className = 'item-info-secondary';
  releaseDateDelta.textContent = dayjs.duration(dayjs(item.releaseDate).diff(dayjs())).humanize(true);

  infoElement.appendChild(nameElement);
  infoElement.appendChild(episodeNumber);
  infoElement.appendChild(releaseDateDelta);

  itemElement.appendChild(imgElement);
  itemElement.appendChild(infoElement);

  return itemElement;
}
