import React, { useState } from "react";
import { Modal, message } from "antd";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const MarkDeliver = ({ id, open, setOpen, fetAgain, setfetAgain }) => {
  const axiosPrivate = useAxiosPrivate();

  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = async () => {
    setConfirmLoading(true);
    await onDelete();
    setOpen(false);
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const onDelete = async (values) => {
    axiosPrivate
      .post(`/bill/${id}`)
      .then(async (response) => {
        setOpen(false);
        setfetAgain(fetAgain + 1);
        message.success("Order Marked as Deliverd Successfully");
      })
      .catch(() => {
        message.error("Error in Marking as Delivered");
      })
      .finally(() => {
        setOpen(false);
      });
  };
  return (
    <Modal
      title="Confirm"
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      Do you want to mark as delivered?
    </Modal>
  );
};
export default MarkDeliver;
