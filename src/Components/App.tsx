import "./App.tsx"
import Form from "./Form.tsx"
import { useFormContext } from "./context/formContextProvider.tsx"

function App() {
  const { submitted } = useFormContext();
  const header = submitted ? 'Thank You' : 'Command Link Form'
  return (
    <>
      <h1>{header}</h1>
      <Form></Form>
    </>
  )
}

export default App
