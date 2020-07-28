

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

export const postAdventure = (dataAdventure, oFormElement) => {
  const formData = new FormData(oFormElement);

  const requestOptions = {
    method: 'POST',
    // headers: {
    //   "Content-Type": "multipart/form-data",
    //   "Accept": "application/json"
    // },
    body: formData
  };


  return fetch(`http://localhost:5000/api/AdventureImage`, requestOptions)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse  ");
        console.log(jsonifiedResponse);
        dataAdventure(jsonifiedResponse);
      })
    .catch((error) => {
      dataAdventure(error);
    });


};