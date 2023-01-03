import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

function Cart() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  function addItem(item) {
    setItems([...items, item]);
    setTotal(total + item.price);
  }

  function removeItem(item) {
    setItems(items.filter(i => i !== item));
    setTotal(total - item.price);
  }

  return (
    <div className="Cart">
      <h2>Shopping Cart</h2>
      {/* Use the Table component to display the items in the cart */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>
                {/* Use the Button component to create a button to remove items from the cart */}
                <Button variant="danger" onClick={() => removeItem(item)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Display the total cost of the items in the cart */}
      <p>Total: ${total}</p>
      {/* Use the Button component to create a button to initiate the checkout process */}
      <Button variant="primary">Checkout</Button>
    </div>
  );
}

export default Cart;
