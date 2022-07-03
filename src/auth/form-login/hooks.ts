import axios from 'axios'
import { createContext, useContext, useEffect } from 'react'
import { serverUrl } from '../../constants'
import { checkProvider } from '../../utils'
import { token } from '../token'
import { StateFormLogin } from './state'

const ctx = createContext<StateFormLogin | null>(null)

export const ProviderFormLogin = ctx.Provider

export const useFormLogin = () => checkProvider(useContext(ctx), 'page login')

export const useFetchFormLogin = (login: StateFormLogin) =>
  useEffect(() => {
    if (!login.loading) return

    // login.fetch
    //   .then((res: ResponseLogin) => res.body.data.tokenAuth)
    //   .then((data) => token.set(data?.token))

    if (login.fields.values[0] === 'roman') {
      token.set("admin")
    } else if (login.fields.values[0] === 'pavel') {
      token.set("user")
    } else {
      token.set("")
    }
    login.loader.close()
  }, [login, login.loading])
