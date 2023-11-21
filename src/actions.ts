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
  SUBMIT_FORM,
} from "./constants"
//import { createAction } from "@reduxjs/toolkit";
import { FieldToAction, FormState } from "./types";

export const updateFirstName = (payload: string) => ({ type: UPDATE_FIRST_NAME, payload })
export const updateLastName = (payload: string) => ({ type: UPDATE_LAST_NAME, payload })
export const updateEmail = (payload: string) => ({ type: UPDATE_EMAIL, payload })
export const updateAddress = (payload: string) => ({ type: UPDATE_ADDRESS, payload })
export const updateCity = (payload: string) => ({ type: UPDATE_CITY, payload })
export const updateState = (payload: string) => ({ type: UPDATE_STATE, payload })
export const updateZip = (payload: string) => ({ type: UPDATE_ZIP, payload })
export const updatePhone = (payload: string) => ({ type: UPDATE_PHONE, payload })
export const updateJobTitle = (payload: string) => ({ type: UPDATE_JOBTITLE, payload })
export const updateReason = (payload: string) => ({ type: UPDATE_REASON, payload })
export const submitForm = (payload: FormState) => ({ type: SUBMIT_FORM, payload })

export const fieldIdToAction = {
  firstName: (payload: string) => updateFirstName(payload),
  lastName: (payload: string) => updateLastName(payload),
  Email: (payload: string) => updateEmail(payload),
  address1: (payload: string) => updateAddress(payload),
  city: (payload: string) => updateCity(payload),
  state: (payload: string) => updateState(payload),
  zip: (payload: string) => updateZip(payload),
  phone: (payload: string) => updatePhone(payload),
  jobTitle: (payload: string) => updateJobTitle(payload),
  reason: (payload: string) => updateReason(payload)
} as FieldToAction