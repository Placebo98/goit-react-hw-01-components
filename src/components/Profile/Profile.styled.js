import styled from 'styled-components';

export const Container = styled.div`
 margin: auto;
  overflow: hidden;
  width: 600px;
  border: 1px solid ;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgAvatar = styled.img`
  width: 450px;
  margin: 40px;
`;

export const ListStats = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
`;
export const ListItem = styled.li`
  padding: 40px 0;
  width: 100%;
  border: 1px solid ;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  flex-direction: column;
  align-items: center;
`;

export const NameContainer = styled.div`
margin: auto;
text-align: center;
`;