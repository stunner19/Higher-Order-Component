// This is the higher-order component.

import React, { Component} from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    class Authentication extends Component{
        componentWillMount(){
            if(!this.props.authenticated){
                this.props.history.push('/');
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.authenticated){
                this.props.history.push('/');
            }
        }

        render(){
            return(
                <ComposedComponent {...this.props} />   // this.props refers to the props passed to the composed Component.
            );
        }
    }

    function mapStateToProps(state){
        return {
            authenticated : state.authenticated
        };
    }
    return connect(mapStateToProps)(Authentication);
}

// Higher-Order Component should be used when we want to limit a resource/component only to signedIn users.