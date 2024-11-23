import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

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
