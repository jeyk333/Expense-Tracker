import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Header } from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

import { Row, Col } from "antd";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Row gutter={16}>
          <Col className="gutter-row" span={12}>
            <Balance />
            <IncomeExpenses />
          </Col>
          <Col className="gutter-row" span={12}>
            <TransactionList />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={8}></Col>
          <Col className="gutter-row" span={8}>
            <AddTransaction />
          </Col>
          <Col className="gutter-row" span={8}></Col>
        </Row>
      </div>
    </GlobalProvider>
  );
}

export default App;
