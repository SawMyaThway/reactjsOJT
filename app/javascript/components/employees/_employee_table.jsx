import React from "react";
import { Table, Space, Popconfirm, Button } from "antd";
import I18n from "i18n-js";

const EmployeeTable = ({
  employee,
  deleteEmp,
  onEdit,
  getColumnSearchProps,
  excelExport,
}) => {
  const columns = [
    {
      title: I18n.t("employee.form.columns.name"),
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["descend", "ascend"],
      ...getColumnSearchProps("name", I18n.t("employee.form.columns.name")),
      render: (text) => <a>{text}</a>,
    },
    {
      title: I18n.t("employee.form.columns.age"),
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
      key: "age",
    },
    {
      title: I18n.t("employee.form.columns.email"),
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps("email", I18n.t("employee.form.columns.column2")),
    },
    {
      title: I18n.t("employee.form.columns.address"),
      dataIndex: "address",
      key: "address",
    },
    {
      title: I18n.t("employee.form.columns.birthday"),
      dataIndex: "birthday",
      key: "birthday",
      autoSize: false,
    },
    {
      title: I18n.t("employee.form.columns.role"),
      dataIndex: "role",
      key: "role_id",
    },
    {
      title: I18n.t("employee.form.columns.group"),
      dataIndex: "group",
      key: "group_id",
    },
    {
      title: I18n.t("employee.form.columns.action"),
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button
            onClick={() => onEdit(record)}
            style={{
              background: "#0050b3",
              borderColor: "#0050b3",
              color: "#ffffff",
            }}
          >
            {I18n.t("employee.filter.table.update")}
          </Button>
          <Popconfirm
            title="この従業員を削除してもよろしいですか?"
            onConfirm={() => deleteEmp(record.id)}
            okText="はい"
            cancelText="いいえ"
          >
            <Button
              style={{
                background: "#a8071a",
                borderColor: "#a8071a",
                color: "#ffffff",
              }}
            >
              {I18n.t("employee.filter.table.delete")}
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table
        style={{ whiteSpace: "pre" }}
        columns={columns}
        dataSource={employee}
        pagination={{ pageSize: 5 }}
      />
      <Button
        type="primary"
        onClick={excelExport}
        style={{ background: "#135200", borderColor: "#135200" }}
      >
        {I18n.t("common.button.excel")}
      </Button>
    </div>
  );
};

export default EmployeeTable;
