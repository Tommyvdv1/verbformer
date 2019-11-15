import React, { Component } from 'react';
import {CheckboxList} from './Verbformer/CheckboxList.js';
import { fillWorkList, bekrafta, setMingla } from '../actions';
import { connect } from 'react-redux';
import { verb } from './Verbformer/VerbList.js';

const mapStateToProps = state => {
    return {
        Work: state.VerbReducer.WorkList,
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        onSubmit: (min, max, WorkList, verb) => dispatch(fillWorkList(min, max, WorkList, verb)),
    	click: () => dispatch(bekrafta()),
    	setMingla: (state) => dispatch(setMingla(state)),
    }
}

class Checklist extends Component {
	
	

	bekrafta = () => {
	const BoList = CheckboxList.map((value)=>{return(document.getElementById(value.name).checked)});
	var i; 
	var BoConst = true;
	for(i=0 ; i < BoList.length ; i++) {
		if(BoList[i]) {
			BoConst = false;
		}
	}
	document.getElementById("bekrafta").disabled=BoConst;
	}

	repeatConfirm = () => {
	const {onSubmit, Work, click, setMingla } = this.props;
	click();
	if(document.getElementById("Mingla").checked){setMingla(true)};
	CheckboxList.map((value)=> {if (document.getElementById(value.name).checked) {
			return(onSubmit(value.min,value.max, Work, verb));
		}
		else{
			return(value);
		}
	})
	}

	componentDidMount() {
	document.body.style.backgroundColor = '#ffcc00';
    document.getElementById("bekrafta").disabled=true;
	}

	render() {
		return(
		<div className="container">
			<div className="d-flex flex-row justify-content-center">
				<div className="d-flex flex-column">
					<div id="navbar">{CheckboxList.map((value)=>{return(<div key={value.name}><input type="checkbox" id={value.name} onChange={this.bekrafta}/><span>{value.text}</span></div>)})}</div>
					<div><input type="checkbox" id="Mingla"></input><span> Mingla</span></div>
					<div><button type="button" id='bekrafta' className="btn btn-secondary btn-lg m-2" onClick={this.repeatConfirm}>bekräfta</button></div>
				</div>
			</div>
		</div>
		)
	}
}

export default connect(mapStateToProps,mapsDispatchToProps)(Checklist);