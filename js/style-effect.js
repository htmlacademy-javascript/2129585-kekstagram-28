const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },

];

const defaultEffectSlider = EFFECTS[0];
let choosenEffect = defaultEffectSlider;

const previewImage = document.querySelector('.img-upload__preview img');
const effectList = document.querySelector('.effects__list');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderContainerElement = document.querySelector('.img-upload__effect-level');
const effectLevelElement = document.querySelector('.effect-level__value');

function checkIfDefault() {
  return choosenEffect === defaultEffectSlider;
}

function updateSlider() {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: choosenEffect.min,
      max: choosenEffect.max,

    },
    start: choosenEffect.max,
    step: choosenEffect.step,
    connect: 'lower',
  });

  if (checkIfDefault()) {
    sliderContainerElement.classList.add('hidden');
  } else {
    sliderContainerElement.classList.remove('hidden');
  }
}

effectList.addEventListener('mousedown', (e) => {
  const effectItem = e.target.closest('.effects__item');
  const input = effectItem.querySelector('.effects__radio');

  const targetClassPrefix = 'effects__preview--';
  const targetClass = `${targetClassPrefix}${input.value}`;

  const lastClass = Array.from(previewImage.classList)
    .find((cl) => cl.startsWith(targetClassPrefix));

  if (lastClass) {
    previewImage.classList.remove(lastClass);
  }

  previewImage.classList.add(targetClass);

  choosenEffect = EFFECTS.find((eff) => eff.name === input.value);
  updateSlider();
});

function onSliderUpdate() {
  const sliderValue = sliderElement.noUiSlider.get();
  previewImage.style.filter = checkIfDefault()
    ? defaultEffectSlider.style
    : `${choosenEffect.style}(${sliderValue}${choosenEffect.unit})`;
  effectLevelElement.value = sliderValue;
}

function resetEffects() {
  choosenEffect = defaultEffectSlider;
  updateSlider();
}

noUiSlider.create(sliderElement, {
  range: {
    min: choosenEffect.min,
    max: choosenEffect.max,

  },
  start: choosenEffect.max,
  step: choosenEffect.step,
  connect: 'lower',
});


sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };
