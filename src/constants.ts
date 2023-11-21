export const INITIAL_STATE = {
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

export enum FieldType {
  text = "text",
  select = "select",
  textarea = "textarea"
}

export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME'
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME'
export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
export const UPDATE_CITY = 'UPDATE_CITY'
export const UPDATE_STATE = 'UPDATE_STATE'
export const UPDATE_ZIP = 'UPDATE_ZIP'
export const UPDATE_PHONE = 'UPDATE_PHONE'
export const UPDATE_JOBTITLE = 'UPDATE_JOBTITLE'
export const UPDATE_REASON = 'UPDATE_REASON'

export const SUBMIT_FORM = 'SUBMIT_FORM'