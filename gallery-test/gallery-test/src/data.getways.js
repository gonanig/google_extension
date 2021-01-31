const urlImgs = "https://tzfrontend.herokuapp.com/images";
const urlComments = "https://tzfrontend.herokuapp.com/comments";
const urlSetComments = "https://tzfrontend.herokuapp.com/comments/add";
export const getImgs = async () =>
  await fetch(urlImgs)
    .then((response) => response.json())
    .catch((error) => console.error(error));

export const getComments = async (id) =>
  await fetch(`${urlComments}/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));

export const getImg = async (id) =>
  await fetch(`${urlImgs}/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));

export const addComment = async (data) =>
  await fetch(urlSetComments, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
