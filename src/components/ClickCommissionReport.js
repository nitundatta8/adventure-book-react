import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getClickCommissionReport } from '../actions/AdventureImage';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { Container, Row, Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';


const ClickCommissionReport = () => {
  const loginStatus = JSON.parse(window.localStorage.getItem('user'));
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
    console.log("Dataaaaaaaaaa")
    console.log(data)
    setClickCommissionReport(data);
    data.forEach((r) => {
      const dateKey = r.clickDate.split("T")[0];
      let val = !myMap.get(dateKey) ? 0 : myMap.get(dateKey);
      myMap.set(dateKey, val + r.campaign.commission);
      console.log("myMapppppppppppppppppppp")

      console.log(myMap);
    });

    let objArray = [];
    let arrMonth;
    myMap.forEach((key, val) => {
      arrMonth = parseInt(val.split('-')[1]);
      if (arrMonth !== 12) {
        objArray[--arrMonth] = key;
      } else {
        objArray[--arrMonth] = key;
      }

    })
    console.log("objArrayyyyyyyyyyyyyyyy")
    console.log(objArray)
    setMapCommission(objArray);


  }


  useEffect(() => {
    // Update the document title using the browser API
    console.log(" getClickCommissionReport")
    getClickCommissionReport(callbackClickCommissionReport, loginStatus.token);


  }, [val]);

  return (
    <React.Fragment>
      <h3>Commission Report</h3>
      <Container>
        <Row>
          <Col sm={7}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  {/* <th>Id</th> */}
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

                    {/* <td>{report.id}</td> */}
                    <td>{report.campaign.brand}</td>
                    <td>{report.campaign.category}</td>
                    <a target="_blank" href={report.campaign.productUrl}><td>{report.campaign.productName}</td></a>

                    <td>{report.campaign.commission}</td>
                    <td>{report.user.firstName}</td>
                    <td><Moment format="YYYY-MM-DD hh:mm a">{report.clickDate}</Moment></td>
                    {/* <td>{report.clickDate}</td> */}

                  </tr>
                </tbody>)
              }

            </Table>
          </Col>
          <Col sm={5}>
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
    </React.Fragment>
  );
};
export default ClickCommissionReport;

{/* <Link to={`/`} > <h3>Back</h3> </Link> */ }