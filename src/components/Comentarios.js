import { Component } from "react";

export class Comentarios extends Component {
  constructor() {
    super();

    this.state = {
      comentarios: ["comentario 1", "comentario 2", "comentario 3"],
    };
  }

  render() {
    return <div><Comentario comentarios={this.state.comentarios}/></div>;
  }
}

export function Comentario(props) {
  return (
    <ul>
      {props.comentarios.map((c) => (
        <li>{c}</li>
      ))}
    </ul>
  );
}
