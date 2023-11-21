import { AnyAction } from "@reduxjs/toolkit"

export type FormState = {
  firstName: string,
  lastName: string,
  Email: string,
  address1: string,
  city: string,
  state: string,
  zip: string,
  phone: string,
  jobTitle: string,
  reason: string,
}

export type FieldSet = Array<Field> | Field

export type Field = {
  id: string
  type: string
  placeholder?: string
  options?: Array<string>
  required?: boolean
}

export type FieldToAction = { [field: string]: (payload: string) => AnyAction }

