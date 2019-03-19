import React, { Component } from "react";
import Item from "./Item";
import {Container,Row,Col,Button,Table} from "react-bootstrap";
import {toastr} from "react-redux-toastr";

class ListContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            products: [

            ],
            isActive: true,

            name: 'tran truong quy',
            status: false,
            price: 100000

        }
        this.onSetState   = this.onSetState.bind(this);
    }
    
    componentDidMount() {

        let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

        this.setState({
            products: products
        });
    }

    onSetState() {
        this.setState({
            isActive: this.state.isActive ? false : true,
        });
    }

    showInfoProduct () {
        if ( typeof this.state.products === 'object' && this.state.products.length && this.state.isActive ) {
            var elements = this.state.products.map( (product, index) => {
                return (
                    <Item key = { index } product = { product }/>
                )    
            });
        } else {
            elements = <tr><td colSpan={5}> không có dữ liệu </td></tr>;
        }

        return elements;
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateId() {
        return this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + 
            this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + this.s4();
    }

    onGenerateProduct() {
        let products = [
            {
                id: this.generateId(),
                vertion: 'xs mart',
                name: 'Iphone',
                price: '32.000.000 đ',
            },
            {
                id: this.generateId(),
                vertion: 's10',
                name: 'Samsung',
                price: '15.000.000 đ',
            },
            {
                id: this.generateId(),
                vertion: 'f7s',
                name: 'Oppo',
                price: '20.000.000 đ',
            }
        ];

        localStorage.setItem('products', JSON.stringify(products));
        this.setState({
            products: JSON.parse(localStorage.getItem('products'))
        });
    }

    render() {
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
                                        { this.showInfoProduct() }
                                    </tbody>
                                </Table>

                                <Button variant="warning" onClick={ this.onSetState }>Trạng Thái: {this.state.isActive ? 'Hoạt động' : 'Không hoạt động'}</Button>
                                <Button variant="info" className="ml-5">Thêm sản Phẩm</Button>
                                <Button variant="danger" className="ml-5" onClick={ this.onGenerateProduct.bind(this) }>Generate 3 Products</Button>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ListContainer;