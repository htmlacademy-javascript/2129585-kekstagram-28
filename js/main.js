import { renderGallery } from './gallery-photos.js';
import './user-form.js';
import { changeScale } from './modify-picture.js';
import { resetEffects } from './style-effect.js';
import { getData } from './api-load.js';
import { showAlert, debounce } from './util.js';
import { init } from './filter.js';

try {
  changeScale();
  resetEffects();

  const data = await getData();

  const debouncedFn = debounce(renderGallery);
  init(data, debouncedFn);
} catch (err) {
  showAlert(err.message);
}
