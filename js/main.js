import { renderGallery } from './gallery-photos.js';
import { createPhotoMetaList } from './data.js';
import './user-form.js';
const photoMetaList = createPhotoMetaList();
renderGallery(photoMetaList);


