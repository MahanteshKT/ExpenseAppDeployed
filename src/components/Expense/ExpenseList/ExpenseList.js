import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import "./ExpenseList.css"
const ExpenseList=(props)=>{
    // let expenseContext=<p>No Expense Found</p>

    if(props.items.length===0){
        return (<ul className='expenselist msg__fallback'><h1>No Expense Found</h1></ul>)
    }
    
    return(
        <ul className='expenselist'>
           { props.items.map((item,index)=>
                  
                  <ExpenseItem
                        key={index}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                  
                  />
                  )
           }
        </ul>
    )
}


export default ExpenseList;