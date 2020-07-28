import React from 'react';

//If there is an error we don't show the user the red page with all the errors
class ErrorBoundary extends React.Component{

    state = {
        hasErrored: false, //error or not?
    }
    //error argument is error in a child component
    static getDerivedStateFromError(error){//Catches any error thrown in choldren of ErrorBoundary component
        //process the error
        return{ hasErrored: true }
    }
    //info is information about the error that was thrown
    componentDidCatch(error, info){
        console.log(error);
    }

    render(){
        if(this.state.hasErrored){
            return <div>Oops something went wrong!</div>//Display message if there is an error
        }
        return this.props.children; //No error, render children normally
    }
}

export default ErrorBoundary;