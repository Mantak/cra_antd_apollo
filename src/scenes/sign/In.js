import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import localForage from 'localforage';
import { Form, Input, Tabs, Button, Icon, Checkbox, Row, Col } from 'antd';
import { graphql } from 'react-apollo';
import SIGN_IN from '../../graphql/auth/sign_in_mutation.gql';
import { tokenName } from '../../config';

import styles from './in.less';

const FormItem = Form.Item;
const { TabPane } = Tabs;

const withSignIn = graphql(SIGN_IN, {
  // 这里参考connect函数，就很好理解了，无非是graphql不仅仅提供props
  // 为子组件添加props，内容为打包graphql带的mutate而生成的函数
  // 函数名可以任意更改，这里采用了graphql里的命名函数，而该函数又与server端的
  // 接口一致，当然，这一切都可以任意起名字。只是为了统一标示
  props: ({ mutate }) => ({
    signIn(user) {
      return mutate({ variables: { ...user } });
    },
  }),
});

@withSignIn
@Form.create()
export default class SignInScene extends Component {
  state = {
    count: 0,
    type: 'account',
    loading: false,
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onSwitch = key => {
    this.setState({
      type: key,
    });
  };

  onGetCaptcha = () => {
    let count = 59;
    this.setState({ count });
    this.interval = setInterval(() => {
      count -= 1;
      this.setState({ count });
      if (count === 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  };

  handleSubmit = e => {
    e.preventDefault();
    // const { type } = this.state;
    this.props.form.validateFields({ force: true }, (err, values) => {
      if (!err) {
        this.setState({ loading: true });
        // 这里的signIn是grapqhl传进来都函数，发起fetch请求
        return this.props.signIn(values).then(response => {
          const payload = response.data.signIn;
          if (payload.messages.length === 0) {
            // 如果用户登陆成功，则保存token
            localForage.setItem(tokenName, payload.result.token).then(() => {
              const { search, hash } = this.props.location;
              if (search) {
                this.props.history.push(search.split('return=')[1] + hash);
              } else {
                this.props.history.push('/');
              }
            });
          } else {
            localForage.removeItem(tokenName);
            this.setState({ loading: false });
            this.props.form.setFieldsValue({ password: '' });
          }
        });
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const { count, type } = this.state;

    return (
      <div className={styles.main}>
        <Form onSubmit={this.handleSubmit}>
          <Tabs animated={false} className={styles.tabs} activeKey={type} onChange={this.onSwitch}>
            <TabPane tab="账户密码登录" key="account">
              <FormItem>
                {getFieldDecorator('email', {
                  rules: [
                    {
                      required: type === 'account',
                      message: '请输入账户名！',
                    },
                  ],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="user" className={styles.prefixIcon} />}
                    placeholder="admin"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: type === 'account',
                      message: '请输入密码！',
                    },
                  ],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="lock" className={styles.prefixIcon} />}
                    type="password"
                    placeholder="888888"
                  />
                )}
              </FormItem>
            </TabPane>
            <TabPane tab="手机号登录" key="mobile">
              <FormItem>
                {getFieldDecorator('mobile', {
                  rules: [
                    {
                      required: type === 'mobile',
                      message: '请输入手机号！',
                    },
                    {
                      pattern: /^1\d{10}$/,
                      message: '手机号格式错误！',
                    },
                  ],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="mobile" className={styles.prefixIcon} />}
                    placeholder="手机号"
                  />
                )}
              </FormItem>
              <FormItem>
                <Row gutter={8}>
                  <Col span={16}>
                    {getFieldDecorator('captcha', {
                      rules: [
                        {
                          required: type === 'mobile',
                          message: '请输入验证码！',
                        },
                      ],
                    })(
                      <Input
                        size="large"
                        prefix={<Icon type="mail" className={styles.prefixIcon} />}
                        placeholder="验证码"
                      />
                    )}
                  </Col>
                  <Col span={8}>
                    <Button
                      disabled={count}
                      className={styles.getCaptcha}
                      size="large"
                      onClick={this.onGetCaptcha}
                    >
                      {count ? `${count} s` : '获取验证码'}
                    </Button>
                  </Col>
                </Row>
              </FormItem>
            </TabPane>
          </Tabs>
          <FormItem className={styles.additional}>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox className={styles.autoLogin}>自动登录</Checkbox>)}
            <a className={styles.forgot} href="">
              忘记密码
            </a>
            <Button
              size="large"
              loading={this.state.loading}
              className={styles.submit}
              type="primary"
              htmlType="submit"
            >
              登录
            </Button>
          </FormItem>
        </Form>
        <div className={styles.other}>
          其他登录方式
          {/* 需要加到 Icon 中 */}
          <span className={styles.iconAlipay} />
          <span className={styles.iconTaobao} />
          <span className={styles.iconWeibo} />
          <Link className={styles.register} to="/sign/up">
            注册账户
          </Link>
        </div>
      </div>
    );
  }
}
