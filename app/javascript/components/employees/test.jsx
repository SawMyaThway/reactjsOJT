// モーダルフォームの管理

const [isModalVisible, setIsModalVisible] = useState(false);

// popupフィールドのテーブルにデータを設定するため新しいvariableを指定する。

const [tableData, setColumnData] = useState(null);

// popupフィールドのデータを検索するため設定する入力フィールド

const searchField = (
  <Form.Item label={I18n.t("item.company")}>
    <Input
      key="1"
      name="searchData"
      onChange={(e) => handleSearch(e.target.value ? [e.target.value] : [])}
    ></Input>
  </Form.Item>
);

// companyデータをRadioボタンで管理する。

const handleSelect = (selectData) => {
  // モーダルフォームを表示する機能をする。

  setIsModalVisible(true);

  // この機能を作業するとpopupフィールドのテーブルにデータを設定する。

  setColumnData(company);
};

// popupフィールドのデータを検索した後結果を保つするためこのarrayを作りました。

const companies = [];

// popupフィールドの設定するデータを検索する。

const handleSearch = (searchData) => {
  for (var i = 0; i < company.length; i++) {
    if (
      company[i].company_name

        ?.toLowerCase()

        .includes(searchData.toString()?.toLowerCase())
    ) {
      companies.push(company[i]);
    }
  }

  // popupフィールドのデータを検索した結果をpopupフィールドのテーブルに表示する。

  setColumnData(companies);
};

// popupフィールドの設定するデータテーブルをつくる。

const columns = [
  {
    title: "アクション",

    key: "action",

    render: (_text, record) => (
      <Fragment>
        <Radio
          key={record.company_id}
          value={record.company_id}
          onChange={() => onChange(record)}
        ></Radio>
      </Fragment>
    ),
  },

  {
    title: I18n.t("item.company"),

    dataIndex: "company_name",

    key: "company_id",
  },
];
