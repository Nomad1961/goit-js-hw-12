import iziToast from 'izitoast';

export function displayImages(images, gallery) {
  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  } else {
    const imageElements = images.map(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image.webformatURL;
      imgElement.alt = image.tags;
      imgElement.dataset.largeImage = image.largeImageURL;
      imgElement.dataset.likes = image.likes;
      imgElement.dataset.views = image.views;
      imgElement.dataset.comments = image.comments;
      imgElement.dataset.downloads = image.downloads;

      imgElement.classList.add('simplelightbox');

      const card = document.createElement('div');
      card.className = 'card';
      card.appendChild(imgElement);
      const info = document.createElement('div');
      info.className = 'info';
      info.innerHTML = `
        <p>Likes: ${image.likes}</p>
        <p>Views: ${image.views}</p>
        <p>Comments: ${image.comments}</p>
        <p>Downloads: ${image.downloads}</p>
      `;
      card.appendChild(info);
      return card;
    });

    gallery.append(...imageElements);
  }
}
