import Axios from 'axios';
import { useEffect, useReducer } from "react";
import { API } from '../config';

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
  // GET_VIDEO_BY_NAME:"get-video-by-name",
  // UPDATE_VIDEO:"update-video",
  // DELETE_VIDEO:"delete-video"
};


function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, videos: [] };

    case ACTIONS.GET_DATA:
      return { ...state, loading: false, videos: action.payload.videos };
    
      case ACTIONS.ERROR:
        return { ...state, loading: false, error: action.payload.error, videos:[] };
      
       default:
      return state;
  }
}

export default function useFetchvideos(params) {
  const [state, dispatch] = useReducer(reducer, { videos: [], loading: true });
  useEffect(() => {
      // const cancelToken1 = axios.CancelToken.source();
    dispatch({type:ACTIONS.MAKE_REQUEST})
    Axios.get(`${API}movies`).then(res =>{
        dispatch({type:ACTIONS.GET_DATA,payload:{videos:res.data.data}})
        console.log(res.data.data);
    }).catch(e =>{
        if(Axios.isCancel(e)) return 
        dispatch({type:ACTIONS.ERROR, payload:{error:e}})
    })
    // return () => {
    //     cancelToken1.cancel();
    //     cancelToken2.cancel();
    // }
  }, [params])

  return state;
}



