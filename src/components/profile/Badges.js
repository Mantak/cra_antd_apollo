import React, { PureComponent } from 'react';
import { Card, Icon } from 'antd';

export default class LandingPage extends PureComponent {
  render() {
    return (
      <div className="main-card" style={{ padding: '0px' }}>
        <Card title="个人成就" bordered={false}>
          <Icon type="message" /> 留言，3323条
        </Card>
      </div>
    );
  }
}
