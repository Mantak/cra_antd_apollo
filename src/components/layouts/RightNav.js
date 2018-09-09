import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import styles from './right_nav.less';

export default class UsersConfigPage extends PureComponent {
  render() {
    return this.props.currentUser ? (
      <div className="main-card" style={{ padding: '0' }}>
        <ul className={styles.ul}>
          <Link to={`/people/${this.props.currentUser.id}?t=writings`}>
            <li className={styles.li}>
              <Icon type="star" className={styles.icon} /> 我的著作
            </li>
          </Link>
          <Link to="/">
            <li className={styles.li}>
              <Icon type="star" className={styles.icon} /> 我的资料
            </li>
          </Link>
          <Link to="/">
            <li className={styles.li}>
              <Icon type="star" className={styles.icon} /> 我的书架
            </li>
          </Link>
          <Link to="/">
            <li className={styles.li}>
              <Icon type="star" className={styles.icon} /> 我的收藏
            </li>
          </Link>
        </ul>
      </div>
    ) : null;
  }
}
