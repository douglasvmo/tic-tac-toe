import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as S from '../styles';
import O from '../../components/O';
import X from '../../components/X';
import {ThemeContext}  from 'styled-components'

export default function Home() {
  const navigation = useNavigation();
  const [marker, setmarker] = useState(1);
  const Theme = useContext(ThemeContext)

  function renderButtom(options) {
    return (
      <S.Buttom
        onPress={() => {
          navigation.navigate('TicTacToe', {
            robotMode: options.robotMode,
            gameType: options.gameType,
            player1: { symbol: marker, color: Theme.colors.player1Color },
            player2: { symbol: marker === 1 ? 2 : 1, color: Theme.colors.player2Color },
          });
        }}
      >
        <S.ButtomText>{options.text}</S.ButtomText>
      </S.Buttom>
    )
  }

  function RenderChoise() {
    return (
      <React.Fragment>
        <S.MarkerTitle>choice</S.MarkerTitle>
        <S.MarkerWrapper>
          <S.MarkerButtom
            onPress={() => setmarker(2)}
            style={[
              marker === 2 ? { borderWidth: 2, backgroundColor: Theme.colors.buttomColor } : {},
            ]}
          >
            <O color={Theme.colors.player1Color} />
          </S.MarkerButtom>

          <S.MarkerButtom
            onPress={() => setmarker(1)}
            style={[
              marker === 1 ? { borderWidth: 2, backgroundColor: Theme.colors.buttomColor } : {},
            ]}
          >
            <X color={Theme.colors.player1Color} />
          </S.MarkerButtom>
        </S.MarkerWrapper>
      </React.Fragment>
    )
  }

  return (
    <S.Container>
      <S.ButtomWrapper>
        {renderButtom({ text: 'Beginner', robotMode: 0, gameType: 0 })}
        {renderButtom({ text: 'Intermediate', robotMode: 1, gameType: 0 })}
        {renderButtom({ text: 'Expert', robotMode: 2, gameType: 0 })}
      </S.ButtomWrapper>
      <RenderChoise />
    </S.Container>
  );
}
