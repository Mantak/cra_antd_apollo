import React, { PureComponent } from 'react';
import { Icon, Button, Modal, Input, message } from 'antd';
import { graphql } from 'react-apollo';

import styles from './header.less';
import CREATE_MESSAGE_MUTATION from '../../graphql/messages/create_message_mutation.gql';

const { TextArea } = Input;

const withCreateMessage = graphql(CREATE_MESSAGE_MUTATION, {
  // 这里参考connect函数，就很好理解了，无非是graphql提供props
  // 为子组件添加props，内容为打包graphql带的mutate而生成的函数
  // 函数名可以任意更改，这里采用了graphql里的命名函数，而该函数又与server端的
  // 接口一致，当然，这一切都可以任意起名字。只是为了统一标示
  // input 为server端定义的参数，messageInput为满足server端定义的规范的对象
  props: ({ mutate }) => ({
    sendMessage(messageInput) {
      return mutate({ variables: { input: messageInput } });
    },
  }),
});

@withCreateMessage
export default class LandingPage extends PureComponent {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    const receiverId = this.props.user.id;
    const content = this.refs.words.textAreaRef.value;
    this.props.sendMessage({ receiverId, content }).then(response => {
      const payload = response.data.createMessage;
      if (!payload.errors) {
        message.success('发送成功');
        this.setState({
          visible: false,
        });
      } else {
        message.error('发送失败');
      }
    });
  };
  handleCancel = () => {
    this.refs.words.textAreaRef.value = '';
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="main-card" style={{ padding: '0px' }}>
        <div className={styles.cover}>
          <img
            src="http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/01/66/ce5b291a1229cfbb07854040da1133c2.jpg"
            alt="用户封面"
          />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.wrapper2}>
            <div className={styles.avatar}>
              <img
                width="160"
                height="160"
                alt={this.props.user.email}
                src={this.props.user.avatar_url}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                <h1 className={styles.h1}>
                  <span className={styles.name}>小安</span>
                  <span className={styles.bio}>有思想的安全新媒体</span>
                </h1>
              </div>
              <div className={styles.info}>
                <Icon type="appstore" style={{ margin: '0px 5px 0px 5px' }} /> 高新科技
              </div>
              <div className={styles.action}>
                <Button className={styles.flatButton}>
                  <Icon type="down" />
                  查看详细资料
                </Button>
                <div className={styles.rightButtons}>
                  <Button type="primary" style={{ marginRight: '10px' }}>
                    <Icon type="plus" />
                    关注
                  </Button>
                  <Button onClick={this.showModal}>
                    <Icon type="message" />
                    发私信
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          title="发私信"
          visible={this.state.visible}
          okText="发送"
          onOk={this.handleOk}
          cancelText="取消"
          onCancel={this.handleCancel}
        >
          <TextArea rows={6} ref="words" />
        </Modal>
      </div>
    );
  }
}
