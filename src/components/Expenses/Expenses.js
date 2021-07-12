import React from "react";
import "./Expenses.css";
import Expenseitem from "./ExpenseItem";
import Card from "../UI/Card";

export default function Expenses(props) {
  return (
    <Card className="expenses">
      <Expenseitem
        title={props.item[0].title}
        date={props.item[0].date}
        amount={props.item[0].amount}
      />
      <Expenseitem
        title={props.item[1].title}
        date={props.item[1].date}
        amount={props.item[1].amount}
      />
      <Expenseitem
        title={props.item[2].title}
        date={props.item[2].date}
        amount={props.item[2].amount}
      />
      <Expenseitem
        title={props.item[3].title}
        date={props.item[3].date}
        amount={props.item[3].amount}
      />
    </Card>
  );
}
