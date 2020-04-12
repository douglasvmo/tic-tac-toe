import { StyleSheet } from 'react-native';
import constants from 'expo-constants';

export const color = {
  blue: '#2980b9',
  red: '#e74c3c',
  primaryWhite: '#f1f2f6',
  primaryGray: '#ced6e0',
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryGray,
    justifyContent: 'flex-start',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  header: {
    paddingTop: constants.statusBarHeight,
    width: '100%',
    backgroundColor: '#f39c12',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#2c3e50',
    marginBottom: 10,
    marginLeft: 10,
  },

  tictactoe: {
    height: 243,
    width: 243,
  },
  square: {
    width: 80,
    height: 80,
    backgroundColor: color.primaryGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#576574',
  },
  img: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
    opacity: 0.8,
  },
  scoreWrapper: {
    height: 55,
    marginBottom: 10,
    backgroundColor: color.primaryWhite,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#dcdde1',
    marginBottom: 30,
  },
  score: {
    flexDirection: 'row',
  },
  scoreTitle: {
    width: 120,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
  scoreText: {
    width: 120,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  winnerWrapper: {
    height: '20%',
    justifyContent: 'space-around',
    marginBottom: '10%',
  },
  winnerDisplay: {
    justifyContent: 'center',
  },
  winnerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default style;
