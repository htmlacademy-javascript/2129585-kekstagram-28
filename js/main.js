import { renderGallery } from './gallery-photos.js';
import './user-form.js';
import { changeScale } from './modify-picture.js';
import { resetEffects } from './style-effect.js';
import { getData } from './api-load.js';
import { showAlert } from './util.js';


changeScale();
resetEffects();

try {
  const data = await getData();
  renderGallery(data);

} catch (err) {
  showAlert(err.message);
}
