import Tarjeta from "./Tarjeta";

export default function Lista(props) {
  return (
    <div id="productosresultados">
      {props.datos?.map((e) => {
        return (
          <div>
            <Tarjeta
              title={e.title}
              description={e.description}
              image={e.images[0]}
              id={e.id}
            />
          </div>
        );
      })}
    </div>
  );
}
