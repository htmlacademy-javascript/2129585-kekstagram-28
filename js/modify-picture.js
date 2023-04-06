const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const controlValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');
const stepValue = 25;
const minValue = 25;
const maxValue = 100;
const defaultValue = 100;

const scaleImage = (value) => {
  image.style.transform = `scale(${value / 100})`;
  controlValue.value = `${value}%`;
};

const smallButtonClick = () => {
  const currentvalue = parseInt(controlValue.value, 10);
  let newValue = currentvalue - stepValue;
  if (newValue < minValue) {
    newValue = minValue;
  }
  scaleImage(newValue);
};

const bigButtonClick = () => {
  const currentvalue = parseInt(controlValue.value, 10);
  let newValue = currentvalue + stepValue;
  if (newValue > maxValue) {
    newValue = maxValue;
  }
  scaleImage(newValue);
};

const changeScale = () => scaleImage(defaultValue);

controlSmaller.addEventListener('click', smallButtonClick);
controlBigger.addEventListener('click', bigButtonClick);


export { changeScale };
