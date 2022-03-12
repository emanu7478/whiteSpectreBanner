import { StyleSheet } from 'react-native';

import { Normalize } from '../../utility/normalize';
import * as colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  indicatorConatiner: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: Normalize(20),
    flexDirection: 'row',
  },
  textButtonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: Normalize(15),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Normalize(15),
    width: '100%',
  },
  prevTextButton: {
    fontWeight: 'bold',
    fontSize: Normalize(15),
    color: colors.white,
    alignSelf: 'flex-start',
  },
  nextTextButton: {
    fontWeight: 'bold',
    fontSize: Normalize(15),
    color: colors.white,
    alignSelf: 'flex-end',
  },
  disabledButton: {
    color: colors.lightgrey,
  },
});
