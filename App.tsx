import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Store, Persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppRoute from './src';

function BannerSlider() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <NavigationContainer>
          <SafeAreaProvider>
            <AppRoute />
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default BannerSlider;
