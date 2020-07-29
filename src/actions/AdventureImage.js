

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

export const postCampaign = (dataCampaign, brand, category, productName, productUrl, startDate, endDate, commission) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "Brand": brand, "Category": category, "ProductName": productName,
      "ProductUrl": productUrl, "StartDate": startDate,
      "EndDate": endDate, "Commission": commission
    })
  };


  return fetch(`http://localhost:5000/api/Campaign`, requestOptions)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse  ");
        console.log(jsonifiedResponse);
        dataCampaign(jsonifiedResponse);
      })
    .catch((error) => {
      dataCampaign(error);
    });

};
//http://localhost:5000/api/Campaign
export const getReport = (reportData) => {

  return fetch(`http://localhost:5000/api/Campaign`)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse  ");
        console.log(jsonifiedResponse);
        reportData(jsonifiedResponse);
      })
    .catch((error) => {
      reportData(error);
    });
};