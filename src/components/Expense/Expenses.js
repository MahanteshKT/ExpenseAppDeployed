import React, { useState } from 'react'
import Card from '../UI/Card'
// import ExpenseItem from './ExpenseItem/ExpenseItem'
import ExpenseFilter from './ExpenseFilter/ExpenseFilter'
import "./Expense.css"
import ExpenseList from './ExpenseList/ExpenseList'
import ExpenseChart from './ExpenseChart'
function Expenses(props) {
      const [filteredYear,setFilteredYear]=useState("2020");
      const onChangeFilter=(selected)=>{
            setFilteredYear(selected);
      }
      const FilteredValues=props.items.filter((item)=>{
            return item.date.getFullYear()===parseInt(filteredYear);
      })


      
  return (
        <Card className="expenses">
            <ExpenseFilter 
                  selected={filteredYear} 
                  onChangeFilter={onChangeFilter}
            />
            <ExpenseChart expenses={FilteredValues}/>
            <ExpenseList items={FilteredValues} />

            
        </Card>
  )
}

export default Expenses
