import React, { PureComponent } from 'react';
import { Button, Icon } from 'antd';

export default class LandingPage extends PureComponent {
  render() {
    return (
      <Button.Group size="large" style={{ marginTop: '10px' }}>
        <Button type="primary">
          {' '}
          <Icon type="aliwangwang" />关注：345{' '}
        </Button>
        <Button type="primary">
          <Icon type="aliwangwang-o" />被关注：333{' '}
        </Button>
      </Button.Group>
    );
  }
}
