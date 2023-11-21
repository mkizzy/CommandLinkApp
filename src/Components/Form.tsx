import { CSSProperties } from "react"
import { useDispatch } from "react-redux"
import DynamicField from "./DynamicField.tsx"
import fields from "../fieldSet.ts"
import { FieldSet } from "../types.ts"
import { formContainer } from "./styles.ts"
import { useFormContext } from "./context/formContextProvider.tsx"
import { submitForm } from "../actions.ts"

function Form () {
  //grab the state of the form with useContext,
  const formMethods = useFormContext();
  const {
    firstName, lastName, Email, phone, address1,
    city, state, zip, jobTitle, reason,
  } = formMethods;
  const dispatch = useDispatch();
  //field style
  //if array, get array length for number of columns
  const getFieldStyle = (field: FieldSet) => {
    const numOfColumns = Array.isArray(field) ? field.length : 1
    return { display: 'grid', width: '100%', gridTemplateColumns: `repeat(${numOfColumns}, 1fr)`, alignSelf: 'start' } as CSSProperties
  }
  //handle onClick functionality
  //going to dispatch submitform action which will save to redux, call our submitted func to turn to true
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const updatedForm = { firstName, lastName, Email, phone, address1, city, state, zip, jobTitle, reason };
    dispatch(submitForm(updatedForm));
    formMethods.setSubmitted()
  }
  
  return(
    <form
      onSubmit={handleSubmit}
      style={{
        ...formContainer,
        gridTemplateRows: `repeat(${Object.keys(fields).length}, 1fr)`,
      }}>
        {fields.map((field: FieldSet, idx) => (
            <DynamicField key={idx} field={field} style={getFieldStyle(field)} />
        ))}
      {!formMethods.submitted && (<button type='submit' style={{ marginTop: '24px' }}>Submit</button>)}
    </form>
  )
}

export default Form