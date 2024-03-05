import './App.css';

import ThemeProviderMUI from '@mui/material/styles/ThemeProvider';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import Main from 'components/Main/Context';
import theme from 'styles/theme'

function App() {

  const history = createBrowserHistory({ window });

  return (
    <ThemeProviderMUI theme={theme}>
      <div className="App">
        <HistoryRouter history={history}>
          <Main />
        </HistoryRouter>
      </div>
    </ThemeProviderMUI>
  );
}

export default App;
