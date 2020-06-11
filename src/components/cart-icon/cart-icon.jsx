import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg'
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ( {toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <span className='item-count'>{itemCount}</span>
        <ShoppingIcon/>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount//pass whole reducer state into selectCartItemsCount selector
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);