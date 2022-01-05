import React, { useState } from "react";
import I18n, { placeholder } from "i18n-js";
import moment from "moment";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Select,
  DatePicker,
  Modal,
  Radio,
  Table,
  Upload,
  message,
} from "antd";
import { string } from "prop-types";
import { UploadOutlined } from "@ant-design/icons";

const { Search } = Input;

const EmployeeForm = ({
  onFinish,
  role,
  formRef,
  validateMessages,
  group,
  hanldeClear,
  onFileUpload,
}) => {
  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 13 },
  };

  // let formErrors = {};
  // cname = (name) => {
  //   //console.log(name);
  //   formErrors = {};
  //   if (!/^[a-zA-Z]+$/.test(name)) {
  //     formErrors = "Name is invalid.";
  //     //console.log("false");
  //   }
  //   console.log(formErrors);
  // };
  //console.log(formErrors);

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  // 表示するテーブル列を設定する;
  const columns = [
    {
      dataIndex: "group_name",
      key: "id",
      render: (dataIndex, record) => (
        <a onClick={() => onClick(record.id, record.group_name)}>{dataIndex}</a>
      ),
    },
  ];

  const normFile = (e) => {
    console.log("Upload event:", e);
    // console.log("Name : " + e.target.name);
    // console.log(e.file);
    return e && e.file;
  };

  const onClick = (value, gname) => {
    formRef.current?.setFieldsValue({
      group_id: value,
      group_name: gname,
    });
    // ModalBoxを閉める
    setIsModalVisible(false);
  };

  // ModalBoxを呼ぶ
  const showModal = (svalue) => {
    setSearchTerm(svalue);
    // ModalBoxを表示する
    setIsModalVisible(true);
  };

  // Cancelボタンを押すとModalBoxを閉める
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // 将来の日を選択できないように
  const disabledDate = (current) => {
    return current > moment().endOf("day");
  };
  // const { studNameErr } = formErrors;
  return (
    <div>
      <Form
        style={{ width: "60%", marginLeft: "200px" }}
        autoComplete="off"
        onFinish={onFinish}
        ref={formRef}
        {...layout}
        name="nest-messages"
        validateMessages={validateMessages}
      >
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 9 }}>
          <label>
            <span
              style={{
                color: "#0050b3",
                fontSize: "30px",
                fontStyle: "italic",
              }}
            >
              社員情報
            </span>
          </label>
        </Form.Item>

        <Form.Item
          name="name"
          label={I18n.t("employee.form.columns.name")}
          rules={[
            { type: "string", required: true },
            { whitespace: true },
            { max: 10, message: I18n.t("message.M002") },
          ]}
        >
          <Input
            allowClear
            // onChange={(event) => {
            //   cname(event.target.value);
            // }}
          />
          {/* <div style={{ color: "red" }}>{formErrors}</div> */}
        </Form.Item>
        <Form.Item
          name="email"
          label={I18n.t("employee.form.columns.email")}
          rules={[{ type: "email", required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label={I18n.t("employee.form.columns.age")}
          rules={[{ type: "number", min: 0, max: 99, required: true }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="address"
          label={I18n.t("employee.form.columns.address")}
          rules={[{ required: true }, { whitespace: true }, { max: 100 }]}
        >
          <Input.TextArea
            style={{ resize: "none" }}
            showCount
            maxLength={100}
          />
        </Form.Item>
        <Form.Item
          name="birthday"
          label={I18n.t("employee.form.columns.birthday")}
          rules={[{ required: true }]}
        >
          <DatePicker
            disabledDate={disabledDate}
            placeholder="日付を選択してください"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          name="role_id"
          label={I18n.t("employee.form.columns.role")}
          rules={[{ required: true }]}
        >
          <Select placeholder="選択してください">
            {role.map((value) => (
              <Select.Option value={value.key}>{value.role_name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="group_name"
          label={I18n.t("employee.form.columns.group")}
          rules={[{ required: true }]}
        >
          <Search
            placeholder="グループを選択してください"
            onSearch={showModal.bind(this)}
            enterButton
          />
        </Form.Item>
        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="file"
          getValueFromEvent={normFile}
        >
          <Upload name="logo" listType="picture">
            <Button>Click to upload</Button>
          </Upload>
        </Form.Item>

        {/* <Upload>
          <Button icon={<UploadOutlined />}>Upload Directory</Button>
        </Upload> */}

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button
            htmlType="submit"
            style={{
              background: "#0050b3",
              borderColor: "#0050b3",
              color: "#ffffff",
            }}
          >
            {I18n.t("common.button.save")}
          </Button>
          <Button
            style={{
              marginLeft: "10px",
              background: "#8c8c8c",
              borderColor: "#8c8c8c",
              color: "#ffffff",
            }}
            onClick={hanldeClear}
          >
            {I18n.t("common.button.clear")}
          </Button>
        </Form.Item>

        <Form.Item name="id" style={{ display: "none" }}>
          <Input />
        </Form.Item>
        <Form.Item name="group_id" style={{ display: "none" }}>
          <Input />
        </Form.Item>
      </Form>
      {/* グループのポップアップフォーム */}
      <Modal
        title="グループ"
        visible={isModalVisible}
        //onOk={handleOk}
        onCancel={handleCancel}
        // モーダルフォームのフッターにオーケーボタンを設定する。
        footer={[
          <Button
            style={{
              background: "#8c8c8c",
              borderColor: "#8c8c8c",
              color: "#ffffff",
            }}
            onClick={handleCancel}
          >
            {I18n.t("common.button.cancle")}
          </Button>,
        ]}
      >
        <Input
          placeholder="検索...."
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <Table
          columns={columns}
          dataSource={group.filter((value) => {
            if (searchTerm == "") {
              return value;
            } else if (
              value.group_name
                ?.toLowerCase()
                .includes(searchTerm?.toLowerCase())
            ) {
              return value;
            }
          })}
          pagination={{ pageSize: 4 }}
        />
      </Modal>
    </div>
  );
};

export default EmployeeForm;
