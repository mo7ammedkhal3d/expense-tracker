import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpenseFilter from './Expensefilter';
import "./Expenses.css";

const Expenses = (props) =>{
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterchangeHandler = selectedYear =>{
        setFilteredYear(selectedYear)
    };

return (
    <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onchange={filterchangeHandler}/>
        <ExpenseItem title={props.items[0].title} date={props.items[0].date} amount={props.items[0].amount} />
        <ExpenseItem title={props.items[1].title} date={props.items[1].date} amount={props.items[1].amount} />
        <ExpenseItem title={props.items[2].title} date={props.items[2].date} amount={props.items[2].amount} />
        <ExpenseItem title={props.items[3].title} date={props.items[3].date} amount={props.items[3].amount} />
    </Card>
);
}

export default Expenses;
