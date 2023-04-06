import { renderGallery } from './gallery-photos.js';
import { createPhotoMetaList } from './data.js';
import './user-form.js';
import { changeScale } from './modify-picture.js';
import { resetEffects } from './style-effect.js';
const photoMetaList = createPhotoMetaList();

renderGallery(photoMetaList);
changeScale();
resetEffects();

