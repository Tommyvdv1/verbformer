import React, { Component } from 'react';
import './Verbformer.css';
import { connect } from 'react-redux';
import { InitialWorkList, FillCheckVerb, FillSvarVerb, gorom, } from '../../actions';

const mapStateToProps = state => {
    return {
        Work: state.VerbReducer.WorkList,
        Mingla: state.VerbReducer.Mingla,
        int: state.VerbReducer.int,
        CheckVerb: state.VerbReducer.CheckVerb,
        SvarVerb: state.VerbReducer.SvarVerb,
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        Clear: () => dispatch(InitialWorkList()),
        Fill: (Mingla, WorkList, int, CheckVerb) => dispatch(FillCheckVerb(Mingla, WorkList, int, CheckVerb)),
 		FillSvarVerb: (SvarVerb) => dispatch(FillSvarVerb(SvarVerb)),
 		gorom: () => dispatch(gorom()),
    }
}

class Verb extends Component {
    
GörOm = () => {
	this.props.gorom();
	this.props.Clear();
}

getVerb = () => {
	const {Mingla, int, CheckVerb, Work, Fill, SvarVerb} =this.props;
	Fill(Mingla, Work, int, CheckVerb);
	document.getElementById("demo").innerHTML = CheckVerb.infinitiv;
	Object.keys(SvarVerb).map((value)=> {return(document.getElementById(value).value="");});
	Object.keys(SvarVerb).map((value)=> {return(document.getElementById(value).style="");});
	document.getElementById("Answer").style.visibility='hidden';
	document.getElementById("NästaBtn").disabled=true;
	document.getElementById("Svara").disabled=false;
	console.clear();
}

check1 = (a, b, c) => { 
	if (a === b)
	{
		document.getElementById(c).style.backgroundColor = 'rgb(139, 188, 51)';//"#8bbc33";
	}
	else
	{
		document.getElementById(c).style.backgroundColor = "#ff4d4d";
	}
}

Check = () => {
	const {CheckVerb, SvarVerb} = this.props;
	console.log(CheckVerb);
	this.props.FillSvarVerb(this.props.SvarVerb);
	console.log(SvarVerb);
	this.check1(CheckVerb.presens, SvarVerb.presens, "presens");
	this.check1(CheckVerb.preteritum, SvarVerb.preteritum, "preteritum");
	this.check1(CheckVerb.supinum, SvarVerb.supinum, "supinum");
	this.ShowAnswer();
}

ShowAnswer = () => {
	const {CheckVerb, Work} = this.props;
	if (document.getElementById("presens").style.backgroundColor === 'rgb(139, 188, 51)' &&
		document.getElementById("preteritum").style.backgroundColor === 'rgb(139, 188, 51)' &&
		document.getElementById("supinum").style.backgroundColor === 'rgb(139, 188, 51)' 
		)
	{	
		document.getElementById("Answer").style.visibility='visible';
		document.getElementById("Ned").innerHTML=`<i>(${CheckVerb.nederländska})</i>`;
		document.getElementById("Pres").innerHTML=`presens: <b>${CheckVerb.presens}</b>`;
		document.getElementById("Pret").innerHTML=`Preteritum: <b>${CheckVerb.preteritum}</b>`;
		document.getElementById("Sup").innerHTML=`Supinum: <b>${CheckVerb.supinum}</b>`;
		document.getElementById("NästaBtn").disabled=false;
		if(Work.length===1){document.getElementById("Svara").disabled=true;document.getElementById("NästaBtn").disabled=true};
	}
	else
	{
		document.getElementById("Answer").style.visibility='hidden';
	}
}

EnterFunction = (event) => {
  	if (event.which === 13) {
   	document.getElementById("Svara").click();
  }
}

componentDidMount() {
	document.body.style.backgroundColor = '#ffcc00';
    document.getElementById("NästaBtn").disabled=false;
    document.getElementById("Svara").disabled=true;
}



    render() {
    	return(
    	<div className='Verbformer' id='Verbformer'>
    		<div className='container'>
				<div className="d-flex flex-column">
					<div className="text-center m-2">
							<p>Skriv alla verbformer.</p>
					</div>
					<div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row">
			  				
			    				<div className="col-sm m-2 text-center">
			      					<p id="demo"></p>
			    				</div>
			    				<div className="col-sm m-2">
			      					<div className="input-group mb-3">
							  			<input type="text" className="form-control" placeholder="Presens" aria-label="Presens" aria-describedby="basic-addon1" id="presens"></input>
									</div>
			    				</div>
			    				<div className="col-sm m-2">
			      					<div className="input-group mb-3">
							  			<input type="text" className="form-control" placeholder="Preteritum" aria-label="Preteritum" aria-describedby="basic-addon1" id="preteritum"></input>
									</div>
			    				</div>
			    				<div className='col-sm m-2'>
			    					<div className="input-group mb-3">
							  			<input type="text" className="form-control" placeholder="Supinum" aria-label="Supinum" aria-describedby="basic-addon1" id="supinum" onKeyPress={(event)=>this.EnterFunction(event)}></input>
									</div>
			    				</div>
			  				
					</div>
						<div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row align-items-center">
							<div className="col-sm m-2"></div>
							<div className="col-sm m-8 d-flex justify-content-center">
								<button type="button" id='Svara' className="btn btn-secondary btn-lg m-2" onClick={this.Check}>Svara</button>
			
								<button type="button" id='NästaBtn' className="btn btn-secondary btn-lg m-2" onClick={this.getVerb} >Nästa</button>
							</div>
							<div className="col-sm m-2 d-flex flex-row-reverse justify-content-center justify-content-lg-between">
								<button type="button" id='GorOm' className="btn btn-secondary btn-lg m-2" onClick={this.GörOm}>Gör om</button>
							</div>
						</div>
						<div className='container' id='Answer' style={{visibility: 'hidden',}}>
							<div className='d-flex justify-content-center m-5'>
								<p className='m-3' id='Ned'></p>
								<p className='m-3 d-none d-lg-block d-xl-block' id='Pres'></p>
								<p className='m-3 d-none d-lg-block d-xl-block' id='Pret'></p>
								<p className='m-3 d-none d-lg-block d-xl-block' id='Sup'></p>
							</div>
						</div>
					
				</div>
			</div>
		</div>
			)
    	}

    }
export default connect(mapStateToProps, mapsDispatchToProps )(Verb);