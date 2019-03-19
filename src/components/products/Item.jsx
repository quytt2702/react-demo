import React, { Component } from "react";
import {Button} from "react-bootstrap";

class Item extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        console.log(12);
    }

    render () {
        return (                
            <tr>
                <td>{ this.props.product.id }</td>
                <td>{ this.props.publisher.name } { this.props.product.vertion }</td>
                <td>{ this.props.product.name }</td>
                <td><span className="label label-success">{ this.props.product.price }</span></td>
                <td>
                    <Button className="btn btn-primary mr-2" onClick={ this.onClick }>Chi tiết sản phẩm</Button>
                    <Button variant="secondary" className="mr-2">Mua Hàng</Button>
                    <Button variant="danger" className="mr-2" >Hủy</Button>
                </td>
            </tr>
        )
    }
}

export default Item;