import React from 'react';
import { connect } from 'react-redux';



import { updateSections } from '../../redux/directory/directory.actions';
import { selectSections } from '../../redux/directory/directory.selectors';
import { DirectoryContainer } from './directory.styles';
import {firestore, sectionsForReducer} from '../../firebase/firebase.utils';

import MenuItem from '../menu-item/menu-item.component';

class Directoy extends React.Component {


    async componentDidMount() {
        const {updateSections} = this.props;
        const collectionRef = firestore.collection('sections');
        const snapshot = await collectionRef.get()
        const convertedSections = sectionsForReducer(snapshot);
        updateSections(convertedSections);
    }


    render() {
        const {sections} = this.props;
        return (
            <DirectoryContainer>
                {
                    sections.map(({id,  ...rest}) => (
                        <MenuItem key={id} {...rest} />
                    ))
                }
            </DirectoryContainer>
        );
    }
}

const mapStateToProps = state => ({
    sections: selectSections(state)
});

const mapDispatchToProps = dispatch => ({
    updateSections: sections => dispatch(updateSections(sections))
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Directoy);