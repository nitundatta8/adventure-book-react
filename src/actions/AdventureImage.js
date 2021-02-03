

export const getAdventureData = (callbackAdventureImage) => {
  //http://localhost:5000/api/AdventureImage
  return fetch(`http://localhost:8080/adventureBook/api/adventureImage/adventureList`)
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
  return fetch(`http://localhost:8080/adventureBook/api/adventureImage/createAdventure`, requestOptions)
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
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
  };

  //http://localhost:5000/api/Comments/getcomments/39
  return fetch(`http://localhost:8080/adventureBook/api/comment/${imgid}`, requestOptions)
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
  return fetch(`http://localhost:8080/adventureBook/api/comment/addComment`, requestOptions)
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
  return fetch(`http://localhost:8080/adventureBook/api/adventureImage/${imgId}`, requestOptions)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse&&&&&&&&&&&&&&&  ");
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
  return fetch(`http://localhost:8080/adventureBook/api/campaign/${brand}/${category}`, requestOptions)
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
  return fetch(`http://localhost:8080/adventureBook/api/tagproduct/createTag`, requestOptions)
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
  return fetch(`http://localhost:8080/adventureBook/api/tagproduct/getTagProductByAdvId/${imgId}`, requestOptions)
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