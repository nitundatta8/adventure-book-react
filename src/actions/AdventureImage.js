

export const getAdventureData = (callbackAdventureImage) => {

  return fetch(`http://localhost:5000/api/AdventureImage`)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse  ");
        console.log(jsonifiedResponse);
        callbackAdventureImage(jsonifiedResponse);
      })
    .catch((error) => {
      callbackAdventureImage(error);
    });
};

export const postAdventure = (dataAdventure, oFormElement, token) => {
  const formData = new FormData(oFormElement);

  const requestOptions = {
    method: 'POST',
    headers: { 'Authorization': 'bearer ' + token },
    body: formData
  };

  console.log(requestOptions);


  return fetch(`http://localhost:5000/api/AdventureImage`, requestOptions)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse...................  ");
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

export const getCommentById = (commentData, imgid, token) => {
  const requestOptions = {
    headers: { 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token }
  };

  //http://localhost:5000/api/Comments/getcomments/39
  return fetch(`http://localhost:5000/api/Comments/getcomments/${imgid}`, requestOptions)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse  ");
        console.log(jsonifiedResponse);
        commentData(jsonifiedResponse);
      })
    .catch((error) => {
      commentData(error);
    });
};

export const postComment = (commentsData, comment, currentImgId, token) => {


  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token },
    body: JSON.stringify({ "Comments": comment, "AdventureImageId": currentImgId })
  };

  //http://localhost:5000/api/Comments
  return fetch(`http://localhost:5000/api/Comments`, requestOptions)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse  ");
        console.log(jsonifiedResponse);
        commentsData(jsonifiedResponse);
      })
    .catch((error) => {
      commentsData(error);
    });
};

export const getImageById = (imageData, imgId) => {
  //http://localhost:5000/api/AdventureImage/36
  return fetch(`http://localhost:5000/api/AdventureImage/${imgId}`)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse  ");
        console.log(jsonifiedResponse);
        imageData(jsonifiedResponse);
      })
    .catch((error) => {
      imageData(error);
    });
};

export const getProductNameApi = (productData, brand, category) => {
  return fetch(`http://localhost:5000/api/Campaign/${brand}/${category}`)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse  ");
        console.log(jsonifiedResponse);
        productData(jsonifiedResponse);
      })
    .catch((error) => {
      productData(error);
    });

};

export const postTagProduct = (productTagData, x, y, imageId, campaignID) => {
  console.log("$$$   " + campaignID);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'bearer ' },
    body: JSON.stringify({ "XPos": x, "YPos": y, "CampaignId": campaignID, "AdventureImageId": imageId })
  };


  return fetch(`http://localhost:5000/api/TagProduct`, requestOptions)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse^^^^^^^^^^^^^  ");
        console.log(jsonifiedResponse);
        productTagData(jsonifiedResponse);
      })
    .catch((error) => {
      productTagData(error);
    });
};

export const loadImgTagById = (callBackImgTagById, imgId) => {
  console.log(" img id api")
  return fetch(`http://localhost:5000/api/TagProduct/getTagProductById/${imgId}`)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse  ");
        console.log(jsonifiedResponse);
        callBackImgTagById(jsonifiedResponse);
      })
    .catch((error) => {
      callBackImgTagById(error);
    });

};

export const postClickCommision = (callbackClickCommision, campaignId, adventureImageId) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'bearer ' },
    body: JSON.stringify({ "CampaignId": campaignId, "AdventureImageId": adventureImageId })
  };


  return fetch(`http://localhost:5000/api/ClickCommision`, requestOptions)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse  ");
        console.log(jsonifiedResponse);
        callbackClickCommision(jsonifiedResponse);
      })
    .catch((error) => {
      callbackClickCommision(error);
    });
};

export const getClickCommissionReport = (callbackClickCommissionReport) => {
  return fetch(`http://localhost:5000/api/ClickCommision`)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse  ");
        console.log(jsonifiedResponse);
        callbackClickCommissionReport(jsonifiedResponse);
      })
    .catch((error) => {
      callbackClickCommissionReport(error);
    });
};

// export const getAdventureData = (callbackPlaceByNameOrDes, place) => {
//   return fetch(`http://localhost:5000/api/AdventureImage/places/${place}/`)
//     .then(response => response.json())
//     .then(
//       (jsonifiedResponse) => {
//         console.log("jsonifiedResponse  ");
//         console.log(jsonifiedResponse);
//         callbackPlaceByNameOrDes(jsonifiedResponse);
//       })
//     .catch((error) => {
//       callbackPlaceByNameOrDes(error);
//     });
// };