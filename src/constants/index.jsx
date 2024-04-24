import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { formatDate } from "../utils/date";

export const columns = [
  {
    title: "SN",
    dataIndex: "sn",
    render: (_, _data, index) => <>{index + 1}</>,
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    sorter: true,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    sorter: true,
  },
  {
    title: "Priority",
    dataIndex: "priority",
    key: "priority",
    sorter: true,
  },
  {
    title: "Due Date",
    dataIndex: "dueDate",
    key: "dueDate",
    render: (param) => <>{formatDate(param)}</>,
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "",
    key: "",
    render: (_, record) => (
      <Space size="middle">
        <EditOutlined />
        <DeleteOutlined />
      </Space>
    ),
  },
];

export const data = [
  {
    title: "Task 1",
    description: "Description for Task 1",
    priority: "High",
    dueDate: "2024-04-23",
    time: "10:00 AM",
  },
  {
    title: "Task 2",
    description: "Description for Task 2",
    priority: "Medium",
    dueDate: "2024-04-25",
    time: "2:00 PM",
  },
  {
    title: "Task 3",
    description: "Description for Task 3",
    priority: "Low",
    dueDate: "2024-04-26",
    time: "5:00 PM",
  },
  {
    title: "Task 4",
    description: "Description for Task 4",
    priority: "High",
    dueDate: "2024-04-28",
    time: "9:00 AM",
  },
  {
    title: "Task 5",
    description: "Description for Task 5",
    priority: "Medium",
    dueDate: "2024-04-29",
    time: "11:00 AM",
  },
  {
    title: "Task 6",
    description: "Description for Task 6",
    priority: "Low",
    dueDate: "2024-04-30",
    time: "3:00 PM",
  },
  {
    title: "Task 7",
    description: "Description for Task 7",
    priority: "High",
    dueDate: "2024-05-01",
    time: "8:00 AM",
  },
  {
    title: "Task 8",
    description: "Description for Task 8",
    priority: "Medium",
    dueDate: "2024-05-03",
    time: "1:00 PM",
  },
  {
    title: "Task 9",
    description: "Description for Task 9",
    priority: "Low",
    dueDate: "2024-05-05",
    time: "4:00 PM",
  },
  {
    title: "Task 10",
    description: "Description for Task 10",
    priority: "High",
    dueDate: "2024-05-07",
    time: "7:00 AM",
  },
];
