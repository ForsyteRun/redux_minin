export const followUnFollowHelper = (items, itemId, objId, fallowed) => {
   return  items.map(el => {
      if (el[objId] === itemId) {
         return { ...el, fallowed: fallowed}
      } 
      return el;
   })
};