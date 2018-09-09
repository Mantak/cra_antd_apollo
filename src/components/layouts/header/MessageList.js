import React from 'react';
import { Avatar, List, Button } from 'antd';
import emptyImage from '../../../assets/svgs/empty_notice.svg';
import { formatTime } from '../../../utils/moment';
import styles from './icons.less';

const ButtonGroup = Button.Group;

export default class NoticeList extends React.Component {
  render() {
    const { messages, onClear } = this.props;
    if (!messages || messages.length === 0) {
      return (
        <div className={styles.notFound}>
          <img src={emptyImage} alt="not found" />
          <div>暂无私信</div>
        </div>
      );
    }
    return (
      <div>
        <div className={styles.header}>我的私信</div>
        <List className={styles.list}>
          {messages.map((item, i) => {
            return (
              <List.Item className={`${styles.item} ${item.readed ? styles.read : null}`} key={i}>
                <List.Item.Meta
                  className={styles.meta}
                  avatar={
                    item.sender.avatar_url ? (
                      <Avatar className={styles.avatar} src={item.sender.avatar_url} />
                    ) : null
                  }
                  title={
                    <div className={styles.username}>
                      {item.sender.nick_name}
                      <div className={styles.datetime}>{formatTime(item.inserted_at)}</div>
                    </div>
                  }
                  description={
                    <div className={styles.description} title={item.description}>
                      {item.content}
                    </div>
                  }
                />
              </List.Item>
            );
          })}
        </List>
        <div className={styles.footer} onClick={onClear}>
          <ButtonGroup>
            <Button onClick={this.props.loadClear}>全部已读</Button>
            <Button onClick={this.props.loadMore}>载入更多</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}
