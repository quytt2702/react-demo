import React, { Component } from "react";
import Item from "./Item";
import {Container,Row,Col,Button,Table} from "react-bootstrap";

class ListContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            product: {
                apple: {
                    id: 1,
                    vertion: 'xs mart',
                    name: 'Iphone',
                    price: '32.000.000 đ',
                },
                samsung: {
                    id: 2,
                    vertion: 'S10',
                    name: 'Samsung',
                    price: '22.000.000 đ',
                },
                oppo: {
                    id: 3,
                    vertion: 'F7s',
                    name: 'Oppo',
                    price: '11.000.000 đ',
                }
            },
            publishers: [
                {
                    id: 1,
                    name: 'apple',
                    status: true
                },
                {
                    id: 2,
                    name: 'samsung',
                    status: true
                },
                {
                    id: 3,
                    name: 'oppo',
                    status: true
                },
                {
                    id: 4,
                    name: 'apple',
                    status: false
                },
                {
                    id: 5,
                    name: 'oppo',
                    status: false
                },
            ],
            isActive: true,
        }
        this.onAddProduct = this.onAddProduct.bind(this);
        this.onSetState   = this.onSetState.bind(this);
    } 

    onAddProduct() {
        console.log(this.refs.name_product.value);
    }

    onSetState() {
        this.setState({
            isActive: this.state.isActive ? false : true,
        });
    }

    showInfoProduct () {
        if ( typeof this.state.publishers === 'object' && this.state.publishers.length && this.state.isActive ) {
            var elements = this.state.publishers.map( (publisher, index) => {
                if (publisher.status === true) {
                    if (publisher.name === 'apple') {
                        return (
                            <Item key={index} product={this.state.product.apple ? this.state.product.apple : null} publisher={publisher}/>
                        )
                    } else if (publisher.name === 'oppo') {
                        return (
                            <Item key={index} product={this.state.product.oppo ? this.state.product.oppo : null} publisher={publisher}/>
                        )
                    } else {
                        return (
                            <Item key={index} product={this.state.product.samsung ? this.state.product.samsung : null} publisher={publisher}/>
                        )
                    }
                } else {
                    return null;
                }
            });
        } else {
            elements = <tr><td colSpan={5}> không có dữ liệu </td></tr>;
        }

        return elements;
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={12} md={12} sm={12}>
                            <div className="panel panel-danger">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Thêm Sản Phẩm</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label htmlFor="">Tên Sản Phẩm </label>
                                        <input type="text" className="form-control" ref="name_product" />
                                    </div>
                                </div>
                                <Button variant="primary" onClick={ this.onAddProduct }>Save</Button>
                            </div>
                        </Col>
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
                                        { this.showInfoProduct() }
                                    </tbody>
                                </Table>

                                <Button variant="warning" onClick={ this.onSetState }>Trạng Thái: {this.state.isActive ? 'Hoạt động' : 'Không hoạt động'}</Button>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ListContainer;