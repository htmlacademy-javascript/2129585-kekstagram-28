import { isEscapeKey } from './util.js';
const buttonUpload = document.getElementById('upload-file');
const imgUpload = document.querySelector('.img-upload__overlay');
const buttonCancel = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const hashTagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const maxLengthHashtag = 5;
const symbolHashtag = /^#[a-za-яё0-9]{1,19}$/i;
const hashtagError = 'неправильно заполнены хештэги';

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper-error',
});

buttonUpload.addEventListener('change', openModal);

buttonCancel.addEventListener('click', closeModal);

// если фокус на поле ввода комментария
const isFocusField = () =>
  document.activeElement === hashTagField ||
  document.activeElement === commentField;

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt) && !isFocusField()) {
    closeModal();
  }
});

function openModal() {
  imgUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeModal() {
  form.reset();
  imgUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

// Валидатор для поля с хештегом
const isValidTag = (tag) => symbolHashtag.test(tag);

const hasValidCount = (tags) => tags.length <= maxLengthHashtag;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateHastags = (value) => {
  const tags = value
    .trim()
    .split('')
    .filter((tag) => tag.trim().length);

  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashTagField,
  isValidTag,
  hashtagError,
  validateHastags
);
