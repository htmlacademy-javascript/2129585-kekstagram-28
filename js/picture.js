function createPictures(photoMetaList) {
  const fotoTemplate = document.getElementById('picture').content;

  const createdPhotoList = photoMetaList.map((item) => {
    const { url, description, likes, comments } = item;
    const pictureHtml = fotoTemplate.cloneNode(true);

    pictureHtml.querySelector('.picture__img').src = url;
    pictureHtml.querySelector('.picture__img').alt = description;

    pictureHtml.querySelector('.picture__likes').textContent = likes;
    pictureHtml.querySelector('.picture__comments').textContent = comments.length;

    return pictureHtml;
  });

  const container = document.querySelector('.pictures');
  container.append(...createdPhotoList);
}

export { createPictures };