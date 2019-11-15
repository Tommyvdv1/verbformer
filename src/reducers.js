import { 
	BEKRAFTA_SUCCES,
	BEKRAFTA_FAILED,
	MINGLA_STATE,
	WORKLIST_INITIAL_STATE,
	WORKLIST_FILLED,
	CHECKVERB,
	SVARVERB, 
	} from './Constants';

const initialState = {
	Login: false,
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
			WorkList: action.payload
		}
		case WORKLIST_INITIAL_STATE:
		return {
			...state,
			WorkList:[], int: [0], CheckVerb: {}, Mingla:false,
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
		default:
		return state;
	}
}