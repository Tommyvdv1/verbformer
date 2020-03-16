import { 
	BEKRAFTA_SUCCES,
	BEKRAFTA_FAILED,
	MINGLA_STATE,
	WORKLIST_INITIAL_STATE,
	WORKLIST_FILLED,
	CHECKVERB,
	SVARVERB,
	EMPTY_TESTLIST,
	FILLED_TESTLIST, 
	} from './Constants';

const initialState = {
	Login: 'check',
}

export const LoginReducer = (state = initialState, action) => {
	switch (action.type) {
		case BEKRAFTA_SUCCES:
		return {
			...state,
			Login: action.payload,
		}
		case BEKRAFTA_FAILED:
		return {
			...state,
			Login:action.payload,
		}
		default:
		return state;
	}
}

const initialVerbState = {
	Språk: "swe",
	Mingla: false,
	WorkList:[],
	CheckVerb: {},
	SvarVerb: 
	{
		presens:"",
		preteritum:"",
		supinum:"",
	},
	int: [0],
	testList:[],
}

export const VerbReducer = (state = initialVerbState, action) => {
	switch(action.type) {
		case MINGLA_STATE:
		return {
			...state,
			Mingla: action.payload,
		}
		case WORKLIST_FILLED:
		return {
			...state,
			WorkList: action.payload.WorkList,
			Språk: action.payload.Språk,
			testList: action.payload.testList,
		}
		case WORKLIST_INITIAL_STATE:
		return {
			...state,
			Språk: "swe",
			Mingla: false,
			WorkList:[],
			CheckVerb: {},
			SvarVerb: 
			{
				presens:"",
				preteritum:"",
				supinum:"",
			},
			int: [0],
			testList:[],
		}
		case CHECKVERB:
		return {
			...state,
			WorkList: action.payload.WorkList,
			CheckVerb: action.payload.CheckVerb,
			int: action.payload.int,
		}
		case SVARVERB:
		return {
			...state,
			SvarVerb: action.payload,
		}
		case EMPTY_TESTLIST:
		return {
			...state,
			testList: [],
		}
		case FILLED_TESTLIST:
		return {
			...state,
			testList: action.payload,
		}
		default:
		return state;
	}
}
