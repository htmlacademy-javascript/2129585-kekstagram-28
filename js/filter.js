const PICTURES_COUNT = 10;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const filterElement = document.querySelector('.img-filters');
let currentFilter = Filter.DEFAULT;
let pictures = [];

function sortRandomly() {
  return Math.random() - 0.5;
}

function sortByComments(pictureA, pictureB) {
  return pictureB.comments.length - pictureA.comments.length;
}

function getFilterPictures() {
  switch (currentFilter) {
    case Filter.RANDOM:
      return [...pictures].sort(sortRandomly).slice(0, PICTURES_COUNT);
    case Filter.DISCUSSED:
      return [...pictures].sort(sortByComments);
    default:
      return [...pictures];
  }
}

function setOnFilterClick(callback) {
  callback(getFilterPictures());

  filterElement.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }


    const clickButton = evt.target;
    if (clickButton.id === currentFilter) {
      return;
    }

    filterElement.querySelector('.img-filters__button--active')
      .classList.remove('img-filters__button--active');

    clickButton.classList.add('img-filters__button--active');
    currentFilter = clickButton.id;
    callback(getFilterPictures());
  });
}


function init(loadedPictures, callback) {
  filterElement.classList.remove('img-filters--inactive');
  pictures = [...loadedPictures];
  setOnFilterClick(callback);
}


export { init };
