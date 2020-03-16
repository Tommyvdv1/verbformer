import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gorom, InitialWorkList, ClearTestList,} from '../../actions';


const mapStateToProps = state => {
    return {
        testList: state.VerbReducer.testList,
        workList: state.VerbReducer.WorkList,
    }
}


const mapsDispatchToProps = (dispatch) => {
    return {
    	Clear: () => dispatch(InitialWorkList()),
    	gorom: () => dispatch(gorom()),
    	Empty: () => dispatch(ClearTestList()),
    	}
    }

class Table extends Component {

	GörOm = () => {
	this.props.gorom();
	this.props.Clear();
	this.props.Empty();
	}

	render() {
		const {workList, testList} = this.props;
		return(
		<div className='container'>
			<div className="d-flex flex-column">
				<table className='table table-bordered' style={{width:'100%', backgroundColor: 'white',}}>
  					<thead>
  						<tr style={{backgroundColor: 'brown',}}>
  							<th>Nederländska</th>
							<th>Infinitiv</th>
							<th>Presens</th>
							<th>Preteritum</th> 
							<th>Supinum</th>
						</tr>
					</thead>
					<tbody>
						{workList.length===1 ? testList.map((value, key) =>{return(
							<tr key={key}>
								<td style={{backgroundColor: 'brown'}}>{value.nederländska}</td>
								<td style={{backgroundColor: 'rgb(139, 188, 51)'}}>{value.infinitiv}</td>
								<td style={{backgroundColor: value.backgroundColor.presensColor}}>{value.presens+' '+value.correctAnswer.presens}</td>
								<td style={{backgroundColor: value.backgroundColor.preteritumColor}}>{value.preteritum+' '+value.correctAnswer.preteritum}</td>
								<td style={{backgroundColor: value.backgroundColor.supinumColor}}>{value.supinum+' '+value.correctAnswer.supinum}</td>
							</tr>)
						}) : testList.map((value, key) =>{return(
							<tr key={key}>
								<td style={{backgroundColor: 'brown'}}>{value.nederländska}</td>
								<td style={{backgroundColor: 'rgb(139, 188, 51)'}}>{value.infinitiv}</td>
								<td style={{backgroundColor: 'rgb(139, 188, 51)'}}>{value.presens}</td>
								<td style={{backgroundColor: 'rgb(139, 188, 51)'}}>{value.preteritum}</td>
								<td style={{backgroundColor: 'rgb(139, 188, 51)'}}>{value.supinum}</td>
							</tr>)
					})} 
					</tbody>
				</table>
			</div>
			<div className="d-flex col-sm m-2 justify-content-center">
				<button type="button" id='GorOm' className="btn btn-secondary btn-lg m-2" onClick={this.GörOm}>Gör om</button>
			</div>
		</div>
			)
	}
}

export default connect(mapStateToProps, mapsDispatchToProps)(Table);