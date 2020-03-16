import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gorom,} from '../../actions';


const mapStateToProps = state => {
    return {
        Work: state.VerbReducer.WorkList,
    }
}


const mapsDispatchToProps = (dispatch) => {
    return {
    		gorom: () => dispatch(gorom()),
    	}
    }

class AllaFormer extends Component {

	constructor(props) {
    	super(props);
    	this.state = {
    		data:[["",0]],
    		workverb:"", 
    		svar:"",
    		verb:{},
    		verbform:"",
    		check: false,
    	};
  }

	fillWordList = () => {
		const formList = [];
		this.props.Work.forEach((value,key) => {
			const tempList = Object.values(value);
			const tempInt = Math.floor(Math.random() * tempList.length);
			formList.push([tempList[tempInt],key]);
			// Object.values(value).forEach(verb => {
			// 	formList.push([verb,key]);
			// })
		})
		this.setState({data:formList});
	}

	spliceWordList = (int) => {
		const data = this.state.data;
		data.splice(int,1);
		this.setState({data:data});
	}

	GiveVerb = () => {
		const int = Math.floor(Math.random() * this.state.data.length);
		const number = this.state.data[int][1];
		const verb = this.props.Work[number];
		this.setState({
			workverb: this.state.data[int][0],
			verb:verb,
			verbform:Object.keys(verb).find((test)=>{
				return(verb[test] === this.state.data[int][0])
			}),
		});
		this.spliceWordList(int);

	}

	fillSvarList = () => {
		const inf = document.getElementById("infinitiv").value.toLowerCase();
		this.setState({svar:inf,});
		// this.setState(prevState => ({
  // 			svar: [...prevState.svar,inf,]
		// })); 
	}

	check = (a,b) => {
		if (a === b)
  		{
    		return('rgb(139, 188, 51)');
  		}
  		else
  		{
    		return("#ff4d4d");
  		}
	}

	colorCheck = () => {
		if(document.getElementById('infinitiv').style.backgroundColor==='rgb(139, 188, 51)' && 
			document.getElementById('presens').style.backgroundColor==='rgb(139, 188, 51)' && 
			document.getElementById('preteritum').style.backgroundColor==='rgb(139, 188, 51)' && 
			document.getElementById('supinum').style.backgroundColor==='rgb(139, 188, 51)'
			)
		{

			return(true)
		}
		else {
			return(false)
		}
	}

	nästa = () => {
		if(this.state.check) {
			//this.fillSvarList();
			Object.keys(this.state.verb).forEach(value =>{if(value !=='nederländska'){
				document.getElementById(value).style.backgroundColor = this.check(document.getElementById(value).value.toLowerCase(),this.state.verb[value])}})
			if(this.colorCheck()) {
				document.getElementById("Answer1").style.visibility="visible";
				document.getElementById("NästaBtn").innerHTML="Nästa";
				this.setState({check:false});
				if(this.state.data.length===0){document.getElementById("NästaBtn").disabled=true;};
			}
		}
		else {
			this.GiveVerb();
			Object.keys(this.state.verb).forEach(value =>{if(value !=='nederländska'){
				document.getElementById(value).value="";
				document.getElementById(value).style.backgroundColor ="";}});
			document.getElementById("Answer1").style.visibility="hidden";
			document.getElementById("NästaBtn").innerHTML="Svara";
			this.setState({check:true});
		}
	}

	componentDidMount() {
		this.fillWordList();
	}
	
	render() {
		return(
		<div className='container'>
			<div className="d-flex col-sm m-2 justify-content-center">
			{this.state.workverb}
			</div>
			<div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row">
				<div className="col-sm m-2">
				    <div className="input-group mb-3">
						<input type="text" className="form-control" placeholder="infinitiv" aria-label="infinitiv" aria-describedby="basic-addon1" id="infinitiv" ></input>
					</div>
				</div>
				<div className="col-sm m-2">
					<div className="input-group mb-3">
						<input type="text" className="form-control" placeholder="presens" aria-label="presens" aria-describedby="basic-addon1" id="presens" ></input>
					</div>
				</div>
				<div className="col-sm m-2">
				    <div className="input-group mb-3">
						<input type="text" className="form-control" placeholder="preteritum" aria-label="preteritum" aria-describedby="basic-addon1" id="preteritum" ></input>
					</div>
				</div>
				<div className="col-sm m-2">
				    <div className="input-group mb-3">
						<input type="text" className="form-control" placeholder="supinum" aria-label="supinum" aria-describedby="basic-addon1" id="supinum" ></input>
					</div>
				</div>
			</div>
			<div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row justify-content-between align-items-lg-start border">
						<div className="d-none d-lg-block d-xl-none d-xl-block align-items-center border">
							<button type="button" id='GorOm' className="btn btn-secondary btn-lg m-2" style={{visibility: 'hidden'}}>GörOm</button>
						</div>
						<div className="d-flex justify-content-center border">
							<div className='d-flex flex-row flex-wrap justify-content-center' style={{width:'250px'}}>
								<div className='flex-col' ><button type="button" id='NästaBtn' className="btn btn-secondary btn-lg m-2" onClick={this.nästa}>Nästa</button></div>
								
								<div className='flex-col' ><button type="button" id='Hint' className="btn btn-secondary btn-lg m-2" onClick={()=>{document.getElementById("Answer1").style.visibility="visible"}}>Hint</button></div>
							</div>
						</div>
						<div className="d-flex flex-row-reverse justify-content-center justify-content-lg-between border">
							<button type="button" id='GorOm' className="btn btn-secondary btn-lg m-2" onClick={()=>this.props.gorom()}>Gör om</button>
						</div>
			</div>
			<div className='' id='Answer1' style={{visibility: 'hidden',}}>
				<div className='d-flex flex-column flex-sm-column flex-md-column flex-lg-row justify-content-center align-items-center mt-3'>
					<p className='mr-lg-3' id='Ned'>{this.state.verb.nederländska}</p>
					<p className='mr-lg-3' id='inf'>{this.state.verb.infinitiv}</p>
					<p className='mr-lg-3' id='Pres'>{this.state.verb.presens}</p>
					<p className='mr-lg-3' id='Pret'>{this.state.verb.preteritum}</p>
					<p className='mr-lg-3' id='Sup'>{this.state.verb.supinum}</p>
				</div>
			</div>
		</div>
			)
	}
}

export default connect(mapStateToProps, mapsDispatchToProps)(AllaFormer);