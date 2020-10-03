import constants from 'expo-constants';
import styled from 'styled-components';

export const color = {
  blue: '#2980b9',
  red: '#e74c3c',
  primaryWhite: '#f1f2f6',
  primaryGray: '#ced6e0',
};

export const Container = styled.View`
    flex: 1;
    background-color: ${color.primaryGray};
    justify-content: flex-start;
`;

export const Wrapper = styled.View`
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
`;
export const Header = styled.View`
    padding-top: ${constants.statusBarHeight}px;
    width: 100%;
    background-color: #f39c12;
    flex-direction: row;
    padding-left: 10px;
`;
  
export const HeaderText = styled.Text`
    font-weight: bold;
    font-size: 17px;
    color: #2c3e50;
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
    background-color: ${color.primaryGray};
    justify-content: center;
    align-items: center;
    border-color: #576574;
`;

export const Img = styled.View`
    height: 70px;
    width: 70px;
    opacity: 0.8px;
`;

export const ScoreWrapper = styled.View`
    height: 55px;
    margin-bottom: 10px;
    background-color: ${color.primaryWhite};
    border-radius: 5px;
    border-width: 2px;
    border-color: #dcdde1;
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
