let follow = 'FOLLOW';
let unfollow = 'UNFOLLOW';
let set_Users = 'SETUSERS';

let initialState = {
   users: [
      // {id: 1, imgUrl: 'https://donttakefake.com/wp-content/uploads/2020/11/smile-dtf-magazine.png', fullName: 'Ivan', status: 'admin', country: 'USA', fallowed: false},
      // {id: 2, imgUrl: 'https://donttakefake.com/wp-content/uploads/2020/11/smile-dtf-magazine.png', fullName: 'Maria', status: 'admin', country: 'Bolgary',fallowed: false},
      // {id: 3, imgUrl: 'https://donttakefake.com/wp-content/uploads/2020/11/smile-dtf-magazine.png', fullName: 'Stepan', status: 'user', country: 'China', fallowed: true},
      // {id: 4, imgUrl: 'https://donttakefake.com/wp-content/uploads/2020/11/smile-dtf-magazine.png', fullName: 'Airan', status: 'user', country: 'Bali',fallowed: true},
   ],
   pageSize: 4,
   totalUserCount: 10,
   currentPage: 2,
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