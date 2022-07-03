import { autorun, makeAutoObservable } from 'mobx'
import store from 'store'

class Token {
  access: string = store.get('token', '')
  username: string = store.get('username', '')

  constructor() {
    makeAutoObservable(this)
    autorun(() => store.set('token', this.access))
    autorun(() => store.set('username', this.username))
  }

  set = (access = '') => {
    this.access = access
  }

  setUsername = (username = '') => {
    this.username = username
  }

  get headers() {
    return { Authorization: `JWT ${this.access}` }
  }
}

export type { Token }

export const token = new Token()
