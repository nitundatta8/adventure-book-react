import React from 'react';
import { postCampaign } from './../actions/AdventureImage';
import { useHistory, Link } from 'react-router-dom';



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


  return (

    <React.Fragment>
      <h4>Campaign Form</h4>
      <form onSubmit={uploadAction.bind(this)}>
        <label for="Brand">Choose a Brand:</label><br />

        <select id="brand" name="Brand">
          <option value="Reebok">Reebok</option>
          <option value="Adidas">Adidas</option>
          <option value="Rei">REI</option>

        </select><br />
        <label for="Category">Choose a Category:</label><br />

        <select id="category" name="Category">
          <option value="Sking">Sking</option>
          <option value="Biking">Biking</option>
          <option value="Swiming">Swiming</option>
          <option value="Camping">Camping</option>
          <option value="Hiking">Hiking</option>

        </select><br />
        <input
          type='text'
          name='ProductName'
          placeholder='Product Name' /><br />
        <input
          type='text'
          name='ProductUrl'
          placeholder='Product Url' /><br />
        <label for="StartDate">Start Date</label>
        <input
          type='date'
          id="startDate"
          name='StartDate' /><br />
        <label for="EndDate">End Date</label>
        <input
          type='date'
          id="endDate"
          name='EndDate'
          placeholder='End Date' /><br />
        <input type="number"
          id="commission"
          name="Commission"
          placeholder="1.0" step="0.01" min="0" max="5" /><br />
        <button type='submit'>Submit</button>
      </form>

      <Link to={`/report`} > <h3>Campaign Report</h3> </Link>

    </React.Fragment>
  );


};
export default CampaignForm;