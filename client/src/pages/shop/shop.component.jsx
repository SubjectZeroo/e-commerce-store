import React from 'react';
import { Route } from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import { connect } from 'react-redux'


import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPageContainer from '../collection/collection.container';



import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

import WithSpinner from '../../components/with-spinner/with-spinner.component'



class ShopPage  extends React.Component {
  

  componentDidMount(){
   

    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();

  }

  render() {
    const { match } = this.props;
    return(
        <div className='shop-page'>
          <Route 
            exact 
            path={`${match.path}`}
            component={CollectionsOverviewContainer}
          />
          <Route 
            path={`${match.path}/:collectionId`} 
            component={CollectionPageContainer}
          />
        </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch( fetchCollectionsStart())
})
export default connect(null, mapDispatchToProps)(ShopPage);