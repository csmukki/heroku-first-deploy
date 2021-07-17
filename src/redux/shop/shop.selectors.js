import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    Object.keys(collections).reduce((Accumulator, key) => {
      Accumulator.push(collections[key]);
      return Accumulator;
    }, [])
);
