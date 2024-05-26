// render-functions.js
// export function displayImages(images, gallery) {
//   if (images.length === 0) {
//     iziToast.error({
//       title: 'Error',
//       message:
//         'Sorry, there are no images matching your search query. Please try again!',
//     });
//   } else {
//     const imageElements = images.map(image => {
//       const card = document.createElement('div');
//       card.className = 'card';
//       const imgElement = document.createElement('img');
//       imgElement.src = image.webformatURL;
//       imgElement.alt = image.tags;

//       const aElement = document.createElement('a');
//       aElement.href = image.largeImageURL;
//       aElement.className = 'simplelightbox';
//       aElement.appendChild(imgElement);

//       imgElement.dataset.largeImage = image.largeImageURL;
//       imgElement.dataset.likes = image.likes;
//       imgElement.dataset.views = image.views;
//       imgElement.dataset.comments = image.comments;
//       imgElement.dataset.downloads = image.downloads;

//       imgElement.classList.add('simplelightbox');

//       card.appendChild(aElement);
//       const info = document.createElement('div');
//       info.className = 'info';
//       info.innerHTML = `
//           <p>Likes: ${image.likes}</p>
//           <p>Views: ${image.views}</p>
//           <p>Comments: ${image.comments}</p>
//           <p>Downloads: ${image.downloads}</p>
//         `;
//       card.appendChild(info);
//       return card;
//     });

//     gallery.append(...imageElements);
//   }
// }
// 111111111111111111111111111111111111
// render-functions.js
export function displayImages(images, gallery) {
  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  } else {
    const imageElements = images.map(image => {
      const card = document.createElement('div');
      card.className = 'card';
      const imgElement = document.createElement('img');
      imgElement.src = image.webformatURL;
      imgElement.alt = image.tags;

      const aElement = document.createElement('a');
      aElement.href = image.largeImageURL;
      aElement.className = 'simplelightbox';
      aElement.appendChild(imgElement);

      imgElement.dataset.largeImage = image.largeImageURL;
      imgElement.dataset.likes = image.likes;
      imgElement.dataset.views = image.views;
      imgElement.dataset.comments = image.comments;
      imgElement.dataset.downloads = image.downloads;

      imgElement.classList.add('simplelightbox');

      card.appendChild(aElement);
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
