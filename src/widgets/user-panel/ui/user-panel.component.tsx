import React from 'react';
import { Popover, Avatar } from 'antd';
import styles from './user-panel.module.scss';

export const UserPanel = () => {
  const content = (
    <div className={styles.popover_content}>
      <div className={styles.user_panel}>
        <div className={styles.user_panel_info}>
          <div className={styles.user_avatar}>
            <Avatar size={64}>A</Avatar>
            <p>Akzhol</p>
          </div>
          <ul className={styles.user_panel_links}>
            <li>My Board</li>
            <li>Favorites</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
      <div className={styles.user_panel_settings}>
        <span>Theme</span>
      </div>
      <div className={styles.information}>
        <span>Copyrights</span>
        <span>Terms</span>
      </div>
    </div>
  );

  return (
    <Popover
      trigger='click'
      content={content}
      placement='bottomRight'
      rootClassName={styles.custom_popover}
      >
      <button className={styles.user_panel_btn}>
        <span>Akzhol</span>
        <Avatar size={40}>A</Avatar>
      </button>
    </Popover>
  );
};
