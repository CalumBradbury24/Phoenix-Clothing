import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

//Generate WithSpinner higher order component
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    );
};

export default WithSpinner;