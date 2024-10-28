import React,{useState} from "react";
import './NewExpense.css';
import ExpenseFrom from "./ExpenseForm";

const NewExpence = (props) =>{

    const [isEditing,setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString(),
        }
        props.onAddExpense(expenseData);
    };

    const startEditingHandler = ()=>{
        setIsEditing(true);
    }

    const stopEditingHandler = () =>{
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && (<button onClick={startEditingHandler}>Add new Expense</button>)}
            {isEditing && (<ExpenseFrom onSaveExpenseDate = {saveExpenseDataHandler} onCancel={stopEditingHandler}/>)}
        </div>
    );
}

export default NewExpence;