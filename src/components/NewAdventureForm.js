import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { postAdventure } from './../actions/AdventureImage';
import { useSelector } from 'react-redux';
import { Image } from 'react-bootstrap';
import { Modal } from 'antd';



const NewAdventureForm = () => {
  console.log(" 77777777777777777777777777777777777777777777777777  ")
  const loginStatus = JSON.parse(window.localStorage.getItem('user'));

  // const loginStatus = useSelector(state => state.user.login);// using from redux store

  const user = useSelector(state => state.user);
  console.log(user);
  // const token = useSelector(state => state.user.userInfo.token);
  const authenticationFail = useSelector(state => state.user.authenticationFail);
  const [imagePreviewSrc, setImagePreviewSrc] = useState("http://placehold.it/180");
  const [visible, setVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [uploadImg, setUploadImg] = useState({});
  const history = useHistory();
  const login_status = useSelector(state => state.user.login);
  console.log(" ***************** " + login_status)

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

  const formSize = {
    height: '450px',
    width: '450px'
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

  const handleOk = e => {
    //setVisible(false);
    history.push('/');
  };

  const handleCancel = e => {

    // setVisible(false);
    history.push('/');
  };

  const sizeModal = {
    height: '550px',

  }

  return (
    <React.Fragment>


      {login_status ? <div className="container" style={formSize} >
        <div class="card-body">
          <h4>ADVENTURE FORM</h4>
          <form encType="multipart/form-data" onSubmit={uploadAction.bind(this)}>
            <div className="form-group">
              <label>Location</label>
              <input type="text" className="form-control" id="location" name="location" placeholder="Location" />
            </div>
            <div className="form-group">
              <label>Description</label><br />
              <input type="text" className="form-control" id="describtion" name="describtion" placeholder="Description" />
            </div>

            <div className="form-group">
              <input type="file" name="file" onChange={readURL} />
            </div>
            <div className="form-group">
              <Image id="previewImage" src={imagePreviewSrc} alt="preview image" style={sizeImage} className="form-control" />
            </div>
            <button type='submit' className="btn btn-primary btn-block">Submit</button>

          </form>
        </div>
      </div> : <h4></h4>}


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

{/* {!login_status ? <Redirect to={`/signin`} /> : <h3></h3>} */ }
{/* {authenticationFail ? <h3>Login Fail {authenticationFail}</h3> : <h3></h3>} */ }