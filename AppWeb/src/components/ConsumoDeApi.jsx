import { Component } from "react";
import Producto from "./Producto";
import Buscar from "./Buscar";

export default class ConsumoDeApi extends Component {
  state = {
    productos: [],
    buscar: "",
  };

  /*componentDidMount() {
    let url = "https://api.mercadolibre.com/sites/MLA/search?q=samsung";
    fetch(url)
      .then(res => res.json())
      .then(json => {
        //console.log(json);
        json.results.forEach((el) => {
          let producto = {
            price: el.price,
            name: el.title,
            image: el.thumbnai,
            currency_id: el.currency_id,
            id: el.id,
          };
          let productos = [...this.state.productos, producto];
          this.setState({ productos : productos });
          console.log(this.state.productos)
        });
      });
  }*/
  consumir = () => {
    console.log(this.state.buscar);
    //console.log(bus);
    let productos = [];
    let url = "https://api.mercadolibre.com/sites/MLA/search?q=" + this.state.buscar;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        //console.log(json);
        json.results.forEach((el) => {
          let producto = {
            price: el.price,
            name: el.title,
            image: el.thumbnail,
            currency_id: el.currency_id,
            id: el.id,
          };
          productos.push(producto);
          this.setState({ productos });

          //console.log(productos);
        });

        //console.log(productos)
      });
    //console.log( this.state.productos);
  };

  render() {
    //console.log(this.state.productos)
    return (
      <>
        <h1>Consumo de API mercado libre</h1>
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            this.setState({ buscar: ev.target.buscar.value });
          }}
        >
          <input type="text" name="buscar" autoComplete="off" />
          <button type="submit" onClick={this.consumir()}>
            buscar
          </button>
          <h1> {this.state.buscar}</h1>
        </form>
        {this.state.productos.length === 0 ? (
          <h2>busca algo</h2>
        ) : (
          this.state.productos.map((el) => (
            <Producto
              key={el.id}
              image={el.image}
              name={el.name}
              price={el.price}
              currency_id={el.currency_id}
            />
          ))
        )}
      </>
    );
  }
}
