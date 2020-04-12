import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ced6e0',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttomWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    width: '100%',
  },
  markerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#2c3e50',
  },
  markerWrapper: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '20%',
    width: '100%',
    flexDirection: 'row',
  },
  markerButtom: {
    height: 100,
    width: 100,
    borderColor: '#2c3e50',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttom: {
    width: '80%',
    height: '10%',
    borderColor: '#2c3e50',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#f39c12',
  },
  buttomText: {
    color: '#2c3e50',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default style;
