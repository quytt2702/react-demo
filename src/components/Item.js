import React, { Component } from "react";
import {Button} from "react-bootstrap";
import {toastr} from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

const reducer = combineReducers(reducers)
const store = createStore(reducer)

class Item extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        console.log(12);
          toastr.success('quy');
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
                    <Button variant="danger" className="mr-2" onClick={() => toastr.warning('The title', 'The message')}>Hủy</Button>
                </td>
            </tr>
        )
    }
}

export default Item;