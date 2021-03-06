import React, { createElement } from 'react';
import classNames from 'classnames';
import { Button } from 'antd';
import styles from './exception.less';

const config = {
  403: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
    title: '403',
    desc: '抱歉，你无权访问该页面',
  },
  404: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
    title: '404',
    desc: '抱歉，你访问的页面不存在',
  },
  500: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
    title: '500',
    desc: '抱歉，服务器出错了',
  },
};

export default ({ className, linkElement = 'a', type, title, desc }) => {
  const pageType = type in config ? type : '404';
  const clsString = classNames(styles.exception, className);
  return (
    <div className={clsString} style={{ minHeight: 500, height: '80%' }}>
      <div className={styles.imgBlock}>
        <div
          className={styles.imgEle}
          style={{ backgroundImage: `url(${config[pageType].img})` }}
        />
      </div>
      <div className={styles.content}>
        <h1>{title || config[pageType].title}</h1>
        <div className={styles.desc}>{desc || config[pageType].desc}</div>
        <div className={styles.actions}>
          {createElement(
            linkElement,
            {
              to: '/',
              href: '/',
            },
            <Button type="primary">返回首页</Button>
          )}
        </div>
      </div>
    </div>
  );
};
