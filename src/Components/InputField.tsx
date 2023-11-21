import { useState, useEffect, CSSProperties } from 'react'
import { FieldType } from '../constants'
import { Field } from '../types'
import { useSelector } from 'react-redux'
import { useFormContext } from './context/formContextProvider'

type InputFieldProps = {
  field: Field
  style?: CSSProperties
}
//create input field function
//should take in fields and return JSX based on fields 
const InputField = ({ field, style }: InputFieldProps) => {
  const [input, setInput] = useState<string>('')
  //deconstruct our actions with fieldIdToAction
  const { submitted, fieldIdToAction } = useFormContext() as any;
  const form = useSelector(state => state) as any;
  // console.log({ form, submitted });
  const fieldId = field.id as string;
  const baseStyle = { width: '100%' }
  //didnt want to leave the scroll down blank as default
  useEffect(() => {
    // dynamically set the initial value of 'jobTitle' or any HTML select tag field in redux to first option
    // sync with redux with fieldIdToAction for default value
    if (field.type === FieldType.select && field.options?.length) {
      fieldIdToAction[fieldId](field.options[0])
      // dispatch(fieldIdToAction[fieldId](field.options[0]))
    }
  }, [])
  // handle redux update here for each input
  const handleOnChange = (e: any) => {
    setInput(e.target.value)
    fieldIdToAction[fieldId](e.target.value)
    // dispatch(fieldIdToAction[fieldId](e.target.value))
  }

  const phoneAndEmailValidation = () => {
    switch (fieldId) {
      case 'phone': 
        return "^\+(?:\d{1,3}[-.]){1,2}\d{1,14}|\(\d{1,3}\)(?:[-.]\d{1,14}|(?:\s*\d){1,14})|(?:\d{1,4}[-.\s]){1,3}\d{1,14}$"
      case 'Email':
        return "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
      default:
        return "[a-zA-Z0-9\s]+"
    }
  }
  //handling the different types of inputs from fieldSet
  //select, text and textarea tags
  const getFormField = (type: string) => {
    switch (type) {
      case FieldType.select:
        const fieldOptions = field.options as Array<string>
        return (
        <select
          style={{ ...baseStyle, ...style }}
          name={fieldId}
          required={field?.required}
          defaultValue={fieldOptions[0]}
          value={input}
          onChange={handleOnChange}
        >
          {fieldOptions.map((option, idx) => 
            <option
              value={option}
              key={idx}
              selected={input === option}
            >
              {option}
            </option>
          )}
        </select>
        )
      case FieldType.textarea:
        return (
          <div style={{ width: '100%', height: '100px' }}>
            <textarea 
              style={{ ...baseStyle, ...style, minHeight: '100px' }}
              id={fieldId} 
              placeholder={field.placeholder}
              required={field?.required}
              onChange={handleOnChange}
            >
              {input}
            </textarea>
          </div>
        )
      case FieldType.text:
      default:
        return (
        <input
          style={{ ...baseStyle, ...style }}
          type={type === 'Email' ? 'email' : type}
          required={field?.required}
          placeholder={field.placeholder ?? fieldId}
          value={input}
          onChange={handleOnChange}
          minLength={fieldId === 'phone' ? 10 : 1}
          pattern={phoneAndEmailValidation()}
        />
      )
    }
  }
  //return jsx based on our submitted context
  return (
    <>
      {submitted ? <div style={{}}>{form[fieldId]}</div> : getFormField(field.type)}
    </>
  )         
}

export default InputField
