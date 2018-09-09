import React from 'react';
import { withRouter } from 'react-router';
import { Tabs } from 'antd';

import MainTracks from './MainTracks';
import MainWritings from './MainWritings';
import MainBooks from './MainBooks';

const TabPane = Tabs.TabPane;

@withRouter
export default class LandingPage extends React.Component {
  render() {
    const {
      location: { search },
      match: { params },
    } = this.props;
    const activeKey = (search && search.split('t=')[1]) || 'tracks';
    const authorId = params.id;
    return (
      <div className="main-card">
        <Tabs defaultActiveKey={activeKey}>
          <TabPane tab="动态" key="tracks">
            {' '}
            <MainTracks authorId={authorId} />{' '}
          </TabPane>
          <TabPane tab="著作" key="writings">
            {' '}
            <MainWritings authorId={authorId} />{' '}
          </TabPane>
          <TabPane tab="资料" key="assets">
            {' '}
            3的内容{' '}
          </TabPane>
          <TabPane tab="书架" key="books">
            {' '}
            <MainBooks authorId={authorId} />{' '}
          </TabPane>
          <TabPane tab="收藏" key="favorites">
            {' '}
            3的内容{' '}
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
