import { ConfigProvider, Layout } from "antd";
import "./App.css";
import RouteConfig from "./routes/routeConfig";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sessionTimeOut } from "./utils";

const { Header, Content } = Layout;

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    sessionTimeOut(navigate);
  }, [navigate]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
      </Header>
      <Content style={{ padding: "48px" }}>
        <ConfigProvider
          theme={{
            token: {},
          }}
        >
          <RouteConfig />
        </ConfigProvider>
      </Content>
    </Layout>
  );
}

export default App;
