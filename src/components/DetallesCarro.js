import { Component } from "react";

const styles = {
  detallesCarro: {
    backgroundColor: "#FFFFFF",
    position: "absolute",
    marginTop: 30,
    boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
    borderRadius: 5,
    width: 300,
    right: 50,
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  li: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "solid 1px #aaa",
  },
};

class DetallesCarro extends Component {
  render() {
    const { carro } = this.props;
    return (
      <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
          {carro.map((item) => {
            return (
              <li key={item.name} style={styles.li}>
                <img alt={item.name} src={item.img} width="50" height="32" />
                {item.name} <span>{item.cantidad}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default DetallesCarro;
