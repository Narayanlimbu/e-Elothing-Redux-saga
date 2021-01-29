import {createSelector} from 'reselect';


const selectShop=state=>state.shop;

export const selectCollection=(collectionId)=>createSelector(
    [selectShop],
    shop=>shop.collections[collectionId]
)

const selectShopCollections=createSelector(
    [selectShop],
    shop=>shop.collections
)

const selectCollectionoverview=createSelector(
    [selectShopCollections],
    collections=>Object.keys(collections).map(key=>collections[key])
)
export default selectCollectionoverview;

