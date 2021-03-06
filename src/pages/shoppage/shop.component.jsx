import React from 'react';
import CollectionPage from '../../components/collection/collection.component';
import CollectionOverview from'../../components/collection-overview/collection.overview.component';
import {Route} from 'react-router-dom';

const ShopPage =({match})=>{
      return <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
}
export default ShopPage;