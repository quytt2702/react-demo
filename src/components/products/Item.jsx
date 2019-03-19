import React, { Component } from "react";
import {Button} from "react-bootstrap";

class Item extends Component {
    constructor(props) {
        super(props);
        this.onDeleteProduct = this.onDeleteProduct.bind(this);
    }

    onDeleteProduct() {
        this.props.onDeleteProduct(this.props.product.id);
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
                    <Button variant="danger" className="mr-2" onClick={ this.onDeleteProduct }>Xóa</Button>
                </td>
            </tr>
        )
    }
}

export default Item;