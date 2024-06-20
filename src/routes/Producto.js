import { useParams } from "react-router-dom";
import Location from "../Location";
import { Link } from "react-router-dom";
export default function Producto(props) {
  let { productId } = useParams();
  return (
    <div id="producto">
      <Location location={productId} />

      <h2 id="titulo">
        {props?.theproducts?.map((elem) => elem.title)[Number(productId)]}{" "}
      </h2>
      <div id="info">
      <p>{props?.theproducts?.map((elem)=>elem.description)[Number(productId)]}</p>
      <p>Prize: {props?.theproducts?.map((elem)=>elem.price)[Number(productId)]}$</p>
      <p>Rating: {props?.theproducts?.map((elem)=>elem.rating)[Number(productId)]}</p>
      <p>Stock: {props?.theproducts?.map((elem)=>elem.stock)[Number(productId)]}</p>
      </div>
      <img  id="foto" src={props?.theproducts?.map((elem) => elem.images[0])[Number(productId)]}></img>
      <Link to="/">
        <button id="volver">Volver</button>
      </Link>
    </div>
  );
}
