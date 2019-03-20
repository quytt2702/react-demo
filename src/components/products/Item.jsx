import React, { Component } from "react";
import {Button} from "react-bootstrap";
import {toastr} from "react-redux-toastr";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Item extends Component {
    constructor(props) {
        super(props);
        this.onDeleteProduct = this.onDeleteProduct.bind(this);
    }

    onDeleteProduct() {
        const options = {
            title: 'Bạn chắc chắn muốn xóa!',
            buttons: [
              {
                label: 'Đồng ý',
                onClick: () => {
                    this.props.onDeleteProduct(this.props.product.id);
                    toastr.success('Success!' ,'Xóa thành công')
                }
              },
              {
                label: 'Hủy bỏ',
                onClick: () => toastr.warning('Hủy xóa', 'CANCEL: clicked')
              }
            ],
            closeOnEscape: false,
            closeOnClickOutside: true,
          };
          
          confirmAlert(options);
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