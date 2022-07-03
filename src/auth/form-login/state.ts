import { makeAutoObservable } from 'mobx'
import { StateFields } from './fields'
import { StateLoader } from './loader'


export class StateFormLogin {
  loader = new StateLoader()
  fields = new StateFields(
    { label: 'Login', autoFocus: true },
    { label: 'Password', type: 'password' }
  )
  
  submit = () => this.loader.open()

  get loading() {
    return this.loader.isOpen
  }

  get data() {
    const [username, password] = this.fields.values

    return { username, password }
  }

  get disabled() {
    return !Object.values(this.data).every(Boolean)
  }

  get fetch() {
    const [username, password] = this.fields.values
    this.loader.close
    return ''

    // return request
    //   .graphql(queries.tokenAuth, { username, password })
    //   .on('response', this.loader.close)
  }

  constructor() {
    makeAutoObservable(this)
  }
}
