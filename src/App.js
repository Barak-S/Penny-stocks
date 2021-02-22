import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import NavBar from './components/NavBar
// import Home from './containers/Home' ==> Renders Table
// import Footer from './containers/Footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableRow from './components/TableRow'

// dark mode with a hook using local storage => light & dark render different styles

function App() {

  const [marketData,setMarketData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  function fetchData(){

    fetch('http://api.marketstack.com/v1/tickers?access_key=661b2b31730d1d045e13f3377036353e')
    .then(resp=>resp.json())
    .then(data=>{
      console.log(data.data)
      setMarketData(data.data)
      // let marketSymbols = data.data.map((ticker)=>(ticker.symbol)).toString()
      // fetch(`http://api.marketstack.com/v1/intraday?access_key=661b2b31730d1d045e13f3377036353e&symbols=${marketSymbols}`)
      // .then(resp=>resp.json())
      // .then(data=>{
      //   console.log(data.data)
      //   setMarketData(data.data)
      // })
    })
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
                <td>Open</td>
                <td>Last</td>
                <td>Country</td>
                {/* <td>Market Cap</td>
                <td>Price</td>
                <td>Today</td>
                <td>Price (30 Days)</td>  CHART JS IMPLEMENTATION PLUGIN
                <td>Country</td> */}
            </tr>
          </thead>
          <tbody>
            { marketData.length && marketData.map((ticker, i)=>{
              return(
                <TableRow 
                  index={i + 1}
                  name={ticker.name}
                  symbol={ticker.symbol}
                  country={ticker.stock_exchange.country}
                />
              )
            })}
            {/* <TableRow
              stock={{rank: 3, name: 'Microsoft', marketCap: 1.848, price: 244.99, today: 0.20, country: 'USA'}}
            /> */}
          </tbody>
        </Table>
      </Col>
    </div>
  );
}

export default App;
