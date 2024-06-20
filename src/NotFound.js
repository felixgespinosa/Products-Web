import { Link } from 'react-router-dom';
import error from "./404.jpg"
export default function NotFound(props) {
    return (
        <div id="info">
        <img className="logo" src={error} alt="logo" />
        <div>Ruta no encontrada</div> 
        <Link to="/"><button id='volver'>volver</button></Link>  
        </div>
    )
}