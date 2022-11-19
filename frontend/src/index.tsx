import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import theme from './theme/theme';

import App from './App';
import { store } from './store/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render( 
    <ThemeProvider theme={theme}>
      <Router>
      <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </ThemeProvider>
);