import {NameTable, Container,  } from './TransactionHistory.styled'


export function TransactionHistory({ items }) {
  return (
    <Container >
      <thead>
        <NameTable>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </NameTable>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}
