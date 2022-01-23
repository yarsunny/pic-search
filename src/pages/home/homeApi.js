export function fetchPhotos(params) {
  let url = new URL("https://api.unsplash.com/collections/2081954/photos");
  url.search = new URLSearchParams(params).toString();
  return fetch(url, getHeaders());
}
export function searchPhotos(params) {
  let url = new URL("https://api.unsplash.com/search/photos");
  url.search = new URLSearchParams(params).toString();
  return fetch(url, getHeaders());
}

//Note: Move this to utils once slice.js count > 0
function getHeaders() {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
    },
  };
}
