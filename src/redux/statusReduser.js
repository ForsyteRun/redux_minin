import { getUsersApi, profileAPI } from "../api/api";

let follow = 'minin/statusReduser/FOLLOW';
let unfollow = 'minin/statusReduser/UNFOLLOW';
let set_Users = 'minin/statusReduser/SETUSERS';
let current_Page = 'minin/statusReduser/CURRENT_PAGE';
let toggle_Loading = 'minin/statusReduser/toggle_loading';
let total_pages = 'minin/statusReduser/total_pages';
let is_Following_Progres = 'minin/statusReduser/IS_FOLLOWING_PROGRESS';
let get_Status = 'minin/statusReduser/GET_STATUS';
let update_Status = 'minin/statusReduser/UPDATE_STATUS';

let initialState = {
   users: [],
   pageSize: 5,
   totalUserCount: 50,
   currentPage: 1,
   isLoading: false,
   isFollowingProgress: [],
   status: 'enter status',
   fake: 5,
}

//reduser - logic of statusPage
let statusReduser = (state = initialState, action) => {
   switch (action.type) {
      case 'fake': return {...state, fake: action.fake + 1}
      case follow:
         return {
            ...state,
            users: state.users.map(el => {
               if(el.id === action.userId){
                  return {...el, fallowed: true}
               } return el;
            })
         }

      case unfollow:
            return {
               ...state, 
               users: state.users.map(el => {
                  if(el.id === action.userId){
                     return {...el, fallowed: false}
                  } return el;
               })
         }
      case set_Users:
         return {
            ...state, 
            users: [...action.users],
         }

      case current_Page:
         return {
            ...state,
            currentPage: action.pageId,
         }

      case total_pages:
         return {
            ...state,
            totalUserCount: action.numPages,
         }  

      case toggle_Loading:
         return {
            ...state,
            isLoading: action.isLoading,
         }    

      case is_Following_Progres:
         return {
            ...state, 
            isFollowingProgress: action.isFollowBoolean 
                               ? [...state.isFollowingProgress, action.id] 
                               : state.isFollowingProgress.filter(id => id !== action.id),
         }

      case get_Status:
      let i;   
      for (i of action.status)
         return {
            ...state,
            status: i.status
         }

      case update_Status:
         return {
            ...state, 
            status: action.reStatus
         }

      default:
         return state;
   }
}


export default statusReduser;

//action-creaters
export let followAC = (userId) => {
   return {
      type: follow,
      userId,
   }
        
};

export let unFollowAC = (userId) => {
   return{
      type: unfollow,
      userId,
   }
};

export let setUsers = (users) => {
   return{
      type: set_Users,
      users,
   }
}

export let currentPage = (pageId) => {
   return {
      type: current_Page,
      pageId,
   }
}

export let totalPages = (numPages) => {
   return {
      type: total_pages,
      numPages,
   }
}

export let toggleLoading = (isLoading) => {
   return {
      type: toggle_Loading,
      isLoading,
   }
}

export let isFollowing = (isFollowBoolean, id) => {
   return {
      type: is_Following_Progres,
      id,
      isFollowBoolean,
   }
}

export const getStatus = (status) => {
   return {
      type: get_Status,
      status,
   }
}

const updateStatus = (reStatus) => {
   return {
      type: update_Status,
      reStatus,
   }
}

//thunk-creaters
export const getUsersThunkCreater = (pageSize, currentPage) => async (dispath) => {
      dispath(toggleLoading(true))    
      let res = await getUsersApi(pageSize, currentPage)
               dispath(setUsers(res.data));
               dispath(totalPages((res.headers['x-total-count'])));
               dispath(toggleLoading(false))      
};

export const getPageChangeThunkCreater = (pageSize, nextPage) => async (dispatch) => {
      dispatch(currentPage(nextPage))
      dispatch(toggleLoading(true))
      
      let res = await getUsersApi(pageSize, nextPage) 
      dispatch(setUsers(res.data))
      dispatch(toggleLoading(false))
};    
    

export const getNewsThunkCreater = () => async (dispatch) => {
      let res = await profileAPI.getStatus()
      dispatch(getStatus(res.data))
   }


export const setNewsThunkCreater = (status) => async () => {
      await profileAPI.setStatus(status)
   }

export const updateNewsThunkCreater = (reStatus) => async (dispatch) => {
      let res = await profileAPI.updateStatus(reStatus)
      dispatch(updateStatus(res.data.status))
   }
