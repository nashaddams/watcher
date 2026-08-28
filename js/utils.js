/**
 * @param {Object[]} items shows or movies
 * @param {string} content recent or upcoming
 */
function getRecentUpcomingGroup(items = [], content) {
  return items
    .filter((item) => {
      if (content === 'recent') {
        return new Date(item.releaseDate) < new Date();
      } else if (content === 'upcoming') {
        return new Date(item.releaseDate) > new Date();
      }
      return false;
    })
    .sort((item1, item2) => {
      if (content === 'recent') {
        return new Date(item2.releaseDate) - new Date(item1.releaseDate);
      }
      return new Date(item1.releaseDate) - new Date(item2.releaseDate);
    })
    .reduce((group, item) => {
      const { releaseDate } = item;
      group[releaseDate] = group[releaseDate] ?? [];
      group[releaseDate].push(item);
      return group;
    }, {});
}
