

const Investments = (props)=>{
  const userData = {
    initialInvestment: props.initialInvestment,
    annualInvestment: props.annualInvestment,
    expectedReturn : props.expectedReturn,
    duration : duration
  } 

  return(
    <table>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest</th>
        <th>Total Interest</th>
        <th>Capital</th>
      </tr>
    </table>
  )
}

export default Investments