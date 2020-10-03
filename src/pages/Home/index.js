import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as S from './style';
import O from '../../components/O';
import X from '../../components/X';

export default function Home() {
  const navigation = useNavigation();
  const [marker, setmarker] = useState(1);
  return (
    <S.Container>
      <S.ButtomWrapper>
        <S.Buttom
          onPress={() => {
            navigation.navigate('TicTacToe', {
              robotMode: 0,
              gameType: 0,
              player1: { symbol: marker, color: '#2980b9' },
              player2: { symbol: marker === 1 ? 2 : 1, color: '#e74c3c' },
            });
          }}
        >
          <S.ButtomText>Beginner</S.ButtomText>
        </S.Buttom>
        <S.Buttom
          onPress={() => {
            navigation.navigate('TicTacToe', {
              robotMode: 1,
              gameType: 0,
              player1: { symbol: marker, color: '#2980b9' },
              player2: { symbol: marker === 1 ? 2 : 1, color: '#e74c3c' },
            });
          }}
        >
          <S.ButtomText>Intermediate</S.ButtomText>
        </S.Buttom>
        <S.Buttom
          onPress={() => {
            navigation.navigate('TicTacToe', {
              robotMode: 2,
              gameType: 0,
              player1: { symbol: marker, color: '#2980b9' },
              player2: { symbol: marker === 1 ? 2 : 1, color: '#e74c3c' },
            });
          }}
        >
          <S.ButtomText>Expert</S.ButtomText>
        </S.Buttom>
      </S.ButtomWrapper>

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
    </S.Container>
  );
}
