import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { postAdventure } from './../actions/AdventureImage';
import { useSelector } from 'react-redux';
import { Image } from 'react-bootstrap';
import { Modal } from 'antd';



const NewAdventureForm = () => {

  const loginStatus = JSON.parse(window.localStorage.getItem('user'));

  // const loginStatus = useSelector(state => state.user.login);// using from redux store

  const user = useSelector(state => state.user);
  console.log(user);
  // const token = useSelector(state => state.user.userInfo.token);
  const authenticationFail = useSelector(state => state.user.authenticationFail);
  const [imagePreviewSrc, setImagePreviewSrc] = useState("http://placehold.it/180");
  const [visible, setVisible] = useState(false);
  const [uploadImg, setUploadImg] = useState({});
  const history = useHistory();

  const showModal = () => {
    setVisible(true);

  };

  const hideModal = () => {
    setVisible(false);
    history.push('/');
  };

  const okModal = () => {
    console.log("uploadImg.id...  " + uploadImg.id);
    setVisible(false);


    history.push(`/product/${uploadImg.id}`);
  }


  const dataAdventure = (data) => {
    showModal();
    console.log(" dataAdventure ");
    console.log(data);
    setUploadImg(data);

  }
  const sizeImage = {
    height: '250px',
    width: '250px'
  }

  const uploadAction = (event) => {
    event.preventDefault();
    postAdventure(dataAdventure, event.target, loginStatus.token);
    event.target.reset();
    setImagePreviewSrc("http://placehold.it/180");
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
        {/* {!login_status ? <Redirect to={`/signin`} /> : <h3></h3>} */}
        {/* {authenticationFail ? <h3>Login Fail {authenticationFail}</h3> : <h3></h3>} */}


        <h4>Adventure form</h4>
        <form encType="multipart/form-data" onSubmit={uploadAction.bind(this)}>
          <div class="form-group">
            <label for="text"><h5>Location:</h5></label><br />
            <input type="text" class=" form-control-sm" id="location" name="location" />
          </div>
          <div class="form-group">
            <label for="text"><h5>Description:</h5></label><br />
            <input type="text" class=" form-control-sm" id="describtion" name="describtion" />
          </div>

          <div class="form-group">
            <input type="file" name="file" onChange={readURL} />
          </div>
          <div class="form-group">
            <Image id="previewImage" src={imagePreviewSrc} alt="preview image" style={sizeImage} />
          </div>


          <button type='submit'>Submit</button>

        </form>

      </div>
      <Modal
        title="Modal"
        visible={visible}
        onOk={okModal}
        onCancel={hideModal}
        okText="Yes"
        cancelText="No"
      >
        <h3>Do you want to Tag your product?</h3>

      </Modal>


    </React.Fragment>
  );
};

export default NewAdventureForm;