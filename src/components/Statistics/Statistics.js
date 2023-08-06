import {Container, Title, List,Item} from './Statistics.styled'

export function Statistics({ title, stats }) {
  return (
    <Container >
      <Title >Upload stats</Title>
      <List >
        {stats.map(item => (
          <Item  key={item.id}>
            <span >{item.label}</span>
            <span >{item.percentage}%</span>
          </Item>
        ))}
      </List>
    </Container>
  );
}
