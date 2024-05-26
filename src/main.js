import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { displayImages } from './js/render-functions.js'; // Импорт функции displayImages

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const loader = document.querySelector('.loader');
const gallery = document.getElementById('gallery');
const loadMoreBtn = document.getElementById('load-more-btn');

let currentPage = 1;
let searchTerm = '';

let lightbox = new SimpleLightbox('.simplelightbox a', {
  elements: '.simplelightbox',
  closeText: 'Закрыть',
  docClose: true,
});
let images = [];
let currentIndex = 0;

searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  searchTerm = searchInput.value.trim();
  currentPage = 1;
  currentIndex = 0;

  loader.style.display = 'block';
  loadMoreBtn.style.display = 'none';

  gallery.innerHTML = '';

  if (searchTerm === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term.',
    });
    loader.style.display = 'none';
  } else {
    try {
      const response = await fetchImages(searchTerm, currentPage);
      images = response.map(image => image.largeImageURL);

      displayImages(response, gallery); // Передача ответа и галереи в функцию displayImages

      lightbox.refresh();

      if (response.length > 15) {
        loadMoreBtn.style.display = 'block';
      }
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: 'An error occurred while fetching images. Please try again.',
      });
    } finally {
      loader.style.display = 'none';
      searchInput.value = '';
    }
  }
});
// --------------------------
loadMoreBtn.addEventListener('click', async () => {
  currentPage++;

  loader.style.display = 'block';

  try {
    const response = await fetchImages(searchTerm, currentPage);
    // const response = await axios.get(
    //   `https://pixabay.com/api/?key=43839854-7e39202c3c35776610ceb4193&q=${searchTerm}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${currentPage}`
    // );
    images = [
      ...images,
      ...response.data.hits.map(image => image.largeImageURL),
    ];
    displayImages(response.data.hits, gallery);

    const cardHeight = gallery.firstElementChild.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    lightbox.refresh();

    if (currentPage * 15 >= response.data.totalHits) {
      loadMoreBtn.style.display = 'none';
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'An error occurred while fetching images. Please try again.',
    });
  } finally {
    loader.style.display = 'none';
  }
});
