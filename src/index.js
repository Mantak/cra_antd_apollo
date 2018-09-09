import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './client';

// 注册service workder
import registerServiceWorker from './registerServiceWorker';

import './styles/global.less';
import './styles/prism.css';

import ErrorBoundary from './HOCs/ErrorBoundary';
import ScrollToPosition from './HOCs/ScrollToPosition';
import Sign from './layouts/Sign';
import Main from './layouts/Main';

registerServiceWorker();

render(
  <ErrorBoundary>
    <ApolloProvider client={client}>
      <Router>
        <ScrollToPosition>
          <Switch>
            <Route path="/sign" component={Sign} />
            <Route path="/" component={Main} />
          </Switch>
        </ScrollToPosition>
      </Router>
    </ApolloProvider>
  </ErrorBoundary>,
  document.getElementById('root')
);
