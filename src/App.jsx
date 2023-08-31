/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from 'react';
import { useState} from 'react';

const Area = ({ country, city, continent }) => {
  return (
    <div>
      <p>Time & date of {country} in {continent}</p>
      <p>City of {country} is {city}</p>
    </div>
  );
};

const Display = ({counter}) =>{
  return (
      <h2>{counter}</h2>
  )
}

const Button = ({handleClick,text}) => {
  return(
    <button onClick = {handleClick}>{text}</button>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div id='clkStr'>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div id='clkStr'>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const now = new Date();
  console.log(now);
  const [counter,newCount] = useState(0)
  const [click,setClick] = useState({ left:0, right:0 })
  const [allClicks,setAll] = useState([])
  const [total,setTotal] = useState(0)
  
  const increaseCount = () =>{newCount(counter+1)}
  const decreaseCount = () =>{newCount(counter-1)}
  const thousand = () =>{newCount(1000)}
  const zero = () =>{newCount(0)}
  const left = () =>{
    setAll(allClicks.concat('L'))
    const newClick = {
      left:click.left+1,
      right:click.right 
    }
    setTotal(newClick.left+newClick.right)
    setClick(newClick)
  }
  const right= () => {
    setAll(allClicks.concat('R'))
    const newClick ={
      left: click.left,
      right: click.right+1
    }
    setTotal(newClick.left+newClick.right)
    setClick(newClick)
  }
  console.log('rendering...', counter)
  
  return (
    <div className='main'>
      <Area country='Pakistan' city='Islamabad' continent='Asia' />
      <h1>Today's Date is {now.toString()}</h1>
      <Display counter = {counter}/>
      <div>
      <Button handleClick ={increaseCount} text = 'Plus'/>
      <Button handleClick ={decreaseCount} text = 'Minus'/>
      <Button handleClick ={zero} text = 'Zero'/>
      <Button handleClick ={thousand} text = 'Thousand'/>
      </div>
      <div className='sub'> 
      <Display counter = {click.left}/>
      <Display counter = {click.right}/>
      </div>
      <Button handleClick ={left} text = 'Left'/>
      <Button handleClick ={right} text = 'Right'/>
      <div>
      <h>Total : {total}</h>
      <History allClicks={allClicks} />
      </div>
     
    </div>

  );
};

export default App;
