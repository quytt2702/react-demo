import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { toastr } from "react-redux-toastr";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { withRouter } from 'react-router-dom';

class Item extends Component {
    constructor(props) {
        super(props);
    }

    onDelete(id) {
        const options = {
            title: 'Bạn chắc chắn muốn xóa!',
            buttons: [
              {
                label: 'Đồng ý',
                onClick: () => {
                    this.props.onDeleteProduct(id);
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
        let product = this.props.product;

        return (                
            <tr>
                <td>{ product.id }</td>
                <td>{ product.vertion }</td>
                <td>{ product.name }</td>
                <td><span className="label label-success">{ product.price }</span></td>
                <td>
                    <Button className="btn btn-primary mr-2">Chi tiết sản phẩm</Button>
                    <Button variant="danger" className="mr-2" onClick={ this.onDelete.bind(this, product.id) }>Xóa</Button>
                </td>
            </tr>
        )
    }
}

export default withRouter(Item);