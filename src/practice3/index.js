export const getPoetry = () => {
  const url = "https://v1.jinrishici.com/all.json";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => [data.origin, data.author, data.content])
    .catch((error) => console.log(error));
};
