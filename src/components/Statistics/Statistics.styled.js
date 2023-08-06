import styled from 'styled-components';

export const Container = styled.section`
margin: 20px auto;
overflow: hidden;
width: 600px;
border: 1px solid #9e9e9e;
display: flex;
flex-direction: column;
align-items: center;
`;

export const Title = styled.h2`
text-align: center;
`;
export const List = styled.ul`
display: flex;
  width: 100%;
  object-fit: cover;
  overflow-x: auto;
`;

export const Item = styled.li`
padding: 40px 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  border: 1px solid
`;
