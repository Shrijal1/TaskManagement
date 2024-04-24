import {
  Button,
  Card,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  Row,
  Select,
  TimePicker,
  Typography,
} from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const TaskForm = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    let taxInfo = JSON.parse(localStorage.getItem("taxInfo"));
    if (!taxInfo) {
      taxInfo = [];
    }
    taxInfo.push(values);
    localStorage.setItem("taxInfo", JSON.stringify(taxInfo));
    navigate("/");
  };

  return (
    <>
      <Title level={2} style={{ marginBottom: "20px" }}>
        Task Management
      </Title>

      <Form
        name="basic"
        initialValues={{}}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Card>
          <Row gutter={[24, 0]}>
            <Col lg={12}>
              <Form.Item
                label="Title"
                name="title"
                rules={[
                  { required: true, message: "Title Field is required!" },
                ]}
              >
                <Input placeholder="Enter Title" />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item
                label="Priority"
                name="priority"
                rules={[
                  { required: true, message: "Priority Field is required!" },
                ]}
              >
                <Select placeholder="Select Priority">
                  <Option value="High">High</Option>
                  <Option value="Medium">Medium</Option>
                  <Option value="Low">Low</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item
                label="Due Date"
                name="dueDate"
                rules={[
                  { required: true, message: "Due Date Field is required!" },
                ]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item
                label="Task Time"
                name="time"
                rules={[{ required: true, message: "Time Field is required!" }]}
              >
                <TimePicker format="h:mm" />
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item label="Description" name="description">
                <TextArea />
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <Flex gap={8} align="end" justify="end" style={{ marginTop: "20px" }}>
          <Button onClick={() => navigate("/")}>Discard</Button>
          <Button htmlType="submit" type="primary">
            Save
          </Button>
        </Flex>
      </Form>
    </>
  );
};

export default TaskForm;
