import { useState } from "react"
import Header from "./components/Header/Header"
import Logo from "./assets/investment-calculator-logo.png"

function App() {
  const [initailInvestment, setInitailInvestment] = useState(0)
  const [annualInvestment,setAnnualInvestment] = useState(0)
  const [expectedReturn, setExpectedReturn] = useState(0)
  const [duration, setDuration] = useState(0)
  return (
     <div>
      <Header logo={Logo}/>
     </div>
  )
}

export default App
