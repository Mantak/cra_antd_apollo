import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Spin } from 'antd';

import MainHeader from '../components/layouts/Header';
import styles from './main.less';

import { AuthProvider } from '../HOCs/AuthContext';
import ProtectedRoute from '../HOCs/ProtectedRoute';
import NotFound from '../components/layouts/Exception';
import Home from '../scenes/Home';
import Profile from '../scenes/users/Profile';
import UserConfig from '../scenes/users/Config';

const { Header, Content } = Layout;

export default class MainLayout extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Layout>
          <Header className={styles.header}>
            <div className="center-container">
              <MainHeader />
            </div>
          </Header>
          <Content className={styles.content}>
            <Switch>
              <Route path="/" component={Home} exact />
              <ProtectedRoute path="/u/config" component={UserConfig} exact />
              <Route path="/u/:id" component={Profile} />
            </Switch>
          </Content>
        </Layout>
      </AuthProvider>
    );
  }
}
