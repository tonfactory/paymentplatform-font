import { action, makeAutoObservable, observable } from 'mobx'
import { TextFieldProps as TF } from '@mui/material'

export class StateFields {
  array = observable.array<TF>()

  constructor(...fields: TF[]) {
    fields.forEach(this.createFiled)

    makeAutoObservable(this)
  }

  private createFiled = (f: TF, i: number) => {
    this.array.push({
      ...f,
      key: `field-${i}`,
      value: f.value ?? '',
      onChange: action((e) => (this.array[i].value = e.target.value)),
    })
  }

  update = (...values: string[]) => {
    values.forEach((v, i) => (this.array[i].value = v))
  }

  setValue = (index: number, value = '') => {
    this.array[index].value = value
  }

  clear = () => {
    this.array.forEach((i) => (i.value = ''))
  }

  getField = (index: number) => this.array[index]

  setError = (index: number, error: boolean, text = '') => {
    this.array[index].error = error
    this.array[index].helperText = text
  }

  get values() {
    return this.array.map((f) => String(f.value).trim())
  }
}
