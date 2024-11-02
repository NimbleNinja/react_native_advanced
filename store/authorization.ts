import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'
import { createAppAsyncThunk } from './hooks'
import { GoogleSignin, isErrorWithCode, statusCodes } from '@react-native-google-signin/google-signin'
import { GoogleAuthProvider, signInWithCredential, AuthErrorCodes } from 'firebase/auth'
import { auth } from '../firebase-config'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FirebaseError } from 'firebase/app'

interface AuthorizationState {
  token: string | null | undefined
}

const initialState: AuthorizationState = {
  token: null
}

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null | undefined>) => {
      state.token = action.payload
    }
  }
})

export const { setToken } = authorizationSlice.actions

export const selectToken = (state: RootState) => state.authorization.token
export default authorizationSlice.reducer

export const checkAuthorizationThunk = createAppAsyncThunk('checkAuth', async (_, { dispatch }) => {
  const googleToken = await AsyncStorage.getItem('token')

  try {
    if (googleToken) {
      const credential = GoogleAuthProvider.credential(googleToken)
      await signInWithCredential(auth, credential)

      dispatch(setToken(googleToken))
    } else {
      dispatch(setToken(undefined))
    }
  } catch (err) {
    console.log('CATCH ERR: ', err)
    console.log(AuthErrorCodes)

    if (err instanceof FirebaseError) {
      if (AuthErrorCodes.INVALID_LOGIN_CREDENTIALS === err.code) {
        await AsyncStorage.clear()
        dispatch(setToken(undefined))
      }
    }
  }
})

export const signinThunk = createAppAsyncThunk('signin', async (_, { dispatch }) => {
  try {
    await GoogleSignin.hasPlayServices()
    const response = await GoogleSignin.signIn()

    if (response.type === 'success') {
      const googleToken = response.data.idToken

      if (!googleToken) {
        console.log('GOOGLE TOKEN: ', googleToken)
        return
      }

      const credential = GoogleAuthProvider.credential(response.data.idToken)
      await signInWithCredential(auth, credential)

      await AsyncStorage.setItem('token', googleToken)
      dispatch(setToken(googleToken))
    }
  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          console.log('IN_PROGRESS')
          break
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.log('PLAY_SERVICES_NOT_AVAILABLE')
          break
        default:
          console.log('DEFAULT_ERROR')
          console.log(error)
      }
    } else {
      console.log(error)
    }
  }
})

export const signoutThunk = createAppAsyncThunk('signout', async (_, { dispatch }) => {
  console.log('thunk')
  try {
    await GoogleSignin.signOut().then(res => console.log(res))
    dispatch(setToken(''))
  } catch (error) {
    //
  }
})
