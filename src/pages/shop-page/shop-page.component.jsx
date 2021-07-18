import React from 'react';
import { connect } from 'react-redux';


import { firestore, collectionsForReducer } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import { ShopPageContainer } from './shop-page.styles';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';


class ShopPage extends React.Component {

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(snapshot => {
            const convertedCollections = collectionsForReducer(snapshot);
            updateCollections(convertedCollections)
        });
    }

    render() {
        return (
            <ShopPageContainer>
                <CollectionOverview />
            </ShopPageContainer>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
});


export default connect(null, mapDispatchToProps)(ShopPage);