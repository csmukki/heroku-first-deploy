import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { ShopPageContainer } from './shop-page.styles';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


const ShopPage = ({collections}) => (
    <ShopPageContainer>
        {
            collections.map(({id, ...otherProps}) => (
                <CollectionPreview key={id} {...otherProps}/>
            ))
        }
    </ShopPageContainer>
);

const mapStateToProps = state => ({
    collections: selectCollectionsForPreview(state)
});


export default connect(mapStateToProps)(ShopPage);