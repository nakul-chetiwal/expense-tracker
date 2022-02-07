import React, { useState } from 'react';
import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Cricket",
    amount: 45,
    date: new Date(2020, 9, 10),
  }
];
const App = (props) => {

  //DUMMY_EXPENSES
  //const [expenses,setExpenses]=useState(expenses);
  const [expenses, setExpenses]=useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
     //  console.log('In App.js');
      console.log(expense);
    setExpenses((preExpenses) => {
      console.log("from fn");
      console.log(preExpenses);
       return [expense, ...preExpenses];
    }); 
  };

  return (
    <div>
      <h2> let's get started</h2>
      <NewExpense onAddExpense ={addExpenseHandler}/>
      <Expenses expenses={expenses}> </Expenses>
    </div>
  );
}

export default App;
