import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getClickCommissionReport } from '../actions/AdventureImage';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { Container, Row, Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';


const ClickCommissionReport = () => {
  const [clickCommissionReport, setClickCommissionReport] = useState([]);
  const [mapCommission, setMapCommission] = useState([]);
  let myMap = new Map();
  console.log("myMap  ");
  for (let mapVal of myMap.values()) {
    setMapCommission(mapVal);
  }
  console.log(myMap);
  // bar graph
  const state = {
    labels: ['Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Commission',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        //data: [0, 1, 2, 3, 4]
        data: mapCommission
        //data: [65, 59, 80, 81, 56]
      }
    ]
  }
  //bar graph
  let val;

  console.log(" 111111111111 ")
  console.log(clickCommissionReport)

  const callbackClickCommissionReport = (data) => {

    setClickCommissionReport(data);
    console.log(" Data report");
    console.log(data);

    console.log(" 222222222222222 ");
    console.log(clickCommissionReport)


    data.forEach((r) => {
      const dateKey = r.clickDate.split("T")[0];
      console.log("dateKeyt: " + typeof dateKey);
      console.log("myMap.get(dateKey): " + myMap.get(dateKey));
      let val = !myMap.get(dateKey) ? 0 : myMap.get(dateKey);
      console.log("val  : " + val);
      myMap.set(dateKey, val + r.campaign.commission);
      console.log(myMap);
    });




  }
  console.log(" 333333333333333333333333 ")
  console.log(clickCommissionReport)

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
          <Col sm={6}>
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
          <Col sm={6}>
            <Bar
              data={state}
              options={{
                title: {
                  display: true,
                  text: 'Average Click Commission per month',
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