import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {ListProduct} from 'components/products';
import {MainLayout} from 'components/layouts';
import { connect } from 'react-redux';
import * as actions from 'base/actions';

class ListProductContainer extends Component {
  constructor(props) {
    super(props);
  }

  onDeleteProduct(id) {
    this.props.delete(id);
  }

  render() {
    return (
      <MainLayout>
        <ListProduct 
          products={ this.props.products } 
          onGenerateProduct={ this.props.generate } 
          onDeleteProduct = {this.onDeleteProduct.bind(this)}
        />
      </MainLayout>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    generate: () => {
      dispatch(actions.generateProduct());
    },
    delete: (id) => {
      dispatch(actions.deleteProduct(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ListProductContainer))