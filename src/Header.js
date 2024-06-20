import logo from "./logo.svg"

export default function Header(props){
    return(
        <div id="cabecera"> 
          <img className="logo" src={logo} alt="logo" />
          <h3 className="mensaje">Products web application</h3>
          
        </div>
        )
}