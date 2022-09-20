import { createSelector } from "reselect";

export const getLogin = (state) => {
   return state.auth.login;
};

export const getIsAuth = (state) => {
   return state.auth.isAuth;
};

export const getEmail = (state) => {
   return state.auth.email;
};

const downUsers = (state) => {
   console.log(state.usersPage.users);
   return state.usersPage.users;
};

export const downReselect = createSelector(downUsers, (users) => {
  return users.filter(el => el.id>=2);
});


