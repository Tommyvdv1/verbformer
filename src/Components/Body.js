import React, { Component } from 'react';
import { connect } from 'react-redux';
const Checklist = React.lazy(() => import('./Checklist'));
const Verbformer = React.lazy(() => import('./Verbformer/Verbformer'));
const Test = React.lazy(() => import('./Test/test'));
const Table = React.lazy(() => import('./Test/Table'));
const AllaFormer = React.lazy(() => import('./AllaFormer/AllaFormer'));

const mapStateToProps = state => {
    return {
        Log: state.LoginReducer.Login,
    }
    
}
class Body extends Component {
    


    render() {
    	const {Log} = this.props;
      if(Log==='check')
      		return (
            	<Checklist/>
        		)
        else if(Log==='test')
          return (
              <Test/>
            )
        else if(Log==='table')
          return (
              <Table/>
            )
        else if(Log==='alla')
          return(
              <AllaFormer/>
            )
      	else {
      		return (
      			<Verbformer/>
      			)
      	}
    }
}


export default connect(mapStateToProps)(Body);