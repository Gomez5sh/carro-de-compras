import { Component } from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
class App extends Component {
  state = {
    productos: [
      { name: "Tomate", precio: 1500, img: "/productos/tomate.jpg" },
      { name: "Arbejas", precio: 2800, img: "/productos/arbejas.jpg" },
      { name: "Lecha", precio: 700, img: "/productos/leche.jpg" },
      { name: "Pan", precio: 1900, img: "/productos/pan.jpg" },
      { name: "Pollo", precio: 27600, img: "/productos/pollo.jpg" },
    ],
    carro: [],
    esCarroVisible: false,
  };

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if (carro.find((element) => element.name === carro.name)) {
      const newCarro = carro.map((item) =>
        item.name === producto.name
          ? {
              ...item,
              cantidad: item.cantidad + 1,
            }
          : item
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({ ...producto, cantidad: 1 }),
    });
  };

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return;
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };

  render() {
    const { esCarroVisible } = this.state;
    return (
      <div>
        <Navbar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            agregarProductos={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
