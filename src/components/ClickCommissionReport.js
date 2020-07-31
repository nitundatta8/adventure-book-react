import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getClickCommissionReport } from '../actions/AdventureImage';
import { Link } from 'react-router-dom';


const ClickCommissionReport = () => {
  const val = "abc";
  const [clickCommissionReport, setClickCommissionReport] = useState([]);


  const callbackClickCommissionReport = (data) => {
    console.log(" Data report");
    setClickCommissionReport(data);
    console.log(clickCommissionReport)

  }

  useEffect(() => {
    // Update the document title using the browser API
    console.log(" getClickCommissionReport")
    getClickCommissionReport(callbackClickCommissionReport);
  }, [val]);

  return (
    <React.Fragment>
      <h3>Commission Report</h3>
      <Table>
        <thead>
          <tr>

            <th>Id</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Product Name</th>
            <th>Product Url</th>
            <th>Commission</th>
            <th>User Name</th>

          </tr>
        </thead>
        {clickCommissionReport?.map(report =>
          <tbody>
            <tr>

              <td>{report.clickCommisionId}</td>
              <td>{report.campaign.brand}</td>
              <td>{report.campaign.category}</td>
              <td>{report.campaign.productName}</td>
              <td>{report.campaign.productUrl}</td>
              <td>{report.campaign.commission}</td>
              <td>{report.user.firstName}</td>

            </tr>
          </tbody>)
        }

      </Table>
      <Link to={`/`} > <h3>Back</h3> </Link>
    </React.Fragment>
  );
};
export default ClickCommissionReport;