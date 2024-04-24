import { Button, Flex, Table, Typography } from "antd";
import { columns, data } from "../../constants";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const { Title } = Typography;

const Dashboard = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  let taxInfo = JSON.parse(localStorage.getItem("taxInfo"));

  // useEffect(() => {
  //   if (taxInfo) setTableData(taxInfo);
  // }, [taxInfo]);

  return (
    <>
      <Flex align="center" justify="space-between">
        <Title>Task Management</Title>
        <Button
          type="primary"
          size="lg"
          icon={<PlusOutlined />}
          onClick={() => navigate("/create")}
        >
          Add Task
        </Button>
      </Flex>
      <Table columns={columns} dataSource={tableData} />
    </>
  );
};

export default Dashboard;

