// import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import React,{ useState } from 'react';
import ExpenseList from './ExpensesList';
const Expenses=(props)=>{
  const [filteredYear,setFilteredYear]=useState('2020');
  const filterChangeHandler = selectedExpenseYear => {
    
    setFilteredYear(selectedExpenseYear);
  };
  // console.log(expenseData); 
  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

  


    
        
      return (
        
          <div>
        
          <Card className ="expenses">
          <ExpenseFilter 
          selected={filteredYear} 
          onChangeFliter ={ filterChangeHandler}/>
          <ExpenseList items ={filteredExpenses}/>
          
           
        </Card>
        </div>
      );

}

export default Expenses;