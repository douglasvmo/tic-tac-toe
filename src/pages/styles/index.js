import styled from 'styled-components'
import constants from 'expo-constants';

//General
export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.backgroundColor};
  align-items: center;
  justify-content: space-evenly;
`; 
  
// home styles

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
  color: ${props => props.theme.colors.markerColor};
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
  border-color: ${props => props.theme.colors.markerColor};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`

export const Buttom = styled.TouchableOpacity`
  width: 80%;
  height: 10%;
  border-color: ${props => props.theme.colors.markerColor};
  border-width: 1px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;
  background-color: ${props => props.theme.colors.buttomColor};
`;

export const ButtomText = styled.Text`
  color: ${props => props.theme.colors.markerColor};
  font-size: 20px;
  font-weight: bold;
`;

// Tic Tac Toe styles


export const Wrapper = styled.View`
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
`;
export const Header = styled.View`
    padding-top: ${constants.statusBarHeight}px;
    width: 100%;
    background-color: ${props => props.theme.colors.buttomColor};
    flex-direction: row;
    padding-left: 10px;
`;
  
export const HeaderText = styled.Text`
    font-weight: bold;
    font-size: 17px;
    color: ${props => props.theme.colors.markerColor};
    margin-bottom: 10px;
    margin-left: 10px;
`;

export const Tictactoe = styled.View`
    height: 243px;
    width: 243px;
`;
  
export const Square = styled.View`
    width: 80px;
    height: 80px;
    background-color: ${props => props.theme.colors.backgroundColor};
    justify-content: center;
    align-items: center;
    border-color: ${props => props.theme.colors.SquareColor};
`;

export const Img = styled.View`
    height: 70px;
    width: 70px;
    opacity: 0.8px;
`;

export const ScoreWrapper = styled.View`
    height: 55px;
    margin-bottom: 10px;
    background-color: ${props => props.theme.colors.backgroundScoreColor};
    border-radius: 5px;
    border-width: 2px;
    border-color: ${props => props.theme.colors.marginScoreColor};
    margin-bottom: 30px;
`;

export const Score = styled.View`
    flex-direction: row;
`;

export const ScoreTitle = styled.Text`
    width: 120px;
    text-align: center;
    font-size: 17px;
    font-weight: bold;
`;

export const ScoreText = styled.Text`
    width: 120px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`;

export const WinnerWrapper = styled.View`
    height: 20%;
    justify-content: space-around;
    margin-bottom: 10%;
`;

export const WinnerDisplay = styled.View`
    justify-content: center;
`;

export const WinnerText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
`;
