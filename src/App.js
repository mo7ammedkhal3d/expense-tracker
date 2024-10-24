import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpence from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)

  const addExpense = expense =>{
    // setExpenses([expense,...DUMMY_EXPENSES]) is we learn the add expense depend on the prvius snapshot 
    // By expersion like this not be wrok correctly because when every time add one will depend in inital DUMMY_EXPENSES 
    // Not the snapshot that have one which we add in step befor so will be use function to pass in it perExpenses snapshot
    // use setExpense with parameter prevExpense which is provide by react that gives us the last snapshot of Expense we add
    setExpenses(prevExpenses =>{
      return [expense,...prevExpenses];
      })   
  }

  return (
    <div className="App">
      <NewExpence onAddExpense ={addExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
