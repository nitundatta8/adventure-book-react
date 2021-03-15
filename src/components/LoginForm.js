import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import { login } from '../actions/Login';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router';

import { Redirect, useHistory } from 'react-router-dom';
import { Modal } from 'antd';


function LoginForm() {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(true)
  const history = useHistory();
  const loginStatus = useSelector(state => state.user.login);
  let authenticationFail = useSelector(state => state.user.authenticationFail);

  const handleOk = e => {
    setVisible(false);
    history.push('/');
  };

  const handleCancel = e => {

    setVisible(false);
    history.push('/');
  };

  const sizeModal = {
    height: '350px',

  }

  const handleclickOk = () => {
    setVisible(false);
    window.location.reload();

  }


  return (

    <React.Fragment>
      {!loginStatus ? <Modal bodyStyle={sizeModal}
        title="LOGIN FORM"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        width="450px">
        <div class="container">
          <div>
            <div class="card-body">
              <form onSubmit={doSignUp}>
                {/* <h3>Sign In</h3> */}

                <div className="form-group">
                  <label>User Name [Test User Name book]</label>
                  <input type="text" name="name" className="form-control" placeholder="User Name" />

                </div>

                <div className="form-group">
                  <label>Password [Test Password book]</label>
                  <input type="password" name="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
              </form>
            </div>

          </div>
        </div>
      </Modal> : <h1></h1>}


      {loginStatus ? <Redirect to={`/`} /> : <h3></h3>}

      {authenticationFail ? <Modal
        // title="Loggin Failure"
        visible={visible}
        onOk={handleclickOk}
        onCancel={handleclickOk}
      >
        <h4>Loggin Failure</h4>
      </Modal> : <h3></h3>}



    </React.Fragment >
  );


  function doSignUp(event) {
    event.preventDefault();
    console.log("Name : " + event.target.name.value);

    dispatch(login(event.target.name.value, event.target.password.value));

  };

};
export default LoginForm;



{/* <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                      </div>
                    </div> */}


{/* <p className="forgot-password text-right">
                      Forgot <a href="#">password?</a>
                    </p> */}