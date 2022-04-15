import React, { useState, useEffect } from 'react';
import { FlatList, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import * as S from './style';

import Circle from '../../components/O';
import X from '../../components/X';

export default function TicTacToe(props) {
  const navigation = useNavigation();
  const { robotMode, player1, player2, gameType } = props.route.params;

  const [board, setBoard] = useState(Array(9).fill(0));

  const [gameTime, setGameTime] = useState(1);
  const [gameFinished, setGameFinished] = useState(false);
  const [winner, setWinner] = useState('');
  const [score, setscore] = useState([0, 0]);
  npm;

  useEffect(() => {
    const winerNumber = getTheWinner();

    if (winerNumber !== -1) {
      setGameFinished(true);
      showWinner(winerNumber);
    } else if (gameType === 0) {
      robotTurn();
    }
  }, board);

  const robotTurn = () => {
    if (gameFinished || gameTime !== 2) {
      return null;
    }

    setGameTime(1);

    switch (robotMode) {
      case 0:
        easyRobot();
        break;
      case 1:
        normalRobot();
        break;
      case 2:
        expertRobot();
        break;
    }
  };

  const easyRobot = () => {
    const boardIndexFree = [];

    board.forEach((square, squareIndex) => {
      if (square !== player1.symbol && square !== player2.symbol) {
        boardIndexFree.push(squareIndex);
      }
    });

    const robotPlayIndex =
      boardIndexFree[
        Math.floor(Math.random() * (boardIndexFree.length - 0)) + 0
      ];

    makeRobotPlay(robotPlayIndex);
  };

  const makeRobotPlay = (index) => {
    const play = board.map((item, itemIndex) =>
      itemIndex === index ? player2.symbol : item,
    );

    setBoard(play);
  };

  const normalRobot = () => {
    let found = false;
    let robotPlayIndex;
    // rows
    board.forEach((item, index) => {
      if (index === 0 || index === 3 || index === 6) {
        if (item !== 0 && item === board[index + 1] && board[index + 2] === 0) {
          found = true;
          robotPlayIndex = index + 2;
        }
        if (item !== 0 && item === board[index + 2] && board[index + 1] === 0) {
          found = true;
          robotPlayIndex = index + 1;
        }
        if (
          item === 0 &&
          board[index + 1] !== 0 &&
          board[index + 1] === board[index + 2]
        ) {
          found = true;
          robotPlayIndex = index;
        }
      }
    });

    if (!found) {
      // columns
      board.forEach((item, index) => {
        if (index === 0 || index === 1 || index === 2) {
          if (
            item === 0 &&
            board[index + 3] !== 0 &&
            board[index + 3] === board[index + 6]
          ) {
            found = true;
            robotPlayIndex = index;
          }
          if (
            item !== 0 &&
            item === board[index + 3] &&
            board[index + 6] === 0
          ) {
            found = true;
            robotPlayIndex = index + 6;
          }
          if (
            item !== 0 &&
            item === board[index + 6] &&
            board[index + 3] === 0
          ) {
            found = true;
            robotPlayIndex = index + 3;
          }
        }
      });
    }

    if (!found) {
      easyRobot();
    } else {
      makeRobotPlay(robotPlayIndex);
    }
  };

  const expertRobot = () => {
    let found = false;
    let robotPlayIndex;

    if (board[0] !== 0 && board[0] === board[8] && board[4] === 0) {
      found = true;
      robotPlayIndex = 4;
    }
    if (board[0] !== 0 && board[0] === board[4] && board[8] === 0) {
      found = true;
      robotPlayIndex = 8;
    }
    if (board[0] === 0 && board[4] === board[8] && board[8] !== 0) {
      found = true;
      robotPlayIndex = 0;
    }

    if (board[2] !== 0 && board[2] === board[6] && board[4] === 0) {
      found = true;
      robotPlayIndex = 4;
    }
    if (board[2] !== 0 && board[2] === board[4] && board[6] === 0) {
      found = true;
      robotPlayIndex = 6;
    }
    if (board[2] === 0 && board[4] === board[6] && board[6] !== 0) {
      found = true;
      robotPlayIndex = 2;
    }

    if (!found) {
      normalRobot();
    } else {
      makeRobotPlay(robotPlayIndex);
    }
  };

  const getTheWinner = () => {
    let winer = -1;
    const possiblesWaysToWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    possiblesWaysToWin.forEach((possible) => {
      if (possible.every((cell) => cell === player1.symbol)) {
        winer = 1;
      } else if (possible.every((cell) => cell === player2.symbol)) {
        winer = 2;
      }
    });

    if (
      winer === -1 &&
      board.every((item) => item === player1.symbol || item === player2.symbol)
    ) {
      winer = 0;
    }
    return winer;
  };

  const showWinner = (winerNumber) => {
    if (winerNumber === 0) {
      setWinner('draw');
    }
    if (winerNumber === 1) {
      setWinner('you won');
      setscore([score[0] + 1, score[1]]);
    }
    if (winerNumber === 2) {
      setWinner('you lost');
      setscore([score[0], score[1] + 1]);
    }
  };

  const handlePress = (index) => {
    if (gameFinished) {
      return null;
    }
    if (board[index] === player1.symbol || board[index] === player2.symbol) {
      console.log('campo já marcado');
      return null;
    }
    if (gameTime !== 1) {
      console.log('vez do player 2');
      return null;
    }

    setBoard(
      board.map((item, itemIndex) =>
        itemIndex === index ? player1.symbol : item,
      ),
    );
    setGameTime(2);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(0));
    setGameFinished(false);
  };

  const renderSquareComponent = ({ item, index }) => {
    const borderValue = 5;
    let border = {};
    switch (index) {
      case 0:
        border = {
          borderRightWidth: borderValue,
          borderBottomWidth: borderValue,
        };
        break;
      case 1:
        border = { borderBottomWidth: borderValue };
        break;
      case 2:
        border = {
          borderBottomWidth: borderValue,
          borderLeftWidth: borderValue,
        };
        break;
      case 3:
        border = { borderRightWidth: borderValue };
        break;
      case 5:
        border = { borderLeftWidth: borderValue };
        break;
      case 6:
        border = {
          borderRightWidth: borderValue,
          borderTopWidth: borderValue,
        };
        break;
      case 7:
        border = { borderTopWidth: borderValue };
        break;
      case 8:
        border = {
          borderLeftWidth: borderValue,
          borderTopWidth: borderValue,
        };
        break;
    }

    return (
      <S.Square style={border} onTouchStart={() => handlePress(index)}>
        {item === 2 && (
          <Circle color={player1.symbol === 1 ? S.color.red : S.color.blue} />
        )}
        {item === 1 && (
          <X color={player1.symbol === 2 ? S.color.red : S.color.blue} />
        )}
      </S.Square>
    );
  };

  function renderResul() {
    return (
      <S.WinnerWrapper>
        {gameFinished && (
          <S.WinnerDisplay>
            {winner.includes('won') && (
              <S.WinnerText style={{ color: S.color.blue }}>
                {winner}
              </S.WinnerText>
            )}
            {winner.includes('lost') && (
              <S.WinnerText style={{ color: S.color.red }}>
                {winner}
              </S.WinnerText>
            )}
            {winner.includes('draw') && <S.WinnerText>{winner}</S.WinnerText>}
          </S.WinnerDisplay>
        )}
        {gameFinished && (
          <Button title="play again" color="#58B19F" onPress={handleReset} />
        )}
      </S.WinnerWrapper>
    );
  }

  function renderBody() {
    function renderScoreItem(options) {
      return (
        <S.Score>
          <S.ScoreTitle style={{ color: S.color.blue }}>
            {options.value1}
          </S.ScoreTitle>
          <S.ScoreTitle style={{ color: S.color.red }}>
            {options.value2}
          </S.ScoreTitle>
        </S.Score>
      );
    }

    return (
      <S.Wrapper>
        <S.ScoreWrapper>
          {renderScoreItem({
            value1: gameType === 1 ? 'Player 1' : 'Player',
            value2: gameType === 1 ? 'Player 2' : 'Robo',
          })}
          {renderScoreItem({ value1: score[0], value2: score[1] })}
        </S.ScoreWrapper>

        <S.Tictactoe>
          <FlatList
            data={board}
            keyExtractor={(item, index) => index}
            renderItem={renderSquareComponent}
            numColumns={3}
          />
        </S.Tictactoe>
      </S.Wrapper>
    );
  }

  function renderHeader() {
    return (
      <S.Header>
        <TouchableOpacity
          style={{ width: '10%' }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={24} />
        </TouchableOpacity>
        {robotMode === 0 && <S.HeaderText>Beginner</S.HeaderText>}
        {robotMode === 1 && <S.HeaderText>Intermediate</S.HeaderText>}
        {robotMode === 2 && (
          <S.HeaderText style={{ fontSize: 20 }}>Expert</S.HeaderText>
        )}
      </S.Header>
    );
  }

  return (
    <S.Container>
      {renderHeader()}
      {renderBody()}
      {renderResul()}
    </S.Container>
  );
}
