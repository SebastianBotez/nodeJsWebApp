module.exports = {
  isUserLoggedIn: function(userID) {
    if(undefined !== userID) {
      return true;
    } else {
      return false;
    }
  }
};
