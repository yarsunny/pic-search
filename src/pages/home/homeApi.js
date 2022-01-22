export function fetchPhotos(page) {
  return fetch(`https://api.unsplash.com/collections/2081954/photos?per_page=30&page=${page}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    },
  });
}
