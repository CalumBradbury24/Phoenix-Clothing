
import { createSelector } from "reselect";


export const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  //gets an array = [hats, jackets, trainers, mens, womens]
  collections => Object.keys(collections).map(key => collections[key]) //gets value of collections object at given key
);

//select which selection
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );

//^curried function
