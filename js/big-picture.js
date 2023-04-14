import { isEscapeKey } from './util.js';

const visibleComments = 5;
let shownComments = 0;
let loadNextComments;

const bigPictureContainer = document.querySelector('.big-picture');

const pictureImg = bigPictureContainer.querySelector('.big-picture__img img');
const likesCount = bigPictureContainer.querySelector('.likes-count');
const commentsCount = bigPictureContainer.querySelector('.comments-count');

export function openBigPicture(item) {
  pictureImg.src = item.url;
  likesCount.textContent = item.likes;
  commentsCount.textContent = item.comments.length;

  loadNextComments = renderComments(item.comments);
  loadNextComments();

  bigPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

const closeButton = document.getElementById('picture-cancel');
closeButton.addEventListener('click', closeBigPhoto);

function closeBigPhoto() {
  bigPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

const commentCount = document.querySelector('.social__comment-count');
const commentListContainer = document.querySelector('.social__comments');

function createComment(comment) {
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
  commentText.textContent = comment.message;

  commentBlock.appendChild(commentImg);
  commentBlock.appendChild(commentText);

  return commentBlock;
}

const buttonLoader = document.querySelector('.comments-loader');

buttonLoader.addEventListener('click', (evt) => {
  evt.preventDefault();
  loadNextComments();
});

function renderComments(comments) {
  shownComments = 0;

  return () => {
    shownComments += visibleComments;
    if (comments.length <= shownComments) {
      buttonLoader.classList.add('hidden');
      shownComments = comments.length;
    } else {
      buttonLoader.classList.remove('hidden');
    }

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < shownComments; i++) {
      const commentElement = createComment(comments[i]);
      fragment.appendChild(commentElement);
    }

    commentListContainer.textContent = '';
    commentListContainer.appendChild(fragment);
    commentCount.textContent = `${shownComments} из <span class ="comments-count">${comments.length}</span>`;
  };
}

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPhoto();
  }
});

