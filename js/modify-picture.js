const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const controlValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');
const STEP_VALUE = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;
const DEFAULT_VALUE = 100;

const scaleImage = (value) => {
  image.style.transform = `scale(${value / 100})`;
  controlValue.value = `${value}%`;
};

const smallButtonClick = () => {
  const currentvalue = parseInt(controlValue.value, 10);
  let newValue = currentvalue - STEP_VALUE;
  if (newValue < MIN_VALUE) {
    newValue = MIN_VALUE;
  }
  scaleImage(newValue);
};

const bigButtonClick = () => {
  const currentvalue = parseInt(controlValue.value, 10);
  let newValue = currentvalue + STEP_VALUE;
  if (newValue > MAX_VALUE) {
    newValue = MAX_VALUE;
  }
  scaleImage(newValue);
};

const changeScale = () => scaleImage(DEFAULT_VALUE);

controlSmaller.addEventListener('click', smallButtonClick);
controlBigger.addEventListener('click', bigButtonClick);


export { changeScale };
