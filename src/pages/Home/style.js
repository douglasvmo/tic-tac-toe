import styled from 'styled-components'

export const Container = styled.View`
  flex: 1;
  background-color: #ced6e0;
  align-items: center;
  justify-content: space-evenly;
`; 
  
export const ButtomWrapper = styled.View`
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 100%;
`;

export const MarkerTitle = styled.Text` 
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  color: #2c3e50;
`; 
export const MarkerWrapper = styled.View`
  align-items: center;
  justify-content: space-around;
  height: 20%;
  width: 100%;
  flex-direction: row;
`; 

 export const MarkerButtom = styled.TouchableOpacity`
  height: 100px;
  width: 100px;
  border-color: #2c3e50;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`

export const Buttom = styled.TouchableOpacity`
  width: 80%;
  height: 10%;
  border-color: #2c3e50;
  border-width: 1px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;
  background-color: #f39c12;
`;

export const ButtomText = styled.Text`
  color: #2c3e50;
  font-size: 20px;
  font-weight: bold;
`;
