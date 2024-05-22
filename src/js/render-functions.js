// render-functions.js
// import iziToast from 'izitoast';

// export function displayImages(images, gallery) {
//   if (images.length === 0) {
//     iziToast.error({
//       title: 'Error',
//       message:
//         'Sorry, there are no images matching your search query. Please try again!',
//     });
//   } else {
//     const imageElements = images.map(image => {
//       const imgElement = document.createElement('img');
//       imgElement.src = image.webformatURL;
//       imgElement.alt = image.tags;
//       imgElement.dataset.largeImage = image.largeImageURL;
//       imgElement.dataset.likes = image.likes;
//       imgElement.dataset.views = image.views;
//       imgElement.dataset.comments = image.comments;
//       imgElement.dataset.downloads = image.downloads;

//       imgElement.addEventListener('click', showModal);
//       const card = document.createElement('div');
//       card.className = 'card';
//       card.appendChild(imgElement);
//       const info = document.createElement('div');
//       info.className = 'info';
//       info.innerHTML = `
//         <p>Likes: ${image.likes}</p>
//         <p>Views: ${image.views}</p>
//         <p>Comments: ${image.comments}</p>
//         <p>Downloads: ${image.downloads}</p>
//       `;
//       card.appendChild(info);
//       return card;
//     });

//     gallery.append(...imageElements);
//   }
// }

// function showModal(event) {
//   const modal = document.getElementById('modal');
//   const modalImg = document.getElementById('modal-img');
//   const caption = document.getElementById('caption');
//   const img = event.target;

//   modal.style.display = 'block';
//   modalImg.src = img.dataset.largeImage;
//   caption.textContent = `Likes: ${img.dataset.likes}, Views: ${img.dataset.views}, Comments: ${img.dataset.comments}, Downloads: ${img.dataset.downloads}`;
// }
// 111111111111111111111111111111111111111111111111111
// render-functions.js
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

      imgElement.classList.add('simplelightbox'); // Добавляем класс для simplelightbox

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
