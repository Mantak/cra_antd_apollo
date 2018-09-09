import React, { PureComponent } from 'react';
import { Popover, Icon, Badge, Spin } from 'antd';
import List from './MessageList';

import styles from './icons.less';

import { graphql } from 'react-apollo';
import USER_MESSAGES_QUERY from '../../../graphql/messages/user_messages_query.gql';
import NEW_MESSAGE_SUBSCRIPTION from '../../../graphql/messages/new_message_subscription.gql';

const withMessages = graphql(USER_MESSAGES_QUERY, {
  options: ownProps => ({
    variables: {
      userId: ownProps.currentUser.id,
    },
  }),
  props: ({ ownProps, data }) => {
    return {
      data,
      loadMoreMessages() {
        return data.fetchMore({
          variables: { pageNumber: data.userMessages.pageNumber + 1 },
          updateQuery(previousResult, { fetchMoreResult }) {
            const { userMessages } = fetchMoreResult;
            return {
              userMessages: {
                ...userMessages,
                entries: [...previousResult.userMessages.entries, ...userMessages.entries],
              },
            };
          },
        });
      },
      subscribeToNewMessage() {
        return data.subscribeToMore({
          document: NEW_MESSAGE_SUBSCRIPTION,
          variables: {
            userId: ownProps.currentUser.id,
          },
          updateQuery(previousResult, { subscriptionData }) {
            const { freshMessage } = subscriptionData.data;
            return {
              userMessages: {
                ...previousResult.userMessages,
                entries: [freshMessage, ...previousResult.userMessages.entries],
              },
            };
          },
        });
      },
    };
  },
});

@withMessages
export default class NoticeIcon extends PureComponent {
  componentWillMount() {
    this.props.subscribeToNewMessage();
  }
  render() {
    const {
      data: { loading, userMessages },
      loadMoreMessages,
    } = this.props;
    if (loading) {
      return <Spin spinning={loading}>loading...</Spin>;
    }
    const messages = userMessages && userMessages.entries;
    const content = <List title="我的消息" messages={messages} loadMore={loadMoreMessages} />;
    return (
      <Popover
        placement="bottomRight"
        content={content}
        popupClassName={styles.popover}
        trigger="click"
        arrowPointAtCenter
        popupAlign={{ offset: [20, -20] }}
      >
        <span className={styles.action}>
          <Badge count={messages && messages.length} className={styles.badge}>
            <Icon type="message" className={styles.icon} />
          </Badge>
        </span>
      </Popover>
    );
  }
}
