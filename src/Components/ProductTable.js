import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

const ProductTable = (props) => {
  return (
    <Table>
        
      <tbody>
    {props.object.map(item =>{ 
     return(
     
      <tr>
          <td>{item.category}</td>
          <td>{item.price}</td>
          <td>{item.name}</td>
        </tr>
     
     )
     
    }}
       
      </tbody>
    </Table>
  );
}

ProductTable.prototype={
  category : PropTypes.string,
  price : PropTypes.number,
  name : PropTypes.name
}
export default ProductTable;
