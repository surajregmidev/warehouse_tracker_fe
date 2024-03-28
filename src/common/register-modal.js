import { Radio, Form, Button, Modal, Input } from "antd";
function RegisterModal({ handleOk, confirmLoading, handleCancel, open }) {
  const onFinish = () => {};
  const onFinishFailed = () => {};
  return (
    <Modal
      footer={null}
      title={<h2 style={{ color: "green" }}>Register for Premium Access</h2>}
      maskClosable={false}
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Form
        layout="vertical"
        name="basic"
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Please input your full name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="Email"
          rules={[
            {
              type: "email",
            },
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please input your phone number",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="isRealtor" label="Are you a Realtor?">
          <Radio.Group>
            <Radio value="yes"> Yes </Radio>
            <Radio value="no"> No </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="typeOfPurchase" label="Type of Purchase">
          <Radio.Group>
            <Radio value="investment"> Investment </Radio>
            <Radio value="toliveIn"> To Live In </Radio>
            <Radio value="undecided">Yet to Decide </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            success
            htmlType="submit"
            style={{ backgroundColor: "green", color: "white" }}
          >
            Register Now
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default RegisterModal;
