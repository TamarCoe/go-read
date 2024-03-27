import './App.css';

import ThemeProviderMUI from '@mui/material/styles/ThemeProvider';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Buffer } from "buffer"
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import Main from 'components/Main/Context';
import theme from 'styles/theme'
import axios from 'axios';

import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  const history = createBrowserHistory({ window });
  // const encoded = Buffer.from(process.env.REACT_APP_USERNAME + ':' + process.env.REACT_APP_PASSWORD).toString('base64');

  // useEffect(() => {
  //   axios.interceptors.request.use((config) => {
  //     config.headers.Authorization = 'Basic ' + encoded
  //     return config;
  //   }, (error) => {
  //     return Promise.reject(error);
  //   });
  // }, [])

  return (
    <Provider store={store}>
      <ThemeProviderMUI theme={theme}>
        <div className="App">
          <HistoryRouter history={history}>
            <Main />
          </HistoryRouter>
        </div>
      </ThemeProviderMUI>
    </Provider>
  );
}

export default App;
