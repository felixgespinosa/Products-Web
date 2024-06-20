import Card from 'react-bootstrap/Card';
import {Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"



export default function Tarjeta(props) {
   
    return (<div className="unproducto">
        <Card  id="resultados" style={{ width: '40rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title><b>{props.title}</b></Card.Title>
                <Card.Text>
                <p>{props.description}</p>
                </Card.Text>
               <Link to={"/products/"+ (props.id-1)}><Button variant="primary">Ver</Button> </Link> 
            </Card.Body>
        </Card>


    </div>

    )
}