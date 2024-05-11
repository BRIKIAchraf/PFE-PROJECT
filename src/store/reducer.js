// third party
import { combineReducers } from 'redux';

// project import
import customizationReducer from './customizationReducer';
import dashboardReducer from './dashboardSlice'; // Import the dashboard slice reducer
import attendanceReducer from './attendanceSlice'; // Import the attendance slice reducer
import planningReducer from './planningSlice'; // Import the planning slice reducer
import employeeReducer from './employeeSlice'; // Import the employee slice reducer
import searchReducer from './searchSlice'; // Import the search slice reducer
import departementReducer from './departementSlice'; // Import the departement slice reducer
import leaveReducer from './leaveSlice'; // Import the leave slice reducer
// ==============================|| REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  dashboard: dashboardReducer ,// Add the dashboard slice reducer to the root reducer
  attendance: attendanceReducer,
  planning: planningReducer,
  employees: employeeReducer,
  search: searchReducer,
  departements: departementReducer,
  leave: leaveReducer

});

export default reducer;
