import {
  BEKRAFTA_SUCCES,
  BEKRAFTA_FAILED,
  MINGLA_STATE, 
  WORKLIST_INITIAL_STATE,
  WORKLIST_FILLED,
  CHECKVERB, 
  SVARVERB,
  FILLED_TESTLIST,
  EMPTY_TESTLIST,
  } from './Constants';

export const bekrafta = (log) => (dispatch) => {
  dispatch({
    type: BEKRAFTA_SUCCES,
    payload: log,
  })
}

export const gorom = () => (dispatch) => {
  dispatch({
    type: BEKRAFTA_FAILED,
    payload: 'check',
  })
}

export const setMingla = (state) => (dispatch) => {
  dispatch({
    type: MINGLA_STATE,
    payload: state,
  })
}

export const fillWorkList = (min, max, workList, verb, språk) => (dispatch) => {
  var i;
  for (i = min; i < max; i++) {
      workList.push(verb[i]);
  }
  dispatch({
    type: WORKLIST_FILLED,
    payload: {WorkList:workList, Språk:språk, testList:workList,},
    });
  console.log(workList);
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
    if(WorkList.length!==0 && int[0]!==0){
      WorkList.splice(0,1)
    }
    else {
      int[0]=1;
    }
  }
  console.log(WorkList[0]);
  Object.keys(WorkList[0]).forEach((value)=> {CheckVerb[value] = WorkList[int[0]-1][value];});
  dispatch(
  {
    type: CHECKVERB,
    payload:{WorkList,int,CheckVerb},
  })
}

export const FillSvarVerb = (SvarVerb) => (dispatch) => {
  Object.keys(SvarVerb).forEach((value)=> {SvarVerb[value]=document.getElementById(value).value.toLowerCase();});
  dispatch({
    type:SVARVERB,
    payload: SvarVerb
    })
}

const check1 = (a, b, c, d) => { 
  if (a === b)
  {
    return(c);//"#8bbc33";
  }
  else
  {
    return(d);
  }
}

export const FillTestList = (SvarVerb, testList, CheckVerb) => (dispatch) => {
  const Verb = {
    nederländska: CheckVerb.nederländska,
    infinitiv: CheckVerb.infinitiv,
    presens: SvarVerb.presens,
    preteritum: SvarVerb.preteritum,
    supinum: SvarVerb.supinum,
    backgroundColor:{},
    correctAnswer: {},
  };
  Object.keys(SvarVerb).forEach(value =>{
    const name=value+'Color';
    Verb.backgroundColor[name]=check1(SvarVerb[value], CheckVerb[value],'rgb(139, 188, 51)',"#ff4d4d");
    Verb.correctAnswer[value]=check1(SvarVerb[value], CheckVerb[value], '' , `(${CheckVerb[value]})` );
  });
  testList.push(Verb);
  dispatch({
    type: FILLED_TESTLIST,
    payload: testList,
    })
}

//voorlopig niet gebruikt!
export const fillTestList2 = (min, max, testList, workList, verb) => (dispatch) => {
  var i;
  for (i = min; i < max; i++) {
      testList.push(verb[i]);
  }
  workList=testList;
  console.log(workList);
  //Object.keys(testList).map(value=>{value['backgroundColor']={presensColor:'',preteritumColor:'',supinumColor:'',}});
  dispatch({
    type: FILLED_TESTLIST,
    payload: testList,
    })
}


export const ClearTestList = () => (dispatch) => {
  dispatch({
    type: EMPTY_TESTLIST,
  })
}

