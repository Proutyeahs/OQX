import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import event from './event.reducer';
import specificEvent from './eventSpecific.reducer'
import userStories from './userStories.reducer';
import resource from './resource.reducer'
import resourceSpecific from './resourceSpecific.reducer'
import sponsor from './sponsor.reducer';
import sponsorSpecific from './sponsorSpecific.reducer';
import aboutReducer from './about.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  event,
  specificEvent,
  userStories,
  resource,
  resourceSpecific,
  sponsor,
  sponsorSpecific,
  aboutReducer
});

export default rootReducer;
