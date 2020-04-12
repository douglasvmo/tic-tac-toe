import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import style from './style';
import O from '../../components/O';
import X from '../../components/X';

export default function Home() {
  const navigation = useNavigation();
  const [marker, setmarker] = useState(1);
  return (
    <View style={style.container}>
      <View style={style.buttomWrapper}>
        <TouchableOpacity
          style={style.buttom}
          onPress={() => {
            navigation.navigate('TicTacToe', {
              robotMode: 0,
              gameType: 0,
              player1: { symbol: marker, color: '#2980b9' },
              player2: { symbol: marker === 1 ? 2 : 1, color: '#e74c3c' },
            });
          }}
        >
          <Text style={style.buttomText}>Beginner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.buttom}
          onPress={() => {
            navigation.navigate('TicTacToe', {
              robotMode: 1,
              gameType: 0,
              player1: { symbol: marker, color: '#2980b9' },
              player2: { symbol: marker === 1 ? 2 : 1, color: '#e74c3c' },
            });
          }}
        >
          <Text style={style.buttomText}>Intermediate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.buttom}
          onPress={() => {
            navigation.navigate('TicTacToe', {
              robotMode: 2,
              gameType: 0,
              player1: { symbol: marker, color: '#2980b9' },
              player2: { symbol: marker === 1 ? 2 : 1, color: '#e74c3c' },
            });
          }}
        >
          <Text style={[style.buttomText, { fontSize: 22 }]}>Expert</Text>
        </TouchableOpacity>
      </View>

      <Text style={style.markerTitle}>choice</Text>
      <View style={style.markerWrapper}>
        <TouchableOpacity
          onPress={() => setmarker(2)}
          style={[
            style.markerButtom,
            marker === 2 ? { borderWidth: 2, backgroundColor: '#f39c12' } : {},
          ]}
        >
          <O color='#2980b9' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setmarker(1)}
          style={[
            style.markerButtom,
            marker === 1 ? { borderWidth: 2, backgroundColor: '#f39c12' } : {},
          ]}
        >
          <X color='#2980b9' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
