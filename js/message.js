import { isEscapeKey } from './util.js';
import './user-form.js';

const successMessageTemplate = document.querySelector('#success').content;
const errorMessageTemplate = document.querySelector('#error').content;

function closeSuccessKeydown(evt) {
  if (isEscapeKey(evt)) {
    document.querySelector('.success').remove();
  }
}

const closeErrorMessage = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', closeErrorKeydown);
};

function closeErrorKeydown(evt) {
  if (isEscapeKey(evt)) {
    closeErrorMessage();
  }
}

const onclickOutModal = (evt) => {
  if (evt.target.matches('.success')) {
    document.querySelector('.success').remove();
  }
  if (evt.target.matches('.error')) {
    closeErrorMessage();
  }
};

const showErrorMessage = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  document.body.append(errorMessage);
  const errorModal = document.querySelector('.error');
  const errorButton = document.querySelector('.error__button');

  errorModal.addEventListener('click', onclickOutModal);
  errorButton.addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', closeErrorKeydown);
};

const closeSuccessMessage = () => {
  document.querySelector('.success').remove();
};

const showSuccesMessage = () => {
  const succesMessage = successMessageTemplate.cloneNode(true);
  document.body.append(succesMessage);
  const succesModal = document.querySelector('.success');
  const successButton = document.querySelector('.success__button');

  succesModal.addEventListener('click', onclickOutModal);
  successButton.addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', closeSuccessKeydown);
};

export { showErrorMessage, showSuccesMessage };
