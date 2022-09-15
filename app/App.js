import React from "react";
import { View, Text } from "react-native";
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navigation from "./Navigation";
import Toast from "./components/Toast";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Toast />
        <Navigation/>
      </PaperProvider>
    </Provider>
  );
}
