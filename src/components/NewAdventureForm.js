
//import { Form } from 'react-bootstrap';
import { postAdventure } from './../actions/AdventureImage';
import { Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Image } from 'react-bootstrap';
const NewAdventureForm = () => {
  const loginStatus = useSelector(state => state.user.login);
  const authenticationFail = useSelector(state => state.user.authenticationFail);
  const [imagePreviewSrc, setImagePreviewSrc] = useState("http://placehold.it/180");


  const dataAdventure = (data) => {
    console.log(" dataAdventure ");

  }

  const uploadAction = (event) => {
    event.preventDefault();
    postAdventure(dataAdventure,
      event.target)

  };

  const readURL = (e) => {
    console.log("test1")
    if (e.target.files && e.target.files[0]) {
      console.log("test2")
      var reader = new FileReader();

      reader.onload = function (e) {
        console.log(e.target.result);
        setImagePreviewSrc(e.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      console.log("test3")
    }
    console.log("test4")
  }
  return (
    <React.Fragment>
      <div className="container">
        {!loginStatus ? <Redirect to={`/signin`} /> : <h3></h3>}
        {authenticationFail ? <h3>Login Fail {authenticationFail}</h3> : <h3></h3>}


        <h4>Adventure form</h4>
        <form encType="multipart/form-data" onSubmit={uploadAction.bind(this)}>
          <div class="form-group">
            <label for="text"><h5>Location:</h5></label><br />
            <input type="text" class=" form-control-sm" id="location" name="location" />
          </div>
          <div class="form-group">
            <label for="text"><h5>Description:</h5></label><br />
            <input type="text" class=" form-control-sm" id="location" name="description" />
          </div>
          <div class="form-group">
            <input type='hidden' name='UserId' defaultValue='1' />
          </div>
          <div class="form-group">
            <input type="file" name="ImgFile" onChange={readURL} />
          </div>
          <div class="form-group">
            <Image id="previewImage" src={imagePreviewSrc} alt="preview image" />
          </div>


          <button type='submit'>Submit</button>

        </form>

        {/* <input
          type='hidden'
          name='UserId'
          defaultValue='1' /><br /> */}

        {/* <input
          type='text'
          name='location'
          placeholder='Location' /><br />
        <input
          type='text'
          name='description'
          placeholder='Description' /><br />
        <input type="file" name="ImgFile" onChange={readURL} /><br />
        <Image id="previewImage" src={imagePreviewSrc} alt="preview image" />
        <br /> */}



      </div>


    </React.Fragment>
  );
};

export default NewAdventureForm;