import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Result from "./pages/Result";
import Config from "./pages/Config";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Config />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Layout>
  );
};

export default App;
