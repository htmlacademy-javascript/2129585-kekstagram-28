function createPictures(photoMetaList) {
  const photoTemplate = document.getElementById('picture').content;

  const createdPhotoList = photoMetaList.map((item) => {
    const { url, description, likes, comments, id } = item;
    const pictureHtml = photoTemplate.cloneNode(true);

    pictureHtml.querySelector('.picture__img').src = url;
    pictureHtml.querySelector('.picture__img').alt = description;

    pictureHtml.querySelector('.picture__likes').textContent = likes;
    pictureHtml.querySelector('.picture__comments').textContent = comments.length;

    pictureHtml.querySelector('.picture').dataset.id = id;

    return pictureHtml;
  });

  const container = document.querySelector('.pictures');
  container.append(...createdPhotoList);
}

export { createPictures };
