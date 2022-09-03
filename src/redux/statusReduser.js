let follow = 'FOLLOW';
let unfollow = 'UNFOLLOW';
let set_Users = 'SETUSERS';
let current_Page = 'CURRENT_PAGE';
let toggle_Loading = 'toggle_loading';
let total_pages = 'total_pages';
let is_Following_Progres = 'IS_FOLLOWING_PROGRESS';


let initialState = {
   users: [
      // {id: 1, imgUrl: 'https://donttakefake.com/wp-content/uploads/2020/11/smile-dtf-magazine.png', fullName: 'Ivan', status: 'admin', country: 'USA', fallowed: false},
      // {id: 2, imgUrl: 'https://donttakefake.com/wp-content/uploads/2020/11/smile-dtf-magazine.png', fullName: 'Maria', status: 'admin', country: 'Bolgary',fallowed: false},
      // {id: 3, imgUrl: 'https://donttakefake.com/wp-content/uploads/2020/11/smile-dtf-magazine.png', fullName: 'Stepan', status: 'user', country: 'China', fallowed: true},
      // {id: 4, imgUrl: 'https://donttakefake.com/wp-content/uploads/2020/11/smile-dtf-magazine.png', fullName: 'Airan', status: 'user', country: 'Bali',fallowed: true},
   ],
   pageSize: 5,
   totalUserCount: 50,
   currentPage: 1,
   isLoading: false,
   isFollowingProgress: false,
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
            isFollowingProgress: action.isLoading,
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

export let isFollowing = (isLoading) => {
   return {
      type: is_Following_Progres,
      isLoading,
   }
}