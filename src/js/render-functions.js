// render-functions.js
// export function renderImages(images) {
//   const gallery = document.querySelector('.gallery');
//   gallery.innerHTML = '';
//   images.forEach(image => {
//     const imgElement = document.createElement('img');
//     imgElement.src = image.webformatURL;
//     gallery.appendChild(imgElement);
//   });
// }
// 1111111111111111111111111
import iziToast from 'izitoast';

export function displayImages(images) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  } else {
    images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image.webformatURL;
      imgElement.alt = image.tags;
      imgElement.dataset.largeImage = image.largeImageURL;
      imgElement.dataset.likes = image.likes;
      imgElement.dataset.views = image.views;
      imgElement.dataset.comments = image.comments;
      imgElement.dataset.downloads = image.downloads;
      imgElement.addEventListener('click', showModal);
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
      gallery.appendChild(card);
    });
  }
}

function showModal(event) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const caption = document.getElementById('caption');
  const img = event.target;

  modal.style.display = 'block';
  modalImg.src = img.dataset.largeImage;
  caption.textContent = `Likes: ${img.dataset.likes}, Views: ${img.dataset.views}, Comments: ${img.dataset.comments}, Downloads: ${img.dataset.downloads}`;
}
