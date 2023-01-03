import React from 'react';

function OrderSummary(props) {
  return (
    <div className="OrderSummary">
      <h2>Order Summary</h2>
      <table>
        <tbody>
          {props.items.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price}</td>
            </tr>
          ))}
          <tr>
            <th>Total</th>
            <th>${props.total}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderSummary;
