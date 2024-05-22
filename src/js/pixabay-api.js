// pixabay-api.js
const apiKey = '43839854-7e39202c3c35776610ceb4193';

export async function fetchImages(searchTerm) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&orientation=horizontal&safesearch=true`;
  const response = await fetch(url);
  const data = await response.json();
  return data.hits;
}
