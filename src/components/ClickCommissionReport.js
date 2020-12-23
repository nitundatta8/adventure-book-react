import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getClickCommissionReport } from '../actions/AdventureImage';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { Container, Row, Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';


const ClickCommissionReport = () => {

  // bar graph
  const state = {
    labels: ['January', 'February', 'March',
      'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
  //bar graph
  const val = "abc";
  const [clickCommissionReport, setClickCommissionReport] = useState([]);


  const callbackClickCommissionReport = (data) => {
    console.log(" Data report");
    console.log(data);
    console.log(data[0]);

    setClickCommissionReport(data);
    console.log(" Data88888   ");
    console.log(typeof clickCommissionReport);
    let myMap = new Map();
    data.forEach((r) => {
      const dateKey = r.clickDate.split("T")[0];
      console.log("dateKeyt: " + dateKey);
      let val = myMap.get(dateKey) ? 0 : myMap.get(dateKey);
      myMap.set(dateKey, val + r.campaign.commission);
      console.log(" myMap 1111111111111111:  " + myMap);
    });

    console.log(myMap);

    console.log("checkommissionReport:   " + clickCommissionReport)

  }

  useEffect(() => {
    // Update the document title using the browser API
    console.log(" getClickCommissionReport")
    getClickCommissionReport(callbackClickCommissionReport);
  }, [val]);

  return (
    <React.Fragment>
      <h3>Commission Report</h3>
      <Container>
        <Row>
          <Col sm={8}>
            <Table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Brand</th>
                  <th>Category</th>
                  <th>Product Name</th>

                  <th>Commission</th>
                  <th>User Name</th>
                  <th>Date</th>

                </tr>
              </thead>
              {clickCommissionReport?.map(report =>
                <tbody>
                  <tr>

                    <td>{report.clickCommisionId}</td>
                    <td>{report.campaign.brand}</td>
                    <td>{report.campaign.category}</td>
                    <a target="_blank" href={report.campaign.productUrl}><td>{report.campaign.productName}</td></a>
                   k['kk']==
                    <td>{report.campaign.commission}</td>
                    <td>{report.user.firstName}</td>
                    <td><Moment format="YYYY-MM-DD hh:mm a">{report.clickDate}</Moment></td>
                    {/* <td>{report.clickDate}</td> */}

                  </tr>
                </tbody>)
              }

            </Table>
          </Col>
          <Col sm={4}>
            <Bar
              data={state}
              options={{
                title: {
                  display: true,
                  text: 'Average Rainfall per month',
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'right'
                }
              }}
            />
          </Col>
        </Row>
      </Container>

      <Link to={`/`} > <h3>Back</h3> </Link>
    </React.Fragment>
  );
};
export default ClickCommissionReport;