import "./header.css"

const Header = (props)=>{
   return(
    <div className="header">
      <img src={props.logo} alt="" />
      <h1>React Investment Calculator</h1>
    </div>
   )
}

export default Header