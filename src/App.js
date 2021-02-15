import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import NavBar from './components/NavBar
// import Home from './containers/Home' ==> Renders Table
// import Footer from './containers/Footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableRow from './components/TableRow'


function App() {

  const [data,setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  function fetchData(){
    fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?interval=5m&symbol=AMRN&range=1d&region=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "fe748a5d3dmsh3fbb14115305693p192019jsnb11b82457074",
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
	}
})
    .then(resp=>resp.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  }

  return (
    <div className="App">
      <div><h3>Penny Stocks API</h3></div>
      <Col xs={12} sm={12} lg={10} className="align-auto">
        <Table striped bordered hover>
          <thead>
            <tr>
                <td>Rank</td>
                <td>Name</td>
                <td>Market Cap</td>
                <td>Price</td>
                <td>Today</td>
                {/* <td>Price (30 Days)</td>  CHART JS IMPLEMENTATION PLUGIN */}
                <td>Country</td>
            </tr>
          </thead>
          <tbody>
            <TableRow
              stock={{rank: 1, name: 'Apple', marketCap: 2.273, price: 135.37, today: 0.18, country: 'USA'}}
            />
            <TableRow
              stock={{rank: 2, name: 'Saudi Aramco', marketCap: 2.040, price: 9.28, today: 0.72, country: 'S. Arabia'}}
            />
            <TableRow
              stock={{rank: 3, name: 'Microsoft', marketCap: 1.848, price: 244.99, today: 0.20, country: 'USA'}}
            />
          </tbody>
        </Table>
      </Col>
    </div>
  );
}

export default App;
