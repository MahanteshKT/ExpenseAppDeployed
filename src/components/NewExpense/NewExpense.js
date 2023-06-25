import React, { useState } from 'react'
import "./NewExpense.css";
import NewExpenseForm from './NewExpenseForm';
function NewExpense(props) {
  const [displayForm,setDisplayForm]=useState(false);
  const getNewExpenseData=(data)=>{
        console.log("from NewExpense",data);
        props.sendDataToApp(data);
  }
  const startEditingHandler=()=>{
    setDisplayForm(true);
  }
  const stopEditingHandler=()=>{
      setDisplayForm(false);
  } 
  return (
    <div className='new-expense'>
        {displayForm===false?
            <button onClick={startEditingHandler}>New Expense</button>
        :
            <NewExpenseForm 
                AccessNewExpense={getNewExpenseData}
                onCancel={stopEditingHandler}
              />
        }
        
    </div>
  )
}

export default NewExpense
