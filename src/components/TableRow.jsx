import React, { useEffect, useState } from 'react';
// Chart JS install and import


const TableRow = (props) => {

    const [data, setData] = useState(null)

    useEffect(()=>{
        fetch(`http://api.marketstack.com/v1/intraday?access_key=661b2b31730d1d045e13f3377036353e&symbols=${props.symbol}`)
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data)
            // setData(data)
        })
    })

    return (
        <tr>
            <td>{props.index}</td> 
            <td>{props.name}({props.symbol})</td>
            <td>{props.open}</td>
            <td>{props.last}</td>
            <td>{props.country}</td>
            {/* <td>${props.stock.marketCap}</td>
            <td>${props.stock.price}</td>
            <td>{props.stock.today}%</td>
            <td>{props.stock.country}</td> */}
        </tr>

    );
};

export default TableRow;

// TABLE ROW SCHEMA: 
// <td>Rank</td>
// <td>Name</td>
// <td>Market Cap</td>
// <td>Price</td>
// <td>Today</td>
// <td>Country</td>

// company logo implementation
// react chart implementation
// country flag implementation

