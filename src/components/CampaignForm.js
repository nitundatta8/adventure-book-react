import React from 'react';
import { postCampaign } from './../actions/AdventureImage';
import { Redirect, useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const CampaignForm = () => {
  const loginStatus = JSON.parse(window.localStorage.getItem('user'));
  const history = useHistory();

  const dataCampaign = (data) => {
    console.log(" Data campaign");
  }

  const uploadAction = (event) => {
    event.preventDefault();
    console.log(" abc !!!!!")

    postCampaign(dataCampaign, event.target.Brand.value,
      event.target.Category.value, event.target.ProductName.value,
      event.target.ProductUrl.value, event.target.StartDate.value,
      event.target.EndDate.value, event.target.Commission.value, loginStatus.token);
    history.push("/report")

  }
  const formSize = {
    height: '450px',
    width: '450px'
  }


  return (

    <React.Fragment>
      {/* {!login_status ? <Redirect to={`/signin`} /> : <h3></h3>} */}
      <h4>Campaign Form</h4>
      <div>----------------------------------------------------------</div>
      <div className="container" style={formSize}>
        <div class="card-body">
          <form onSubmit={uploadAction.bind(this)}>
            <div className="form-group">
              <div class="row align-items-start">
                <label><h5>Brand</h5></label>
                <select class="form-control" id="brand" name="Brand">
                  <option value="Reebok">Reebok</option>
                  <option value="Adidas">Adidas</option>
                  <option value="Rei">REI</option>

                </select><br />
              </div>
            </div>

            <div className="form-group">
              <div class="row align-items-start">
                <label><h5>Category</h5></label>
                <select class="form-control" id="category" name="Category">
                  <option value="Sking">Sking</option>
                  <option value="Biking">Biking</option>
                  <option value="Swiming">Swiming</option>
                  <option value="Camping">Camping</option>
                  <option value="Hiking">Hiking</option>

                </select><br />
              </div>
            </div>

            <div className="form-group">
              <div class="row align-items-start">
                <label><h5>Product Name</h5></label>
                <input class="form-control" type='text' name='ProductName' placeholder='Product Name' /><br />
              </div>
            </div>

            <div className="form-group">
              <div class="row align-items-start">
                <label><h5>Product Url</h5></label>
                <input class="form-control" type='text' name='ProductUrl' placeholder='Product Url' /><br />
              </div>
            </div>

            <div className="form-group">
              <div class="row align-items-start">
                <label><h5>Start Date</h5></label>
                <input class="form-control" type='date' id="startDate" name='StartDate' placeholder='Start Date' /><br />
              </div>
            </div>

            <div className="form-group">
              <div class="row align-items-start">
                <label><h5>End Date</h5></label>
                <input class="form-control" type='date' id="endDate" name='EndDate' placeholder='End Date' /><br />
              </div>
            </div>

            <div className="form-group">
              <div class="row align-items-start">
                <label><h5>Commission</h5></label>
                <input class="form-control" type="number" id="commission" name="Commission" placeholder="1.0" step="0.01" min="0" max="5" /><br />
              </div>
            </div>

            <div className="form-group">
              <div class="row align-items-start">
                <button class="form-control" className="btn btn-primary btn-block" type='submit'>Submit</button>
              </div>
            </div>

          </form>
        </div>
      </div>

      {/* <Link to={`/report`} > <h3>Campaign Report</h3> </Link> */}

    </React.Fragment>
  );


};
export default CampaignForm;