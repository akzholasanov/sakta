import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

interface UserAvatarProps {
  size: number;
}

export const UserAvatar = ({ size }: UserAvatarProps) => {
  return (
    <Space size={size} wrap>
      <Avatar icon={<UserOutlined />} />
    </Space>
  );
};
