export const storeUser = (user) => {
  return {
    type: 'STORE_USER',
    payload: user,
  };
};

export const removeUser = () => {
  return {
    type: 'REMOVE_USER',
  };
};
