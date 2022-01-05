import React from "react";
import { Breadcrumb, Layout, message } from "antd";
import axios from "axios";
import I18n from "i18n-js";
import "../../bundles/i18n/ja.js";
import SideBar from "../home/_sideBar";
import EmployeeForm from "./_employee_form.jsx";
import EmployeeTable from "./_employee_table.jsx";
import { Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import validator from "validator";
import moment from "moment";
import * as wjcXlsx from "@grapecity/wijmo.xlsx";

const { Content } = Layout;

class Employee extends React.Component {
  // フォームのフィールドを空白にしたり、設定したりするため
  formRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      employee: [],
      findEmp: [],
      group: [],
      role: [],
      sms: [],
      // formErrors: [],
    };

    // On file upload (click the upload button)

    // Excel出力するため
    this.save = this.save.bind(this);

    // Excel出力するため
    this.exportReport = this.exportReport.bind(this);
  }

  // フォームフィールドのチェックする
  validateMessages = {
    required: "${label}を入力してください!",
    whitespace: "${label}は空になっている",
    types: {
      email: "${label}のフォーマットが間違っている!",
      number: "${label}のフォーマットが間違っている!",
    },
    number: {
      range: "${label}は${min}から${max}の間で入力してください！",
    },
  };

  isvalidname = (name) => {
    if (!/^[a-zA-Zア-ン]+$/.test(name)) {
      return false;
    }
    return true;
  };

  // Initialize =>　dbから社員データを取得　=>　社員データを設定する
  //        =>　dbからグループデータを取得 =>　グループデータを設定する
  //        =>　dbからロールデータを取得 =>　ロールデータを設定する
  componentDidMount() {
    this.setState({
      employee: [],
      group: [],
      role: [],
    });
    axios
      .get("api/v1/employee.json")
      .then((response) => {
        response.data.role.forEach((k) => {
          const newG1 = {
            key: k.id,
            id: k.id,
            role_name: k.role_name,
          };
          // ロールデータをrole stateに設定する
          this.setState((prevState) => ({
            role: [...prevState.role, newG1],
          }));
        });

        response.data.group.forEach((j) => {
          const newG1 = {
            key: j.id,
            id: j.id,
            group_name: j.group_name,
          };
          // グループデータをgroup stateに設定する
          this.setState((prevState) => ({
            group: [...prevState.group, newG1],
          }));
        });

        response.data.employees.forEach((i) => {
          const newE1 = {
            key: i.id,
            id: i.id,
            name: i.name,
            email: i.email,
            age: i.age,
            role: i.role_name,
            group: i.group_name,
            birthday: i.birthday,
            address: i.address,
            role_id: i.role_id,
            group_id: i.group_id,
            role_name: i.role_name,
            group_name: i.group_name,
          };
          // 社員データをemployee stateに設定する
          this.setState((prevState) => ({
            employee: [...prevState.employee, newE1],
          }));
        });
      })

      .catch((err) => message.error("Error: " + err));
  }

  // 作成と更新のため　=>　ルートに移動
  onFinish = (values) => {
    // rubyから取得したメッセージを表示するためにsms stateを呼ぶ
    // console.log(values.upload.name);
    values.filename = values.upload.name;
    console.log(values.filename);

    this.setState({
      sms: [],
      formErrors: [],
    });

    if (this.isvalidname(values.name)) {
      if (
        this.state.employee.find(
          (e) => e.name === values.name && e.email === values.email
        )
      ) {
        message.error("Dup!");
      } else {
        // 入力したname と　addressにスペースを消す
        values.name = validator.trim(values.name);
        values.address = validator.trim(values.address);

        // values.idがないと作成機能をする
        if (values.id === undefined) {
          axios.post("/api/v1/employee/create", { values }).then((response) => {
            this.setState(() => ({
              // rubyから取得したメッセージを表示する
              sms: response.data.successSMS,
            }));
            message.success(this.state.sms);

            // データを入力した後、フォームのフィールドを空白になるため
            this.formRef.current?.resetFields();

            // 入力したデータを、表示するため
            this.componentDidMount();
          });
        } else {
          // 更新機能をする時、日付が1日が必要なので、もう1日追加する。
          values.birthday = moment(values.birthday).add(1, "days");

          // values.idがあると更新機能をする
          axios
            .post(`api/v1/employee/update/${values.id}`, { values })
            .then((response) => {
              if (response.data.errors) {
                message.warning(response.data.errors);
              } else {
                // 更新した後、メッセージを表示する
                message.success(I18n.t("employee.message.update_message"));

                // データを入力した後、フォームのフィールドを空白になるため
                this.formRef.current?.resetFields();

                this.setState({
                  employee: this.state.employee.filter(
                    (employee) => employee.key !== values.id
                  ),
                });
                const NE1 = {
                  key: response.data.employee.id,
                  id: response.data.employee.id,
                  name: response.data.employee.name,
                  email: response.data.employee.email,
                  age: response.data.employee.age,
                  role: response.data.role.role_name,
                  group: response.data.group.group_name,
                  birthday: response.data.employee.birthday,
                  address: response.data.employee.address,
                  role_id: response.data.employee.role_id,
                  group_id: response.data.employee.group_id,
                  role_name: response.data.role.role_name,
                  group_name: response.data.group.group_name,
                };

                this.setState((prevState) => ({
                  employee: [...prevState.employee, NE1],
                }));
              }
            });
        }
      }
    } else {
      message.error("Name invalid!");
    }
  };

  hanldeClear = (values) => {
    this.formRef.current?.resetFields();
  };

  // 従業員削除　=>　ルートに移動
  deleteEmp = (id) => {
    axios.delete(`api/v1/employee/${id}`).then((data) => {
      if (data.data.errors) {
        message.warning(data.data.errors);
      } else {
        message.success(I18n.t("employee.message.delete_message"));

        // 削除したデータをemployee stateから消す
        this.setState({
          employee: this.state.employee.filter(
            (employee) => employee.key !== id
          ),
        });
        this.formRef.current?.resetFields();
      }
    });
  };

  // テーブル内の従業員の更新=>レコードデータを取得
  onEdit = (record) => {
    // formRefを呼んでフォームのフィールドにデータを設定する
    this.formRef.current?.setFieldsValue({
      id: record.id,
      name: record.name,
      email: record.email,
      age: record.age,
      address: record.address,
      role_id: record.role_id,
      birthday: moment(record.birthday),
      group_id: record.group_id,
      group_name: record.group,
    });
  };

  // フィルター
  getColumnSearchProps = (dataIndex, indexname) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`検索 ${indexname}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            {I18n.t("employee.filter.table.search")}
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            {I18n.t("employee.filter.table.reset")}
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            {I18n.t("employee.filter.table.filter")}
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  // フィルター検索
  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  // フィルターリセット
  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  // Excel出力するため
  save() {
    const workbook = this.exportReport(this.state.employee);

    // Excel出力した後、ファイル名を設定する
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate() +
        "-" +
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds();

    // EmployeeDataReportという名前でExcel出力する
    workbook.saveAsync("EmployeeDataReport" + date + ".xlsx");
  }

  // Employeeデータを取得する
  exportReport(employee) {
    var book = new wjcXlsx.Workbook();

    var stdNumWidth = 85,
      tableHeaderStyle = new wjcXlsx.WorkbookStyle(),
      tableValueStyle = new wjcXlsx.WorkbookStyle(),
      tableDateStyle = new wjcXlsx.WorkbookStyle();

    tableHeaderStyle.font = new wjcXlsx.WorkbookFont();
    tableHeaderStyle.font.bold = true;
    tableHeaderStyle.fill = new wjcXlsx.WorkbookFill();
    tableHeaderStyle.fill.color = "#fad9cd";
    tableValueStyle.fill = new wjcXlsx.WorkbookFill();
    tableValueStyle.fill.color = "#f4b19b";

    var sheet = new wjcXlsx.WorkSheet(),
      rows = sheet.rows;

    book.sheets.push(sheet);
    sheet.name = "社員情報";

    sheet.columns[0] = new wjcXlsx.WorkbookColumn();
    sheet.columns[0].width = "1ch";
    sheet.columns[1] = new wjcXlsx.WorkbookColumn();
    sheet.columns[1].width = 100;
    sheet.columns[2] = new wjcXlsx.WorkbookColumn();
    sheet.columns[2].width = stdNumWidth;
    sheet.columns[3] = new wjcXlsx.WorkbookColumn();
    sheet.columns[3].width = 200;
    sheet.columns[4] = new wjcXlsx.WorkbookColumn();
    sheet.columns[4].width = stdNumWidth;
    sheet.columns[6] = new wjcXlsx.WorkbookColumn();
    sheet.columns[6].width = 120;
    sheet.columns[6] = new wjcXlsx.WorkbookColumn();
    sheet.columns[6].width = stdNumWidth;
    sheet.columns[7] = new wjcXlsx.WorkbookColumn();
    sheet.columns[7].width = stdNumWidth;
    sheet.columns[8] = new wjcXlsx.WorkbookColumn();
    sheet.columns[8].width = 130;

    //============= Excel ヘッダ - Employee データ =========================
    rows[0] = new wjcXlsx.WorkbookRow();
    rows[0].cells[1] = new wjcXlsx.WorkbookCell();
    rows[0].cells[1].colSpan = 2;
    rows[0].cells[1].value = "社員情報";
    rows[0].cells[1].style = new wjcXlsx.WorkbookStyle();

    rows[0].cells[1].style.font = new wjcXlsx.WorkbookFont();
    rows[0].cells[1].style.font.size = 30;

    rows[2] = new wjcXlsx.WorkbookRow();
    rows[2].style = new wjcXlsx.WorkbookStyle();
    rows[2].style.hAlign = wjcXlsx.HAlign.Center;
    rows[2].cells[1] = new wjcXlsx.WorkbookCell();
    rows[2].cells[1].value = "名前";

    rows[2].cells[2] = new wjcXlsx.WorkbookCell();
    rows[2].cells[2].value = "年齢";

    rows[2].cells[3] = new wjcXlsx.WorkbookCell();
    rows[2].cells[3].value = "メール";

    rows[2].cells[4] = new wjcXlsx.WorkbookCell();
    rows[2].cells[4].value = "住所";

    rows[2].cells[5] = new wjcXlsx.WorkbookCell();
    rows[2].cells[5].value = "誕生日";

    rows[2].cells[6] = new wjcXlsx.WorkbookCell();
    rows[2].cells[6].value = "ロール";

    rows[2].cells[7] = new wjcXlsx.WorkbookCell();
    rows[2].cells[7].value = "グループ";

    // Employee データ
    var firstIdx = 3;

    for (var i = 0; i < employee.length; i++) {
      var curEmployee = employee[i],
        rowIdx = firstIdx + i;
      rows[rowIdx] = new wjcXlsx.WorkbookRow();
      rows[rowIdx].cells[1] = new wjcXlsx.WorkbookCell();
      rows[rowIdx].cells[1].value = curEmployee.name;

      rows[rowIdx].cells[2] = new wjcXlsx.WorkbookCell();
      rows[rowIdx].cells[2].value = curEmployee.age;

      rows[rowIdx].cells[3] = new wjcXlsx.WorkbookCell();
      rows[rowIdx].cells[3].value = curEmployee.email;

      rows[rowIdx].cells[4] = new wjcXlsx.WorkbookCell();
      rows[rowIdx].cells[4].value = curEmployee.address;

      rows[rowIdx].cells[5] = new wjcXlsx.WorkbookCell();
      rows[rowIdx].cells[5].value = curEmployee.birthday;

      rows[rowIdx].cells[6] = new wjcXlsx.WorkbookCell();
      rows[rowIdx].cells[6].value = curEmployee.role_name;

      rows[rowIdx].cells[7] = new wjcXlsx.WorkbookCell();
      rows[rowIdx].cells[7].value = curEmployee.group_name;
    }

    return book;
  }
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar />
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>{I18n.t("home.home")}</Breadcrumb.Item>
              <Breadcrumb.Item>{I18n.t("home.menu1.side2")}</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {/*  _employee_formを呼ぶ */}
              <EmployeeForm
                // _作成・更新機能をするため
                onFinish={this.onFinish}
                // フォームのフィールドを空白にしたり、設定したりするため
                formRef={this.formRef}
                // _employee_formのselect boxにグループデータを設定するため
                group={this.state.group}
                // _employee_formのselect boxにロールデータを設定するため
                role={this.state.role}
                // 入力したデータをチェックするため
                validateMessages={this.validateMessages}
                hanldeClear={this.hanldeClear}
                // cname={this.cname}
                // formErrors={this.state.formErrors}
                onFileUpload={this.onFileUpload}
              />

              {/*  _employee_tableを呼ぶ */}
              <EmployeeTable
                // _employee_tableに社員情報を表示するため
                employee={this.state.employee}
                // _employee_tableの社員データを削除するため
                deleteEmp={this.deleteEmp}
                // _employee_tableの社員データを更新するため
                onEdit={this.onEdit}
                // フィルター => 検索
                getColumnSearchProps={this.getColumnSearchProps}
                // Excel fileを出力するため
                excelExport={this.save}
              />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Employee;
