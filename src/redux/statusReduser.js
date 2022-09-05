import { getUsersApi } from "../api/api";

let follow = 'FOLLOW';
let unfollow = 'UNFOLLOW';
let set_Users = 'SETUSERS';
let current_Page = 'CURRENT_PAGE';
let toggle_Loading = 'toggle_loading';
let total_pages = 'total_pages';
let is_Following_Progres = 'IS_FOLLOWING_PROGRESS';


let initialState = {
   users: [],
   pageSize: 5,
   totalUserCount: 50,
   currentPage: 1,
   isLoading: false,
   isFollowingProgress: [],
}

let statusReduser = (state = initialState, action) => {
   switch (action.type) {
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

      default:
         return state;
   }
}


export default statusReduser;

export let followAC = (userId) => {
   return {
      type: follow,
      userId: userId,
   }
        
};

export let unFollowAC = (userId) => {
   return{
      type: unfollow,
      userId: userId,
   }
};

export let setUsers = (users) => {
   return{
      type: set_Users,
      users: users,
   }
}

export let currentPage = (pageId) => {
   return {
      type: current_Page,
      pageId: pageId,
   }
}

export let totalPages = (numPages) => {
   return {
      type: total_pages,
      numPages: numPages,
   }
}

export let toggleLoading = (isLoading) => {
   return {
      type: toggle_Loading,
      isLoading: isLoading,
   }
}

export let isFollowing = (isFollowBoolean, id) => {
   return {
      type: is_Following_Progres,
      id,
      isFollowBoolean,
   }
}

export const getUsersThunkCreater = (pageSize, currentPage) => {
   return (dispath) => {
      dispath(toggleLoading(true))    
      getUsersApi(pageSize, currentPage).then(response => {
               dispath(setUsers(response.data));
               dispath(totalPages((response.headers['x-total-count'])));
               dispath(toggleLoading(false))      
            })
}};

export const getPageChangeThunkCreater = (pageSize, el) => {
   return (dispatch) => {
      dispatch(currentPage(el))
      dispatch(toggleLoading(true))
      getUsersApi(pageSize, el).then(response =>{ 
        dispatch(setUsers(response.data))
        dispatch(toggleLoading(false))
      })    
    }
   }