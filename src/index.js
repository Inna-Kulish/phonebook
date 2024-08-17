import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import { store, persistor } from 'redux/store';
import { App } from 'components/App';
import './index.css';

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: {
      main: '#b2dfdb',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/phonebook">
          <ThemeProvider theme={theme}>
          <App />
          </ThemeProvider>
        </BrowserRouter>
        </PersistGate>
    </Provider>
    </React.StrictMode>
);