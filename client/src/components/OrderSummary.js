// import React from 'react';
// import CheckoutForm from './CheckoutForm';

// function OrderSummary(props) {
//   return (
//     <div className="OrderSummary">
//       <h2>Order Summary</h2>
//       <table>
//         <tbody>
//         <OrderSummary items={items} />
//           {props.items.map(item => (
//             <tr key={item.id}>
//               <td>{item.title}</td>
//               <td>${item.price}</td>
//             </tr>
//           ))}
//           <tr>
//             <th>Total</th>
//             <th>${props.total}</th>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default OrderSummary;
import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_ITEMS = gql`
query GetItems {
  items @client
}
`;

const OrderSummary = (props) => {
const { data } = useQuery(GET_ITEMS);

let items = [];
if (data) {
items = data.items;
}

return (
<Container>
<Row>
<Col>
<h2>Order Summary</h2>
<Table>
<thead>
<tr>
<th>Title</th>
<th>Price</th>
</tr>
</thead>
<tbody>
{items.map(item => (
<tr key={item.id}>
<td>{item.title}</td>
<td>{item.price}</td>
</tr>
))}
</tbody>
</Table>
</Col>
</Row>
<Row>
<Col>
<h2>Total: {props.total}</h2>
</Col>
</Row>
</Container>
);
};

export default OrderSummary;