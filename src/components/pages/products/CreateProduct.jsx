import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {CreateProductForm} from 'components/products';
import {MainLayout} from 'components/layouts';
import {toastr} from "react-redux-toastr";

class CreateProduct extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MainLayout>
        <CreateProductForm/>
      </MainLayout>
    );
  }
}

export default withRouter(CreateProduct)