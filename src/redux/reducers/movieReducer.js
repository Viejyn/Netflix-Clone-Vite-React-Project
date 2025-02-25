import { actionTypes } from "../actionTypes"

const initialState={
    populerMovies:[],
    genres:[],
    isLoading:true
}

export const movieReducer=(state=initialState,action) =>{

    switch(action.type) {
        case actionTypes.SET_MOVIES:
            return{
                ...state,
                populerMovies:action.payload.results,
                isLoading:false
            }

            case actionTypes.SET_LOADING:
                return{
                    isLoading:action.payload
                }

            case actionTypes.SET_CATEGORIES:
                return{
                    ...state,
                    genres:action.payload
                }
           
            default:
                return state
    }
}
