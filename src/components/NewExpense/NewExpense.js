import React from "react";
import './NewExpense.css';
import ExpenseFrom from "./ExpenseForm";

const NewExpence = (props) =>{

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString(),
        }
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseFrom onSaveExpenseDate = {saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpence;