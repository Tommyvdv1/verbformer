import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checklist from './Checklist';
import Verbformer from './Verbformer/Verbformer';

const mapStateToProps = state => {
    return {
        Log: state.LoginReducer.Login,
    }
    
}
class Body extends Component {
    


    render() {
    	const {Log} = this.props;
      if(!Log)
      		return (
            	<Checklist/>
        		)
      	else {
      		return (
      			<Verbformer/>
      			)
      	}
    }
}


export default connect(mapStateToProps)(Body);