import { isEscapeKey } from './util.js';

export function openBigPicture(item) {
  hideNonImplementedFeatures();


  const bigPicture = document.querySelector('.big-picture');

  bigPicture.querySelector('.big-picture__img img').src = item.url;
  bigPicture.querySelector('.likes-count').textContent = item.likes;
  bigPicture.querySelector('.comments-count').textContent = item.comments.length;

  createComments(item.comments);

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

const closeButton = document.getElementById('picture-cancel');
closeButton.addEventListener('click', closeBigPhoto);

function closeBigPhoto() {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

function createComments(comments) {
  const commentListContainer = document.querySelector('.social__comments');
  commentListContainer.replaceChildren();

  // Создать элеменрты для каждого коммента
  const commentNodes = comments.map((comment) => {
    const commentBlock = document.createElement('li');
    commentBlock.classList.add('social__comment');

    const commentImg = document.createElement('img');
    commentImg.classList.add('social__picture');
    commentImg.src = comment.avatar;
    commentImg.alt = 'Аватар комментатора фотографии';
    commentImg.width = 35;
    commentImg.height = 35;

    const commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = comment.comment;

    commentBlock.appendChild(commentImg);
    commentBlock.appendChild(commentText);

    return commentBlock;
  });

  // Вставить все созданные элементы в контейнер комментов
  commentListContainer.append(...commentNodes);
}

function hideNonImplementedFeatures() {
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
}

const buttonLoader = document.querySelector('.comments-loader');

buttonLoader.addEventListener('click', (evt) => {
  evt.preventDefault();
  createComments();
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPhoto();
  }
});

