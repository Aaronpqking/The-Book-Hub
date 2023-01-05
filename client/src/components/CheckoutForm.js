import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const CREATE_ORDER = gql`
  mutation CreateOrder($input: OrderInput!) {
    createOrder(input: $input) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`;

const CheckoutForm = () => {
// set state for form data
const [formData, setFormData] = useState({
name: '',
creditCard: '',
address: ''
});

// destructure formData
const { name, creditCard, address } = formData;

// set state for order data
const [orderData, setOrderData] = useState({
items: [],
total: 0
});

// destructure orderData
const { items, total } = orderData;

// set state for form submission
const [createOrder] = useMutation(CREATE_ORDER);

// handle form input changes
const handleChange = event => {
const { name, value } = event.target;
setFormData({ ...formData, [name]: value });
};

// handle form submission
const handleSubmit = event => {
event.preventDefault();
// create the order
createOrder({
variables: {
input: {
name,
creditCard,
address,
items,
total
}
}
});
};

return (
<Form onSubmit={handleSubmit}>
<Form.Group controlId='name'>
<Form.Label>Name</Form.Label>
<Form.Control
type='text'
name='name'
value={name}
onChange={handleChange}
required
/>
</Form.Group>
<Form.Group controlId='creditCard'>
<Form.Label>Credit Card</Form.Label>
<Form.Control
type='text'
name='creditCard'
value={creditCard}
onChange={handleChange}
required
/>
</Form.Group>
<Form.Group controlId='address'>
<Form.Label>Shipping Address</Form.Label>
<Form.Control
type='text'
name='address'
value={address}
onChange={handleChange}
required
/>
</Form.Group>
<Button variant='primary' type='submit'>
Place Order
</Button>
</Form>
);
};

export default CheckoutForm;