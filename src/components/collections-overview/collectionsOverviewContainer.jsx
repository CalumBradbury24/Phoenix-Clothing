
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner';
import CollectionsOverview from './collections-overview';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),//Passes with spinner(CollectionsOverview) to connect (curried functions)
)(WithSpinner(CollectionsOverview))


export default CollectionsOverviewContainer;
