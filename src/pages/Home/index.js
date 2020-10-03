import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as S from './style';
import O from '../../components/O';
import X from '../../components/X';

export default function Home() {
  const navigation = useNavigation();
  const [marker, setmarker] = useState(1);

  function renderButtom(options) {
    return (
      <S.Buttom
        onPress={() => {
          navigation.navigate('TicTacToe', {
            robotMode: options.robotMode,
            gameType: options.gameType,
            player1: { symbol: marker, color: '#2980b9' },
            player2: { symbol: marker === 1 ? 2 : 1, color: '#e74c3c' },
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
              marker === 2 ? { borderWidth: 2, backgroundColor: '#f39c12' } : {},
            ]}
          >
            <O color='#2980b9' />
          </S.MarkerButtom>

          <S.MarkerButtom
            onPress={() => setmarker(1)}
            style={[
              marker === 1 ? { borderWidth: 2, backgroundColor: '#f39c12' } : {},
            ]}
          >
            <X color='#2980b9' />
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
      <RenderChoise/>
    </S.Container>
  );
}
