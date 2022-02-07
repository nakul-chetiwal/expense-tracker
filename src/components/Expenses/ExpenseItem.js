import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const [title, setTitle]=useState(props.title);

  const ClickHandler = () => {
     // this just not update the value but also call component in which it is called
     setTitle('Updeted!!!');
     console.log('Clicked!!!!!');
   
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div classname="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div classname="expense-item__price">${props.amount}</div>
      <button onClick={ClickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

// function ExpenseItem() {
//     const expenseDate=new Date(2021,2,28);
//     const expenseTitle='Car Insurence';
//     const expenseAmount=294.67;
//   return (
//     <div className='expense-item'>
//       <div>{expenseDate.date.i}</div>
//       <div classname='expense-item__description'>
//         <h2>{expenseTitle}</h2>
//         <div classname='expense-item__price'>${expenseAmount}</div>
//       </div>
//     </div>
//   );
// }

// return (
//     <div className='expense-item'>
//       <div>{props.date.toISOString()}</div>
//       <div classname='expense-item__description'>
//         <h2>{props.title}</h2>
//         <div classname='expense-item__price'>${props.amount}</div>
//       </div>
//     </div>
//   );
