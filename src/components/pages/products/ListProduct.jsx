import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {ListProductContainer} from 'components/products';
import {MainLayout} from 'components/layouts';

class ListProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainLayout>
        <ListProductContainer/>
      </MainLayout>
    );
  }
}

export default withRouter(ListProduct)