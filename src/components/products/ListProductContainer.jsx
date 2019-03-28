import React, { Component } from "react";
import Item from "./Item";
import { Container,Row,Col,Button,Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'base/actions';

class ListProductContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isActive: true,
        }
        this.onSetState   = this.onSetState.bind(this);
    }

    onSetState() {
        this.setState({
            isActive: this.state.isActive ? false : true,
        });
    }

    showInfoProduct () {
        let products = this.props.products;
        if ( typeof products === 'object' && products.length && this.state.isActive ) {
            var elements = products.map( (product, index) => {
                return (
                    <Item key = { index } product = { product }/>
                )    
            });
        } else {
            elements = <tr><td colSpan={5}> không có dữ liệu </td></tr>;
        }

        return elements;
    }

    onGenerateProduct() {
        this.props.generate();
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
                                <Link to="/products/create" className="ml-5 btn btn-success">Thêm sản Phẩm</Link>
                                <Button variant="danger" className="ml-5" onClick={ this.onGenerateProduct.bind(this) }>Generate 3 Products</Button>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        generate: () => {
            dispatch(actions.generateProduct());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProductContainer);