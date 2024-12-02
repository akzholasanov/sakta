import { Modal } from "antd";

interface MobileModalProps {
    open: boolean;
    title: string;
    content: string;
    handleOk: () => void;
    handleCancel: () => void;
}
export const SearchModal = ({ open, handleOk, handleCancel }: MobileModalProps) => {
  return (
    <Modal
      title="Basic Modal"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
    </Modal>
  );
};
