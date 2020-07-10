import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Pages
import ShoppingCartPage from "./components/ShoppingCartPage";
import ProductListPage from "./components/ProductListPage";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0d69b4',
    }
  }
});

function App({ store }) {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/" component={ProductListPage} />
            <Route path="/carro" component={ShoppingCartPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
