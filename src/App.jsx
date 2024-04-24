import { ConfigProvider, Layout } from "antd";
import "./App.css";
import RouteConfig from "./routes/routeConfig";

const { Header, Content } = Layout;

function App() {
  console.log("here");
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

