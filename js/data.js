import { getRandomArrayElement, createRandomIdFromRangeGenerator, getRandomInteger } from './util.js';

const FOTOS_COUNT = 25;
const AVATARS_COUNT = 6;
const MAX_COMMENTS_COUNT = 5;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const NAMES = ['Валера', 'Сергей', 'Виктор', 'Василий', 'Владимир', 'Виктор', 'Александр', 'Максим', 'Ирина', 'Ольга', 'Валерия', 'Сергей', 'Дарья', 'Дмитрий', 'Никита', 'Рустам', 'Тимур', 'Татьяна', 'Соня', 'Тамара', 'Ольга', 'Полина', 'София', 'Артур', 'Руфина'];
const COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];
const DESCRIPTIONS = ['На чили', 'Отдыхаем', 'Классное настроение', 'Мы с друзьями', 'На изи', 'Всё ок!', 'Присоединяйтесь', 'Тусим', 'Отдых в самом разгаре', 'Путешествуем', 'Хотим уже домой', 'Как дела?)', 'Природа супер', 'На волне!!!', 'Идём гулять', 'Chilout!!!', 'Настроение огонь!!!', 'Живи в кайф', 'Скоро домой!!!', 'Отдыхать не работать', 'На тачке!!!', 'Давай  давай!!!', 'Идём в отрыв', 'живите ярко!!!'];

const idGenerator = createRandomIdFromRangeGenerator(1, FOTOS_COUNT);
const likeCountGenerator = createRandomIdFromRangeGenerator(MIN_LIKES, MAX_LIKES);

const createComments = (comIdGenerator) => ({
  id: comIdGenerator(),
  avatar: `img/avatar-${getRandomInteger(1, AVATARS_COUNT)}.svg`,
  comments: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const getComments = (count, generator) => Array.from({ length: count }, () => createComments(generator));

const createFotoMeta = () => {
  const id = idGenerator();
  const likes = likeCountGenerator();
  const commentsCount = getRandomInteger(0, MAX_COMMENTS_COUNT);
  const commentIdGenerator = createRandomIdFromRangeGenerator(1, commentsCount);

  return ({
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes,
    comments: getComments(commentsCount, commentIdGenerator)
  });
};

const fotoMetaList = () => Array.from({ length: FOTOS_COUNT }, createFotoMeta);

// eslint-disable-next-line no-console
console.log(JSON.stringify(fotoMetaList, null, 4));

export { fotoMetaList };
