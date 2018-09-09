import React from 'react';
import { withRouter } from 'react-router';
import { Menu, Icon, Avatar, Dropdown } from 'antd';
import { graphql } from 'react-apollo';
import localForage from 'localforage';
import { AuthConsumer } from '../../../HOCs/AuthContext';
import { tokenName } from '../../../config';
import REVOKE_TOKEN from '../../../graphql/auth/revoke_token_mutation.gql';
import styles from './icons.less';

const revokeTokenMutate = graphql(REVOKE_TOKEN, {
  props: ({ mutate }) => ({
    revokeToken() {
      return mutate();
    },
  }),
});

@withRouter
@revokeTokenMutate
export default class AvatarIcon extends React.PureComponent {
  onMenuClick = ({ key }) => {
    const { history, auth } = this.props;
    if (key === 'profile') {
      history.push(`/u/${this.props.currentUser.id}`);
    }
    if (key === 'config') {
      history.push('/u/config');
    }
    if (key === 'logout') {
      this.props.revokeToken().then(response => {
        const errors = response.data.revokeToken.errors;
        if (!errors) {
          localForage.removeItem(tokenName);
          // history.push('/');
          // 这里不用history,是想强制刷新页面，因为context里带的currentUser无法根据state来更新
          window.location.href = '/';
        }
      });
    }
  };
  render() {
    const { currentUser } = this.props;
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        <Menu.Item key="profile">
          <Icon type="user" />我的主页
        </Menu.Item>
        <Menu.Item key="config">
          <Icon type="setting" />设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />退出登录
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu} placement="bottomRight">
        <span className={`${styles.action}`}>
          <Avatar shape="square" size="small" src={currentUser.avatar_url} />
        </span>
      </Dropdown>
    );
  }
}
