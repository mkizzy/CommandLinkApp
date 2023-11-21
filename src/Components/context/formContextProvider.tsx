import { ReactNode, createContext, useContext, useReducer } from 'react';
import { updateAddress, updateCity, updateEmail, updateFirstName, updateJobTitle, updateLastName, updatePhone, updateReason, updateState, updateZip } from '../../actions';
import {
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
  UPDATE_EMAIL,
  UPDATE_ADDRESS,
  UPDATE_CITY,
  UPDATE_STATE,
  UPDATE_ZIP,
  UPDATE_PHONE,
  UPDATE_JOBTITLE,
  UPDATE_REASON,
} from "../../constants"

const CONTEXT_INTIAL_STATE = {
  submitted: false,
  firstName: '',
  lastName: '',
  Email: '',
  address1: '',
  city: '',
  state: '',
  zip: '',
  phone: '',
  jobTitle: '',
  reason: '',
  fieldIdToAction: {},
  setSubmitted: () => {}
}

const FormContext = createContext(CONTEXT_INTIAL_STATE)

type FormContextProviderProps = {
  children: ReactNode
}
//build out a form provider as we are going to need to grab the form state
//can useContext here so that we can grab our 'context' -> all the form data
const SUBMIT_FORM = 'SUBMIT_FORM'

const INITIAL_STATE = {
  submitted: false,
  firstName: '',
  lastName: '',
  Email: '',
  address1: '',
  city: '',
  state: '',
  zip: '',
  phone: '',
  jobTitle: '',
  reason: '',
}

const updatedSubmitted = () => ({ type: SUBMIT_FORM })
const formContextReducer = (state: any, action: any) => {
  console.log({ action });
  switch (action.type) {
    case UPDATE_FIRST_NAME:
      return { ...state, firstName: action.payload }
    case UPDATE_LAST_NAME:
      return { ...state, lastName: action.payload }
    case UPDATE_EMAIL:
      return { ...state, Email: action.payload }
    case UPDATE_ADDRESS:
      return { ...state, address1: action.payload }
    case UPDATE_CITY:
      return { ...state, city: action.payload }
    case UPDATE_STATE:
      return { ...state, state: action.payload }
    case UPDATE_ZIP:
      return { ...state, zip: action.payload }
    case UPDATE_PHONE:
      return { ...state, phone: action.payload }
    case UPDATE_JOBTITLE:
      return { ...state, jobTitle: action.payload }
    case UPDATE_REASON:
      return { ...state, reason: action.payload }
    case SUBMIT_FORM: 
      return { ...state,  submitted: true }
    default:
      return state
  }
}

const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [state, dispatch] = useReducer(formContextReducer, INITIAL_STATE);

  const actions = {
    fieldIdToAction: {
      firstName: (value: string) => dispatch(updateFirstName(value)),
      lastName: (value: string) => dispatch(updateLastName(value)),
      Email: (value: string) => dispatch(updateEmail(value)),
      address1: (value: string) => dispatch(updateAddress(value)),
      city: (value: string) => dispatch(updateCity(value)),
      state: (value: string) => dispatch(updateState(value)),
      zip: (value: string) => dispatch(updateZip(value)),
      phone: (value: string) => dispatch(updatePhone(value)),
      jobTitle: (value: string) => dispatch(updateJobTitle(value)),
      reason: (value: string) => dispatch(updateReason(value)),
    },
    setSubmitted: () => dispatch(updatedSubmitted())
  }

  return (
    <FormContext.Provider value={{ ...state, ...actions }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () =>  useContext(FormContext);
export default FormContextProvider