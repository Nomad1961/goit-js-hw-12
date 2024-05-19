// pixabay-api.js
// const API_KEY = '43839854-7e39202c3c35776610ceb4193';
// const BASE_URL = 'https://pixabay.com/api/';

// export async function fetchImages(query, page, perPage) {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&per_page=${perPage}`
//     );
//     return response.data.hits;
//   } catch (error) {
//     console.error('Error fetching images:', error);
//     return [];
//   }
// }
// 111111111111111111111111111111111111
const apiKey = '43839854-7e39202c3c35776610ceb4193';

export async function fetchImages(searchTerm) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&orientation=horizontal&safesearch=true`;
  const response = await fetch(url);
  const data = await response.json();
  return data.hits;
}
