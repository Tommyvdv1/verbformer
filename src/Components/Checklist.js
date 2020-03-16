import React, { Component } from 'react';
import {CheckboxList} from './Lists/CheckboxList.js';
import { fillWorkList, bekrafta, setMingla, InitialWorkList, } from '../actions';
import { connect } from 'react-redux';
import { verb } from './Lists/VerbList.js';

const mapStateToProps = state => {
    return {
        Work: state.VerbReducer.WorkList,
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        onSubmit: (min, max, workList, verb, språk) => dispatch(fillWorkList(min, max, workList, verb, språk)),
    	click: (log) => dispatch(bekrafta(log)),
    	setMingla: (state) => dispatch(setMingla(state)),
    	Clear: () => dispatch(InitialWorkList()),
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
	document.getElementById("ned/swe").disabled=BoConst;
	document.getElementById("test").disabled=BoConst;
	document.getElementById('alla former').disabled=BoConst;
	}

	repeatConfirm = (språk, state) => {
	const {onSubmit, Work, click, setMingla,} = this.props;
	click(state);
	if(document.getElementById("Mingla").checked){setMingla(true)};
	CheckboxList.map((value)=> {if (document.getElementById(value.name).checked) {
			return(onSubmit(value.min, value.max, Work, verb, språk));
		}
		else{
			return(value);
		}
	})
	}

	componentDidMount() {
	this.props.Clear();
    document.getElementById("bekrafta").disabled=true;
    document.getElementById("ned/swe").disabled=true;
    document.getElementById("test").disabled=true;
    document.getElementById("alla former").disabled=true;
	}

	render() {
		return(
		<div className="container">
			<div className="d-flex flex-row justify-content-center">
				<div className="flex-col">
					<div id="navbar">{CheckboxList.map((value)=>{return(<div key={value.name}><label><input type="checkbox" id={value.name} onChange={this.bekrafta}/><span>{value.text}</span></label></div>)})}</div>
					<label><input type="checkbox" id="Mingla"></input><span> Mingla</span></label>
				</div>
			</div>
			<div className='d-flex flex-row flex-wrap justify-content-center'>
			<div className='d-flex flex-row flex-wrap justify-content-center' style={{width:'320px'}}>
				<div className='flex-col' ><button type="button" id='bekrafta' className="btn btn-secondary btn-lg m-2" onClick={()=>this.repeatConfirm("swe",'click')}>bekräfta</button></div>
				<div className='flex-col' ><button type="button" id='ned/swe' className="btn btn-secondary btn-lg m-2" onClick={()=>this.repeatConfirm("ned", 'click')}>ned/swe</button></div>
				<div className='flex-col' ><button type="button" id='test' className="btn btn-secondary btn-lg m-2" onClick={()=>this.repeatConfirm("swe","test")}>test</button></div>
				<div className='flex-col' ><button type="button" id='alla former' className="btn btn-secondary btn-lg m-2" onClick={()=>this.repeatConfirm("swe",'alla')}>alla former</button></div>
				<div className='flex-col' ><button type="button" id='checklist' className="btn btn-secondary btn-lg m-2" onClick={()=>this.repeatConfirm("swe","table")}>checklist</button></div>
			</div>
			</div>
		</div>
		)
	}
}

export default connect(mapStateToProps,mapsDispatchToProps)(Checklist);