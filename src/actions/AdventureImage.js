//${process.env.HOST_NAME}

export const getAdventureData = (callbackAdventureImage) => {
  //http://localhost:5000/api/AdventureImage
  return fetch(`http://${process.env.HOST_NAME}/adventureBook/api/adventureImage/adventureList`)
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
  console.log("formData");
  console.log(formData);
  const requestOptions = {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + token },
    body: formData
  };

  console.log(requestOptions);

  //http://localhost:5000/api/AdventureImage
  return fetch(`http://${process.env.HOST_NAME}/adventureBook/api/adventureImage/createAdventure`, requestOptions)
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

export const postCampaign = (dataCampaign, brand, category, productName, productUrl, startDate, endDate, commission, token) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
    body: JSON.stringify({
      "brand": brand, "category": category, "productName": productName,
      "productUrl": productUrl, "startDate": startDate,
      "endDate": endDate, "commission": commission
    })
  };

  //http://localhost:5000/api/Campaign
  return fetch(`http://${process.env.HOST_NAME}/adventureBook/api/campaign/createCampaign`, requestOptions)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse Campaign ");
        console.log(jsonifiedResponse);
        dataCampaign(jsonifiedResponse);
      })
    .catch((error) => {
      dataCampaign(error);
    });

};
//http://localhost:5000/api/Campaign
export const getCampaignReport = (reportData, token) => {
  const requestOptions = {
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
  };
  return fetch(`http://${process.env.HOST_NAME}/adventureBook/api/campaign/campaignList`, requestOptions)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse getCampaignReport ");
        console.log(jsonifiedResponse);
        reportData(jsonifiedResponse);
      })
    .catch((error) => {
      reportData(error);
    });
};

export const getCommentById = (commentData, imgid, token) => {
  const requestOptions = {
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
  };

  //http://localhost:5000/api/Comments/getcomments/39
  return fetch(`http://${process.env.HOST_NAME}/adventureBook/api/comment/${imgid}`, requestOptions)
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
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
    body: JSON.stringify({ "comment": comment, "adventureImage": { "id": currentImgId } })
  };

  //http://localhost:5000/api/Comments
  return fetch(`http://${process.env.HOST_NAME}/adventureBook/api/comment/addComment`, requestOptions)
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

export const getImageById = (imageData, imgId, token) => {
  const requestOptions = {
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
  };
  //http://localhost:5000/api/AdventureImage/36
  return fetch(`http://${process.env.HOST_NAME}/adventureBook/api/adventureImage/${imgId}`, requestOptions)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse&&&&&&&&&&&&&&&  ");
        console.log(jsonifiedResponse);
        imageData(jsonifiedResponse);
      })
    .catch((error) => {
      imageData(error);
    });
};

export const getProductNameApi = (productData, brand, category, token) => {
  const requestOptions = {
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
  };
  //http://localhost:5000/api/Campaign
  return fetch(`http://${process.env.HOST_NAME}/adventureBook/api/campaign/${brand}/${category}`, requestOptions)
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

export const postTagProduct = (productTagData, x, y, imageId, campaignID, token) => {
  console.log("$$$   " + campaignID);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
    body: JSON.stringify({ "xPos": x, "yPos": y, "campaign": { "id": campaignID }, "adventureImage": { "id": imageId } })
  };

  //http://localhost:5000/api/TagProduct
  return fetch(`http://${process.env.HOST_NAME}/adventureBook/api/tagproduct/createTag`, requestOptions)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse^^^^^^^^^^^^^>>>  ");
        console.log(jsonifiedResponse);
        productTagData(jsonifiedResponse);
      })
    .catch((error) => {
      productTagData(error);
    });
};

export const loadImgTagById = (callBackImgTagById, imgId, token) => {
  const requestOptions = {
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
  };
  //http://localhost:5000/api/TagProduct/getTagProductById/
  return fetch(`http://${process.env.HOST_NAME}/adventureBook/api/tagproduct/getTagProductByAdvId/${imgId}`, requestOptions)
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

export const postClickCommision = (callbackClickCommision, campaignId, adventureImageId, token) => {
  console.log("campaignId " + campaignId + " adventureImageId " + adventureImageId)
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
    body: JSON.stringify({ "campaign": { "id": campaignId }, "adventureImage": { "id": adventureImageId } })
  };

  //http://localhost:5000/api/ClickCommision
  return fetch(`http://${process.env.HOST_NAME}/adventureBook/api/clickCommision/addCommission`, requestOptions)
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

export const getClickCommissionReport = (callbackClickCommissionReport, token) => {
  const requestOptions = {
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
  };
  //http://localhost:5000/api/ClickCommision
  return fetch(`http://${process.env.HOST_NAME}/adventureBook/api/clickCommision/clickCommisionList`, requestOptions)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse,,,,,,,,,,,,,,  ");
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