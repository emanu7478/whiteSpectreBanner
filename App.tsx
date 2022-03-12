// LIBRARY IMPORTS
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// REDUX
import { Provider } from 'react-redux';
import { Store, Persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

// APP ROUTE
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
