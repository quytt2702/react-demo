import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {CreateProductForm} from 'components/products';
import {MainLayout} from 'components/layouts';
import {toastr} from "react-redux-toastr";

class CreateProduct extends Component {
  constructor(props, context) {
    super(props, context);
  }

  fnSubmit(data) {
      let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

      let checkdata = products.find(function (product) {
          return product.name == data.name
      });
      if (checkdata) {
          toastr.error('name is exists');
          return;
      }

      products.push(data);
      localStorage.setItem('products', JSON.stringify(products));
      toastr.success('Thành công!', 'Lưu Thành Công');
      this.props.history.push('/products');
  }

  render() {
    return (
      <MainLayout>
        <CreateProductForm onAddProduct={this.fnSubmit.bind(this)}/>
      </MainLayout>
    );
  }
}

export default withRouter(CreateProduct)