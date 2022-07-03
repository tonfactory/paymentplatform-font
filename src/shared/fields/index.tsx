import { observer, Observer } from 'mobx-react-lite'
import { Stack, StackProps, TextField } from '@mui/material'
import { StateFields } from '../../auth/form-login/fields'

interface Props extends StackProps {
  fields: StateFields
}

export const Fields = observer<Props>(({ fields, ...props }) => (
  <Stack {...props}>
    {fields.array.map((field) => (
      <Observer key={field.key}>{() => <TextField {...field} />}</Observer>
    ))}
  </Stack>
))
