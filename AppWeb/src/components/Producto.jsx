import { Component } from "react";

export default class Producto extends Component{
    render(){
        return(
            <figure>
               <img src={this.props.image} alt={this.props.name}></img>
               <figcaption>{this.props.name}</figcaption>
               <b>{this.props.price} {this.props.currency_id}</b>
            </figure>
        )
    }
}