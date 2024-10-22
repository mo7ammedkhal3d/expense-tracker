import React,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseFrom = (props)=>{
    
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    // alternative use by using one useState 
    
    // const [userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // });

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value,
        // });

        // And this the correct way then the above one to 
        // save the pervState of other values
        // and this is commenly used in more modren projects 
        // where here take acobe of prevState of all values and make 
        // overwrite of them by this way we save the pervState of other values
        // that never change in this event

        // setUserInput((pervState)=>{
        //     return {...pervState,enteredTitle:event.target.value}
        // });

    };

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // });
    };

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // });
    };

    //This the alternative way to use
    // one function as shared handler function
    // with identifaire nested of use there or more function 

    // const inputChangeHandler = (identifier,value)=>{
    //     if(identifier === 'title'){
    //         setEnteredTitle(value);
    //     } else if( identifier === 'date'){
    //         setEnteredAmount(value);
    //     } else {
    //         setEnteredDate(value);
    //     }
    // }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate), 
        }

        props.onSaveExpenseDate(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

return (
<form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            {/* <input type="text" onChange={(event)=>inputChangeHandler('title',event.target.value)}/> */}
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min='2019-01-01' max='2024-10-20' value={enteredDate} onChange={dateChangeHandler}/>
        </div>
    </div>
    <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
    </div>
</form>
);
}

export default ExpenseFrom;
