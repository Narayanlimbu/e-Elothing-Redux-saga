import React from 'react';
import './collection.styles.scss';
import {selectCollection} from '../../redux/shop/shop.selector';
import {connect} from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import CollectionItem from '../collection-item/collection-item.component';
const CollectionPage=({collections})=>{
    const {id, title, items}=collections;
    return <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className="items">
            {
                items.map(item=>(
                    <CollectionItem key={id} item={item}/>
                ))
            }
        </div>
    </div>
}
const mapStateToProps=(state,ownProps)=>({
    collections:selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);