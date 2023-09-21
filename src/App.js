import React from 'react';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store';

import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer className="toast-container" autoClose={3000} />

        <ToastContainer />
      </Router>
    </Provider>
  );
}
