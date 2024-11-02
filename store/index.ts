import { configureStore } from '@reduxjs/toolkit'
import authorizationReducer from './authorization'
import { createLogger } from 'redux-logger'

const logger = createLogger({
  collapsed: true
})

export const store = configureStore({
  reducer: {
    authorization: authorizationReducer
  },
  middleware: getDefaultMiddlware => getDefaultMiddlware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
