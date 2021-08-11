import React from "react";
import Expenseitem from "./ExpenseItem";
import "./ExpensesList.css";
export default function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expense.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <Expenseitem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
}
