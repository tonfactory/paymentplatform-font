import { makeAutoObservable } from 'mobx'

export class StateLoader {
  constructor(public isOpen = false) {
    makeAutoObservable(this)
  }

  open = () => {
    this.isOpen = true
  }

  close = () => {
    this.isOpen = false
  }

  toggle = () => {
    this.isOpen = !this.isOpen
  }
}
