import React, { Component } from "react";
import Item from "./Item";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toastr } from "react-redux-toastr";

class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    }
    this.onSetState = this.onSetState.bind(this);
  }

  onSetState() {
    this.setState({
      isActive: this.state.isActive ? false : true,
    });
  }

  showInfoProduct(products) {
    if (typeof products === 'object' && products.length && this.state.isActive) {
      var elements = products.map((product, index) => {
        return (
          <Item key={index} product={product} onDeleteProduct={this.props.onDeleteProduct}/>
        )
      });
    } else {
      elements = <tr><td colSpan={5}> không có dữ liệu </td></tr>;
    }

    return elements;
  }

  onGenerate() {
    const options = {
      title: 'Bạn chắc chắn muốn generate!',
      buttons: [
        {
          label: 'Đồng ý',
          onClick: () => {
              this.props.onGenerateProduct();
              toastr.success('Success!' ,'Generate thành công')
          }
        },
        {
          label: 'Hủy bỏ',
          onClick: () => {
            toastr.warning('Hủy xóa', 'CANCEL: clicked')
          }
        }
      ],
      closeOnEscape: false,
      closeOnClickOutside: true,
    };
    
    confirmAlert(options);
  }

  render() {
    let products = this.props.products;

    return (
      <div>
        <Container>
          <Row className="mt-3">
            <Col xs={12} md={12} sm={12}>
              <Row className="mt-15">
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nhà Phân Phối</th>
                      <th>Nhãn Hiệu</th>
                      <th>Giá</th>
                      <th>Hoạt Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    { this.showInfoProduct(products) }
                  </tbody>
                </Table>

                <Button variant="warning" onClick={this.onSetState}>Trạng Thái: {this.state.isActive ? 'Hoạt động' : 'Không hoạt động'}</Button>
                <Link to="/products/create" className="ml-5 btn btn-success">Thêm sản Phẩm</Link>
                <Button variant="danger" className="ml-5" onClick={ this.onGenerate.bind(this) }>Generate 3 Products</Button>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ListProduct;