import { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense';
import Items from "./ExpenseData";
// import ExpenseChart from './components/Expense/ExpenseChart';

function App() {
  const [Newdata,setData]=useState(Items);
  console.log(Newdata)
  const getDataFromNewExpense=(newData)=>{
        

        newData={
          ...newData,
          date:new Date(newData.date),
          id:Math.random()*10000000
        }
       
        setData((prevdata)=>{
          return[newData ,...prevdata]
        })
        console.log(Newdata)
        console.log("from App",newData);
        Items.push({newData});
  }
  
  
  return (
    <div className="App">
      <NewExpense sendDataToApp={getDataFromNewExpense}/>
      
      <Expenses items={Newdata}/>
    </div>
  );
}

export default App;
