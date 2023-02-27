import React from "react";
import "./App.css";
import { Row } from "antd";

import OptionCard from "./components/Card";
import MainLayout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Row gutter={[12, 12]} justify="center" align="middle">
          {Array.from({ length: 4 }).map((_, i) => (
            <OptionCard key={i} />
          ))}
        </Row>
      </MainLayout>
    </div>
  );
}

export default App;
