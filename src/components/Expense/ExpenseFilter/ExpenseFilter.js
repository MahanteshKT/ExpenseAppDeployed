import React from 'react'
import "./ExpenseFilter.css"
function ExpenseFilter(props) {
    
    const FilterYear=(e)=>{
        props.onChangeFilter(e.target.value)
    }
  return (
    <div className='filter'>
        <h1 className='filterHeader'>Filter by year</h1>
        <select className='filterByYear' name='filterByYear' value={props.selected} onChange={FilterYear} >
                <option  value='2020'>2020</option>
                <option  value='2021'>2021</option>
                <option  value='2022'>2022</option>
                <option  value='2023'>2023</option>
                <option  value='2024'>2024</option>
        </select>
    </div>
  )
}

export default ExpenseFilter
