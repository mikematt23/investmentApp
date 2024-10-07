import { useState } from "react"
import Header from "./components/Header/Header"
import UserInput from "./components/userInput/UserInput"
import Investments from "./components/Investments"
import Logo from "./assets/investment-calculator-logo.png"

function App() {
  const [initailInvestment, setInitailInvestment] = useState(0)
  const [annualInvestment,setAnnualInvestment] = useState(0)
  const [expectedReturn, setExpectedReturn] = useState(0)
  const [duration, setDuration] = useState(0)


  const handleInitalInvestemnt = (investment)=>{
    setInitailInvestment(investment)
  }

  const handleAnnualInvestment = (yearlyInvestment)=>{
    setAnnualInvestment(yearlyInvestment)
  }
  const handleExpectedReturn =(eReturn)=>{
    setExpectedReturn(eReturn)
  }
  const handleDuration = (length)=>{
    setDuration(length)
  }

  
  return (
     <div>
      <Header logo={Logo}/>
      <UserInput 
        handleAnnualInvestment = {handleAnnualInvestment}
        handleExpectedReturn = {handleExpectedReturn}
        handleInitalInvestemnt = {handleInitalInvestemnt}
        handleDuration = {handleDuration}
      />
     <Investments/>
     </div>
  )
}

export default App
