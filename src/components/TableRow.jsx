import React from 'react';
// Chart JS install and import

const TableRow = (props) => {
    return (
        <tr>
            <td>{props.stock.rank}</td> 
            <td>{props.stock.name}</td>
            <td>${props.stock.marketCap}</td>
            <td>${props.stock.price}</td>
            <td>{props.stock.today}%</td>
            <td>{props.stock.country}</td>
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

