

export function fetchAPI(url) {
  // param is a highlighted word from the user before it clicked the button
  return fetch(url)
    .then(res => res.json())
    .then(data => data);
}
