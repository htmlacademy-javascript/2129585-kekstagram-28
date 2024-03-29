import { createPictures } from './picture.js';
import { openBigPicture } from './big-picture.js';

export function renderGallery(pictureData) {
  const container = document.querySelector('.pictures');
  document.querySelectorAll('.picture').forEach((el) => el.remove());

  createPictures(pictureData);

  container.addEventListener('click', (e) => handlePictureClick(e, pictureData));
}

function handlePictureClick(event, items) {
  const node = event.target.closest('[data-id]');
  if (!node) {
    return;
  }

  const id = Number(node.dataset.id);
  const data = items.find((item) => item.id === id);

  if (!data) {
    throw new Error(`Photo with id ${id} not found`);
  }

  openBigPicture(data);
}
