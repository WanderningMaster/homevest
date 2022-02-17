import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserData {
  id: string
  role: string
}

export interface UserState {
  isAuth: boolean
  isVerify: boolean
  userData: UserData
}

const initialState: UserState = {
  isVerify: true,
  isAuth: true,
  userData: {} as UserData,
}

const { actions, reducer } = createSlice({
  name: 'User',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserData>) => {
      state.isAuth = true
      state.isVerify = true
      state.userData = action.payload
    },
    loginFailed: state => {
      state.isAuth = false
      state.userData = {} as UserData
    },
    logout: (state, action: PayloadAction<UserData>) => {
      state.isAuth = false
      state.userData = action.payload
    },
    verify: state => {
      state.isVerify = true
    },
  },
})

const asyncLoginSaga = () => ({ type: 'asyncLogin' })
const asyncLogoutSaga = () => ({ type: 'asyncLogout' })
const asyncCheckAuthSaga = () => ({ type: 'asyncCheckAuth' })
const asyncSIgnUpSaga = () => ({ type: 'asyncSignUp' })
const asyncVerifyEmailSaga = () => ({ type: 'asyncVerifyEmail' })

const UserActionCreator = {
  ...actions,
  asyncLoginSaga,
  asyncLogoutSaga,
  asyncCheckAuthSaga,
  asyncSIgnUpSaga,
  asyncVerifyEmailSaga,
}

export { reducer, UserActionCreator }
