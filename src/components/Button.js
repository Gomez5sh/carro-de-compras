import { Component } from "react";

const styles = {
  button: {
    backgroundColor: "#0A283E",
    border: "solid 1px transparent",
    color: "#fff",
    width: "100%",
    fontSize: "1.1rem",
    padding: "15px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

class Button extends Component {
  render() {
    return <button style={styles.button} {...this.props} />;
  }
}

export default Button;
