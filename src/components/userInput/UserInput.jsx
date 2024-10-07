import "./user-input.css"
import { useState } from "react"

const UserInput = (props)=>{
   const handleDurationChange = (event)=>{
     props.handleDuration(event.target.value)
   }
   const handleExpextedReturnChange = (event)=>{
      props.handleExpectedReturn(event.target.value)
   }
   const handleAnnualInvestmentChange = (event)=>{
      props.handleAnnualInvestment(event.target.value)
   }
   const handleInitalInvestemntChnage = (event)=>{
      props.handleInitalInvestemnt(event.target.value)
   }
   return(
    <div className="user-inputs">
       <div className="input-holder">
        <label for="initialInvestment">Initail Investment</label>
        <input type="number" id="initialInvestment" onChange={handleInitalInvestemntChnage}/>

        <label for="annualInvestment">Annual Investment</label>
        <input type="number" id="annualInvestment" onChange={handleAnnualInvestmentChange}/>
       </div>
       <div className="input-holder">
        <label for="expextedReturn">Expexted Return</label>
        <input type="number" id="expextedReturn" onChange={handleExpextedReturnChange}/>

        <label for="duration" >Duration</label>
        <input type="number" id="duration"  onChange = {handleDurationChange}/>
       </div>
    </div>
   )
}

export default UserInput