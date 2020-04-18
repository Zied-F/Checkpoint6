import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

const ProductTable = (props) => {
  return (
    <Table>
        
      <tbody>
        <tr>
          <td>{props.category}</td>
          <td>{props.price}</td>
          <td>{props.name}</td>
        </tr>
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