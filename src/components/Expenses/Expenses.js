import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import "./Expenses.css";

const Expenses = (props) =>{
    const [filteredYear, setFilteredYear] = useState('2020');

    //#region  Dealing with drived state 
        // here we define another state that depend on other state this call 
        // computed state which that state depend on other state for it's value so 
        // The problem here when deal with multi state for one is more cunsompotion if we have multi components
        // So... since the compont is will re-executed agin any way the we defie a variable that changed according 
        // some condition for it's value , so we replace this twise use state with variable 
        // this paragraph is putted after Expensefilter component below for test this expamle 
        // <p>Data for {filterInfoText} is hidden</p>
        //#region  solution -1
        // const [filterInfoText,setFilterInfoText] = useState('2019 , 2021 & 2022');

        // const filterChangeHandler = selectedYear =>{
        //     setFilteredYear(selectedYear);
        // if(selectedYear === '2019'){
        //     setFilterInfoText('2020 , 2021 & 2022');
        // } else if(selectedYear ==='2021'){
        //     setFilterInfoText('2019, 2020 & 2022');
        // } else if (selectedYear === '2020'){
        //     setFilterInfoText('2019 , 2021 & 2022');
        // } else {
        //     setFilterInfoText('2019,2020 & 2021')
        // }
       // };
       //#endregion
        //#region  solution -2

            // let filterInfoText = '2019, 2021 & 2022';

            // if(filteredYear === '2019'){
            //     filterInfoText= '2020, 2021 & 2022';
            // } else if(filteredYear ==='2021'){
            //     filterInfoText= '2019, 2020 & 2022';
            // } else {
            //     filterInfoText='2019, 2020 & 2021';
            // }
            // const filterChangeHandler = selectedYear =>{
            //     setFilteredYear(selectedYear);
            // };
        //#endregion

    //#endregion

    //#region Types of components in react
        //state less or dump or presntational conponent
        // is that component which use for presnt some data or have some js code or
        // or some css code 
        // another type of components is statefull or control components 
        // is have state and also manage aother compoent by sending some data 
    //#endregion 

    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    };

return (
    <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
    </Card>
);
}

export default Expenses;
