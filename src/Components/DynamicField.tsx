import { CSSProperties } from "react"
import InputField from "./InputField"
import { Field, FieldSet } from "../types"

type DynamicFieldProps = {
  field: FieldSet
  style: CSSProperties
}
//build out a dynamic component that checks if what type of input field
//our inputs will be an object or an array based on the field set
//if array, map out our fields
const DynamicField = ({ field, style }: DynamicFieldProps) => {
  if (Array.isArray(field)) {
    return (<div style={style}>{field.map((fieldObj, idx) => (<InputField key={idx} field={fieldObj} />))}</div>)
  } else{
    return (<InputField style={style} field={field as Field} />)
  }
}

export default DynamicField
