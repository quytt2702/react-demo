import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {CreateProductForm} from 'components/products';
import {MainLayout} from 'components/layouts';
import { toastr } from "react-redux-toastr";
import { connect } from 'react-redux';
import * as action from 'base/actions';

class CreateProductContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  async onAddProduct(product) {
    this.props.AddProduct(product);
    await toastr.success('Thành công!', 'Lưu Thành Công');
    this.props.history.push('/products');
  }

  render() {
    return (
      <MainLayout>
        <CreateProductForm onAddProduct={ this.onAddProduct.bind(this) }/>
      </MainLayout>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    AddProduct: (product) => {
      dispatch(action.addProduct(product));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateProductContainer));