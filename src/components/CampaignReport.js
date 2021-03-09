import React, { useEffect, useState } from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import { getCampaignReport } from './../actions/AdventureImage';
import { Link } from 'react-router-dom';



const CampaignReport = () => {
  const val = "abc";
  const loginStatus = JSON.parse(window.localStorage.getItem('user'));
  const [reports, setReport] = useState([]);


  const reportData = (data) => {
    console.log(" Data report");
    console.log(data);
    setReport(data)
    console.log(reports)

  }

  useEffect(() => {
    // Update the document title using the browser API

    getCampaignReport(reportData, loginStatus.token);
  }, [val]);

  return (
    <React.Fragment>
      <h3>Campaign List</h3>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>


              <th>Brand</th>
              <th>Category</th>
              <th>Product Name</th>
              <th>Product Url</th>
              <th>Start Date</th>
              <th>End date</th>
              <th>Commission</th>
            </tr>
          </thead>
          {reports?.map(report =>
            <tbody>
              <tr>

                <td>{report.brand}</td>
                <td>{report.category}</td>
                <td>{report.productName}</td>
                <td>{report.productUrl}</td>
                <td>{report.startDate}</td>
                <td>{report.endDate}</td>
                <td>{report.commission}</td>
              </tr>
            </tbody>)
          }

        </Table>
      </Container>


      <Link to={`/`} > <h3>Back</h3> </Link>
    </React.Fragment>
  );
};
export default CampaignReport;