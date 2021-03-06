import Logo from "./Logo";
import Carro from "./Carro";
import { Component } from "react";

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100px",
    justifyContent: "space-between",
    position: "relative",
    padding: "0 50px",
    boxShadow: "0 2px 3px rgb(0,0,0, 0.1)",
  },
};

class Navbar extends Component {
  render() {
    const { carro, mostrarCarro, esCarroVisible } = this.props;
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Carro
          carro={carro}
          mostrarCarro={mostrarCarro}
          esCarroVisible={esCarroVisible}
        />
      </nav>
    );
  }
}

export default Navbar;
