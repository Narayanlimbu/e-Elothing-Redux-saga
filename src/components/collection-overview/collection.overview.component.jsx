import React from 'react';
import CollectioPreview from '../preview-collection/collection.preview.component';
import selectCollectionOverview from '../../redux/shop/shop.selector';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

const CollectionOverview=({collections})=>{
    console.log(collections);
    return <div className='collection-overview'>
        {
               collections.map(({id,...otherProps})=>(
                   <CollectioPreview key={id} {...otherProps}/>
               ))
        }
    </div>
}
const mapStateToProps=createStructuredSelector({
    collections:selectCollectionOverview
})
export default connect(mapStateToProps)(CollectionOverview);