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
      <Header />
      <Row>
        <Col span={12}>
          <Balance />
          <IncomeExpenses />
        </Col>
        <Col span={12}>
          <TransactionList />
          <AddTransaction />
        </Col>
      </Row>
    </GlobalProvider>
  );
}

export default App;
