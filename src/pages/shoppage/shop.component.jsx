import React from 'react';
import SHOP_DATA from './shopdata';
import CollectioPreview from '../../components/preview-collection/collection.preview.component';
class ShopPage extends React.Component{
  constructor(){
      super();
      this.state={
          collections:SHOP_DATA
      }
  }
  render(){
      const {collections}=this.state;
      return(
          <div>
              {
               collections.map(({id,...otherProps})=>(
                   <CollectioPreview key={id} {...otherProps}/>
               ))
              }
          </div>
      )
  }
}
export default ShopPage;