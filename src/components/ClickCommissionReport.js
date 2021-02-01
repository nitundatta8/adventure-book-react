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
        data: mapCommission

      }
    ]
  }
  //bar graph
  let val;


  const callbackClickCommissionReport = (data) => {

    setClickCommissionReport(data);
    data.forEach((r) => {
      const dateKey = r.clickDate.split("T")[0];
      let val = !myMap.get(dateKey) ? 0 : myMap.get(dateKey);
      myMap.set(dateKey, val + r.campaign.commission);
      console.log(myMap);
    });

    let objArray = [];
    let arrVal;
    let arrMonth;
    myMap.forEach((key, val) => {
      arrMonth = val.split('-')[1];
      if (!arrMonth === '12') {
        arrVal = arrMonth.split('')[1];
        objArray[arrVal - 1] = key;
      } else {
        objArray[arrMonth - 1] = key;
      }

    })
    setMapCommission(objArray);


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