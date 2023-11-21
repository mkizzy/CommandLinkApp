import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'
import App from './Components/App.tsx'
import './index.css'
import FormContextProvider from './Components/context/formContextProvider.tsx'

const store = configureStore({ reducer: rootReducer })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <FormContextProvider>
      <App />
    </FormContextProvider>
  </Provider>,
)
