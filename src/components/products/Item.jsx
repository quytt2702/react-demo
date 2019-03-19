import React, { Component } from "react";
import {Button} from "react-bootstrap";

class Item extends Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete() {
        let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

        products = products.filter((product) => {
            return product.id != this.props.product.id
        })

        localStorage.setItem('products', JSON.stringify(products));
        location.reload();
    }

    render () {
        return (                
            <tr>
                <td>{ this.props.product.id }</td>
                <td>{ this.props.product.vertion }</td>
                <td>{ this.props.product.name }</td>
                <td><span className="label label-success">{ this.props.product.price }</span></td>
                <td>
                    <Button className="btn btn-primary mr-2">Chi tiết sản phẩm</Button>
                    <Button variant="danger" className="mr-2" onClick={ this.onDelete }>Xóa</Button>
                </td>
            </tr>
        )
    }
}

export default Item;