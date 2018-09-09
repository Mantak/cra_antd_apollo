import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { Icon } from 'antd';
import Footer from '../components/layouts/Footer';
import styles from './sign.less';

import SignIn from '../scenes/sign/In';
import SignUp from '../scenes/sign/Up';

const links = [
  {
    title: '帮助',
    href: '',
  },
  {
    title: '隐私',
    href: '',
  },
  {
    title: '条款',
    href: '',
  },
];

const copyright = (
  <div>
    Copyright <Icon type="copyright" /> 2017 蚂蚁金服体验技术部出品
  </div>
);

class SignLayout extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              <img
                alt=""
                className={styles.logo}
                src="https://gw.alipayobjects.com/zos/rmsportal/NGCCBOENpgTXpBWUIPnI.svg"
              />
              <span className={styles.title}>Nearby Book</span>
            </Link>
          </div>
          <div className={styles.desc}>Nearby Book 构建个人知识体系</div>
        </div>
        <Switch>
          <Route path="/sign/in" component={SignIn} />
          <Route path="/sign/up" component={SignUp} />
        </Switch>
        <Footer className={styles.footer} links={links} copyright={copyright} />
      </div>
    );
  }
}

export default SignLayout;
