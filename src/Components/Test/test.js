import React, { Component } from 'react';
import '../Verbformer/Verbformer.css';
import { connect } from 'react-redux';
import { gorom, FillCheckVerb, FillSvarVerb, FillTestList, bekrafta, ClearTestList } from '../../actions';

const mapStateToProps = state => {
    return {
    	//Språk: state.VerbReducer.Språk,
        Work: state.VerbReducer.WorkList,
        Mingla: state.VerbReducer.Mingla,
        int: state.VerbReducer.int,
        CheckVerb: state.VerbReducer.CheckVerb,
        SvarVerb: state.VerbReducer.SvarVerb,
        testList: state.VerbReducer.testList,
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        Fill: (Mingla, WorkList, int, CheckVerb) => dispatch(FillCheckVerb(Mingla, WorkList, int, CheckVerb)),
 		FillSvarVerb: (SvarVerb) => dispatch(FillSvarVerb(SvarVerb)),
 		gorom: () => dispatch(gorom()),
 		FillTestList: (SvarVerb, testList, CheckVerb) => dispatch(FillTestList(SvarVerb, testList, CheckVerb)),
    	Table: (log) => dispatch(bekrafta(log)),
    	Clear: () => dispatch(ClearTestList()),
    }
}



class Test extends Component {

	GörOm = () => {
	this.props.gorom();
	}

	nextVerb = () => {
		console.clear();
		const {Mingla, int, CheckVerb, Work, Fill, FillSvarVerb, FillTestList, SvarVerb, testList, Table} = this.props;
		console.log(Work.length);
		FillSvarVerb(SvarVerb);
		FillTestList(SvarVerb, testList, CheckVerb);
		if(Work.length!==1){
			Fill(Mingla, Work, int, CheckVerb);
			document.getElementById("demo").innerHTML = this.props.CheckVerb.infinitiv;
			Object.keys(SvarVerb).forEach((value)=> {document.getElementById(value).value="";});
		}
		else {
			console.log("Now the answer should appear!");
			Table('table');
		}
	}

	componentDidMount() {
	const {Mingla, int, CheckVerb, Work, Fill, Clear } =this.props;
	Clear();
	Fill(Mingla, Work, int, CheckVerb);
	document.getElementById("demo").innerHTML = this.props.CheckVerb.infinitiv;
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
							  			<input type="text" className="form-control" placeholder="Supinum" aria-label="Supinum" aria-describedby="basic-addon1" id="supinum" ></input>
									</div>
			    				</div>
			  				
					</div>
						<div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row align-items-center">
							<div className="col-sm m-2"></div>
							<div className="col-sm m-8 d-flex justify-content-center">
								<button type="button" id='NästaBtn' className="btn btn-secondary btn-lg m-2" onClick={this.nextVerb} >Nästa</button>
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

//onKeyPress={(event)=>this.EnterFunction(event)}
export default connect(mapStateToProps, mapsDispatchToProps )(Test);
