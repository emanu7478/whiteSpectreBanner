import { Dimensions, PixelRatio, Platform } from 'react-native';
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
import DeviceInfo from 'react-native-device-info';
export const isTablet = DeviceInfo.isTablet();
export const isAndroid = Platform.OS === 'android';
const isLandScape = SCREEN_WIDTH > SCREEN_HEIGHT;
const defaultBase = isTablet ? 'height' : 'width';
const wscale: number = (isLandScape ? SCREEN_HEIGHT : SCREEN_WIDTH) / 375;
const hscale: number = (isLandScape ? SCREEN_WIDTH : SCREEN_HEIGHT) / 812;

export function Normalize(size: number, based: 'width' | 'height' = defaultBase) {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  return Platform.OS === 'ios' ? Math.round(PixelRatio.roundToNearestPixel(newSize)) + 2 : Math.round(PixelRatio.roundToNearestPixel(newSize)) + 2;
}
