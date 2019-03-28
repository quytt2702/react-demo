import React, { Component } from "react";
import  {Container,Row,Col,Button } from "react-bootstrap";
import { toastr } from "react-redux-toastr";
import { connect } from 'react-redux';
import * as action from 'base/actions';
import {withRouter} from 'react-router-dom';

class CreateProductForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false,
            price: '',
            vertion: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
    } 
    s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    
    generateId = () => {
        return this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + 
            this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + this.s4();
    }

    async onSubmit() {
        await this.setState({
            id: this.generateId()
        });
        
        if (!this.state.name || !this.state.price) {
            if (!this.state.name) {
                toastr.error('name is required');
            }
  
            if (!this.state.price) {
                toastr.error('price is required');
            }

            if (!this.state.vertion) {
                toastr.error('vertion is required');
            }
            return;
        }
        this.props.onAddProduct(this.state)
        toastr.success('Thành công!', 'Lưu Thành Công');
        this.props.history.push('/products')
    }

    onChangeHandle(name, e) {
        let target = e.target;

        let value  = (target.type === 'checkbox') ? target.checked : target.value;

        this.setState({
              [name]: value
        });
    }

    onCancel() {
        this.props.history.push('/products');
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={12} md={12} sm={12}>
                            <div className="card bg-white m-3">
                                <div className="card-header">
                                    <h3 className="card-title">Thêm Sản Phẩm</h3>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="">Tên Sản Phẩm: {this.state.name} </label>
                                        <input type="text" className="form-control" onChange={this.onChangeHandle.bind(this, 'name')} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Nhà Phân Phối: {this.state.vertion} </label>
                                        <select 
                                        className="custom-select custom-select-sm" 
                                        value={this.state.vertion} 
                                        onChange={this.onChangeHandle.bind(this, 'vertion')}
                                        >
                                            <option value=''>chọn ...</option>
                                            <option value='Iphone'>Iphone</option>
                                            <option value='Samsung'>Samsung</option>
                                            <option value='Oppo'>Oppo</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Tình Trạng: {(this.state.status === true) ? 'Còn Hàng' : 'Hết Hàng'} </label>
                                        <div className="custom-control custom-checkbox">
                                            <input 
                                            type = "checkbox" 
                                            className = "custom-control-input" 
                                            id="checkboxStatus"
                                            value = {this.state.status}
                                            checked = {this.state.status}
                                            onChange = {this.onChangeHandle.bind(this, 'status')}/>
                                        <label className="custom-control-label" htmlFor="checkboxStatus"></label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Giá Tiền: {this.state.price} </label>
                                        <select 
                                        className="custom-select custom-select-sm" 
                                        value={this.state.price} 
                                        onChange={this.onChangeHandle.bind(this, 'price')}
                                        >
                                            <option value=''>chọn ...</option>
                                            <option value={1000}>1,000đ</option>
                                            <option value={10000}>10,000đ</option>
                                            <option value={100000}>100,000đ</option>
                                            <option value={150000}>150,000đ</option>
                                        </select>
                                    </div>
                                </div>
                                <Button variant="primary" onClick={ this.onSubmit }>Save</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(action.addProduct(product));
        }
    }
};

export default withRouter(connect(null, mapDispatchToProps)(CreateProductForm));