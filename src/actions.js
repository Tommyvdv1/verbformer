import {
  BEKRAFTA_SUCCES,
  BEKRAFTA_FAILED,
  MINGLA_STATE, 
  WORKLIST_INITIAL_STATE,
  WORKLIST_FILLED,
  CHECKVERB, 
  SVARVERB,
  } from './Constants';

export const bekrafta = () => (dispatch) => {
  dispatch({
    type: BEKRAFTA_SUCCES,
    payload: true,
  })
}

export const gorom = () => (dispatch) => {
  dispatch({
    type: BEKRAFTA_FAILED,
    payload: false,
  })
}

export const setMingla = (state) => (dispatch) => {
  dispatch({
    type: MINGLA_STATE,
    payload: state,
  })
}

export const fillWorkList = (min, max, WorkList, verb) => (dispatch) => {
  var i;
  for (i = min; i < max; i++) {
      WorkList.push(verb[i]);
  }
  dispatch({
    type: WORKLIST_FILLED,
    payload: WorkList
    });
  console.log(WorkList);
}

export const InitialWorkList = () => (dispatch) => {
  dispatch({type: WORKLIST_INITIAL_STATE});
  console.log('initial state');
  
}

export const FillCheckVerb = (Mingla, WorkList, int, CheckVerb) => (dispatch) => {
  if(Mingla){
    if(int[0]!==0){WorkList.splice(int[0]-1,1)};
    int[0] = Math.floor(Math.random() * (WorkList.length - 1)) + 1;
  }
  else {
    if(int[0] < WorkList.length) {
    int[0]=int[0]+1; 
    }
    else {
      int[0] = 1; 
    }
  }
  console.log(WorkList[0]);
  Object.keys(WorkList[0]).map((value)=> {CheckVerb[value] = WorkList[int[0]-1][value];return(value);});
  dispatch(
  {
    type: CHECKVERB,
    payload:{WorkList,int,CheckVerb},
  })
}

export const FillSvarVerb = (SvarVerb) => (dispatch) => {
  Object.keys(SvarVerb).map((value)=> {SvarVerb[value]=document.getElementById(value).value.toLowerCase();return(value);});
  dispatch({
    type:SVARVERB,
    payload: SvarVerb
    })
}