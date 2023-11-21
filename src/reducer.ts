import {
  INITIAL_STATE,
  SUBMIT_FORM,
} from "./constants"
// import {
//   updateFirstName,
//   updateLastName,
//   updateEmail,
//   updateAddress,
//   updateCity,
//   updateState,
//   updateZip,
//   updatePhone,
//   updateJobTitle,
//   updateReason,
// } from './actions'
import { FormState } from "./types"

//would be better to store the entirety of the form with redux, not for every input
const rootReducer = (state: FormState = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return action.payload
    default:
      return state
  }
}

// const rootReducer = (state: FormState = INITIAL_STATE, action: any) => {
//   switch (action.type) {
//     case UPDATE_FIRST_NAME:
//       return { ...state, firstName: action.payload }
//     case UPDATE_LAST_NAME:
//       return { ...state, lastName: action.payload }
//     case UPDATE_EMAIL:
//       return { ...state, email: action.payload }
//     case UPDATE_ADDRESS:
//       return { ...state, address1: action.payload }
//     case UPDATE_CITY:
//       return { ...state, city: action.payload }
//     case UPDATE_STATE:
//       return { ...state, state: action.payload }
//     case UPDATE_ZIP:
//       return { ...state, zip: action.payload }
//     case UPDATE_PHONE:
//       return { ...state, phone: action.payload }
//     case UPDATE_JOBTITLE:
//       return { ...state, jobTitle: action.payload }
//     case UPDATE_REASON:
//       return { ...state, reason: action.payload }
//     default:
//       return state
//   }
// }

// const rootReducer = createReducer(INITIAL_STATE, (builder) => {
//   builder.addCase(updateFirstName, (state, action) => ({ ...state, firstName: action.payload }))
//   builder.addCase(updateLastName, (state, action) => ({ ...state, lastName: action.payload }))
//   builder.addCase(updateEmail, (state, action) => ({ ...state, Email: action.payload }))
//   builder.addCase(updateAddress, (state, action) => ({ ...state, address1: action.payload }))
//   builder.addCase(updateCity, (state, action) => ({ ...state, city: action.payload }))
//   builder.addCase(updateState, (state, action) => ({ ...state, state: action.payload }))
//   builder.addCase(updateZip, (state, action) => ({ ...state, zip: action.payload }))
//   builder.addCase(updatePhone, (state, action) => ({ ...state, phone: action.payload }))
//   builder.addCase(updateJobTitle, (state, action) => ({ ...state, jobTitle: action.payload }))
//   builder.addCase(updateReason, (state, action) => ({ ...state, reason: action.payload }))
// })
export default rootReducer;