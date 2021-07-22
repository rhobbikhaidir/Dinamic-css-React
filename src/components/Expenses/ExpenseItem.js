import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
export default function Expenseitem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Update!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Tittle</button>
      </div>
    </Card>
  );
}
