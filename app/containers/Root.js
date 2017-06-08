// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Routes from '../routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: 'black',
  },
});

type RootType = {
  store: {},
  history: {}
};

export default function Root({ store, history }: RootType) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Routes />
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}
