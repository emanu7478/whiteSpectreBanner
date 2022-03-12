import { StyleSheet } from 'react-native';

import * as colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    height: '100%',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  indicatorConatiner: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
  },
  textButtonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    width: '100%',
  },
  prevTextButton: {
    fontWeight: 'bold',
    fontSize: 15,
    color: colors.white,
    alignSelf: 'flex-start',
  },
  nextTextButton: {
    fontWeight: 'bold',
    fontSize: 15,
    color: colors.white,
    alignSelf: 'flex-end',
  },
});
