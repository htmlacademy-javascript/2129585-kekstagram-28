import { createPictures } from './picture.js';
import { createPhotoMetaList } from './data.js';

const photoMetaList = createPhotoMetaList();
createPictures(photoMetaList);
