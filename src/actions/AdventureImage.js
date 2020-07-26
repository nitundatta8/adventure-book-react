export const getAdventureData = (getImage) => {

  return fetch(`http://localhost:5000/api/AdventureImage`)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse  ");
        console.log(jsonifiedResponse);
        getImage(jsonifiedResponse);
      })
    .catch((error) => {
      getImage(error);
    });
};