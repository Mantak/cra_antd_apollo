import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button, message } from 'antd';
import { AuthConsumer } from '../../HOCs/AuthContext';

import emptyNotice from '../../assets/svgs/empty_notice.svg';
import emptyMessage from '../../assets/svgs/empty_message.svg';
import emptyTodo from '../../assets/svgs/empty_todo.svg';

import HeaderSearch from './header/Search';
import NoticeIcon from './header/NoticeIcon';
import MessageIcon from './header/MessageIcon';
import AvatarIcon from './header/AvatarIcon';
import styles from './header.less';

const { Header } = Layout;
const LOGO_URL = 'https://gw.alipayobjects.com/zos/rmsportal/gVAKqIsuJCepKNbgbSwE.svg';

const noticeData = {
  通知: [],
  消息: [
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      datetime: '4 个月前',
      id: '000000001',
      key: '000000001',
      title: '你收到了 14 份新周报',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
      datetime: '4 个月前',
      id: '000000003',
      key: '000000003',
      read: true,
      title: '这种模板可以区分多种通知类型',
      type: '通知',
    },
  ],
  待办: [
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      datetime: '4 个月前',
      id: '000000001',
      key: '000000001',
      title: '你收到了 14 份新周报',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      datetime: '4 个月前',
      id: '000000002',
      key: '000000002',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      type: '通知',
    },
    {
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
      datetime: '4 个月前',
      id: '000000003',
      key: '000000003',
      read: true,
      title: '这种模板可以区分多种通知类型',
      type: '通知',
    },
  ],
};

@withRouter
export default class MainHeader extends React.PureComponent {
  handleNoticeClear = type => {
    message.success(`清空了${type}`);
    // this.props.dispatch({
    //   type: 'global/clearNotices',
    //   payload: type,
    // });
  };

  handleNoticeVisibleChange = visible => {
    if (visible) {
      //  this.props.dispatch({
      //    type: 'global/fetchNotices',
      //  });
    }
  };

  clickMenu = ({ key }) => {
    this.props.history.push(key);
  };
  render() {
    const { location, fetchingNotices } = this.props;
    return (
      <AuthConsumer>
        {({ isAuth, currentUser }) => (
          <Header className={styles.header}>
            <div id={styles.logo}>
              <Link to="/landing">
                <img src={LOGO_URL} alt="logo" />
                <span>NearbyBook</span>
              </Link>
            </div>
            <div id={styles.menu}>
              <Menu selectedKeys={[location.pathname]} mode="horizontal" onClick={this.clickMenu}>
                <Menu.Item key="/">首页</Menu.Item>
                <Menu.Item key="/writings">书库</Menu.Item>
                <Menu.Item key="/assets">资源</Menu.Item>
                <Menu.Item key="/links">素材</Menu.Item>
                <Menu.Item key="/books">共享</Menu.Item>
                <Menu.Item key="/meetings">线下</Menu.Item>
              </Menu>
            </div>
            {isAuth ? (
              <div id={styles.right}>
                <HeaderSearch
                  placeholder="站内搜索"
                  dataSource={['搜索提示一', '搜索提示二', '搜索提示三']}
                  onSearch={value => {
                    console.log('input', value); // eslint-disable-line
                  }}
                  onPressEnter={value => {
                    console.log('enter', value); // eslint-disable-line
                  }}
                />
                <NoticeIcon
                  className={styles.action}
                  count={currentUser && currentUser.notifyCount}
                  onItemClick={(item, tabProps) => {
                    console.log(item, tabProps); // eslint-disable-line
                  }}
                  onClear={this.handleNoticeClear}
                  onPopupVisibleChange={this.handleNoticeVisibleChange}
                  loading={fetchingNotices}
                  popupAlign={{ offset: [20, -16] }}
                >
                  <NoticeIcon.Tab
                    list={noticeData['通知']}
                    title="通知"
                    emptyText="你已查看所有通知"
                    emptyImage={emptyNotice}
                  />
                  <NoticeIcon.Tab
                    list={noticeData['消息']}
                    title="消息"
                    emptyText="您已读完所有消息"
                    emptyImage={emptyMessage}
                  />
                  <NoticeIcon.Tab
                    list={noticeData['待办']}
                    title="待办"
                    emptyText="你已完成所有待办"
                    emptyImage={emptyTodo}
                  />
                </NoticeIcon>
                <MessageIcon currentUser={currentUser} />
                <AvatarIcon currentUser={currentUser} />
              </div>
            ) : (
              <div id={styles.right}>
                <Link to="/sign/in">
                  <Button type="primary" style={{ marginRight: '10px' }}>
                    登陆
                  </Button>
                </Link>
                <Link to="/sign/up">
                  <Button>注册</Button>
                </Link>
              </div>
            )}
          </Header>
        )}
      </AuthConsumer>
    );
  }
}
